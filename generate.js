import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) return res.status(500).json({ error: "API Key Missing" });

  const { category, tone } = req.body;
  const prompt = `
    Role: Pakar Konten Kristiani & Motivasi.
    Tugas: Buat 1 kutipan pendek (maks 20 kata) Bahasa Indonesia bertema "${category}" mood "${tone}".
    Berikan juga 1 visual_prompt (Inggris) untuk mencari gambar yang sangat relevan di Unsplash.
    FORMAT JSON: { "quote": "...", "image_prompt": "..." }
  `.trim();

  // MENGGUNAKAN gemini-flash-latest SEBAGAI PILIHAN UTAMA KARENA TERBUKTI BERHASIL
  const modelNames = ["gemini-flash-latest", "gemini-pro-latest", "gemini-1.5-flash"];

  for (const modelName of modelNames) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(prompt);
      const text = result.response.text().replace(/```json|```/g, "").trim();
      return res.status(200).json(JSON.parse(text));
    } catch (error) {
      console.error(`Gagal dengan ${modelName}, mencoba model lain...`);
      continue;
    }
  }

  return res.status(500).json({ error: "Semua model di akun Anda gagal merespon." });
}
