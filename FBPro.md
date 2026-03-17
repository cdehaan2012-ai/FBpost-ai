T
```markdown
# PRD: FamPost AI - High-Quality Family Content Generator
**Status:** Draft | **Version:** 1.0.0 | **Platform:** Google Antigravity

## 1. Product Concept
Aplikasi "FamPost AI" adalah generator konten visual otomatis untuk Facebook yang menggabungkan nasehat kehidupan keluarga dengan estetika gambar bertenaga AI. Fokus utama adalah kemudahan unduh dan kualitas visual premium.

---

## 2. Technical Stack (Antigravity Integration)
* **Orchestrator:** Vertex AI Agent Builder / Antigravity Logic.
* **Text Engine:** `gemini-3-flash` (Optimasi Latensi Rendah).
* **Visual Engine:** `gemini-3-flash-image` (Nano Banana 2).
* **Output Format:** 1080x1080 (FB Square) / 1080x1350 (FB Portrait).

---

## 3. Workflow Logic
Aplikasi beroperasi dalam satu siklus *stateless*:
1.  **Input:** User memilih kategori (e.g., *Parenting, Pasangan, Self-Reminder*).
2.  **Logic:** Agent memproses input menjadi dua output simultan:
    * **Teks:** Kutipan motivasi dalam Bahasa Indonesia.
    * **Visual Prompt:** Deskripsi gambar sinematik (English) berdasarkan konteks teks.
3.  **Rendering:** Penggabungan Layer (Image + Gradient Overlay + Typography).

---

## 4. API & Prompt Specifications

### 4.1. System Instruction (Gemini 3 Flash)
```text
Role: Family Life Expert & Content Strategist.
Goal: Generate a JSON object containing:
- "content_text": A soulful, warm, and concise Indonesian quote (max 15 words).
- "visual_prompt": A descriptive English prompt for high-quality photography.
Constraint: Avoid clichés. Focus on warmth, empathy, and Indonesian family nuances.

```

### 4.2. Image Generation Parameters (Nano Banana 2)

* **Style:** Cinematic Photography, Warm Lighting, Soft Bokeh.
* **Aspect Ratio:** 1:1.
* **Safety Filter:** Family-friendly, professional, high-fidelity.

---

## 5. UI/UX Functional Requirements

* **Live Preview:** Menampilkan hasil *generate* sebelum tombol unduh muncul.
* **Download Trigger:** Mengaktifkan fungsi `saveImage()` untuk menyimpan file ke lokal (Gallery/Disk).
* **Regenerate Button:** Tombol untuk mencoba kombinasi teks/gambar baru jika hasil pertama kurang memuaskan.

---

## 6. Data Schema (JSON Output)

```json
{
  "request_id": "string",
  "category": "string",
  "generated_content": {
    "quote": "Harta paling berharga adalah waktu yang kita habiskan bersama keluarga.",
    "image_prompt": "Close-up of a father and child laughing in a sunny garden, golden hour, 4k, cinematic blur background",
    "image_url": "v-ai-generated-link-001"
  },
  "timestamp": "ISO8601"
}

```

---

## 7. Quality Assurance (QA) Metrics

1. **Readability:** Teks harus kontras dengan latar belakang (min. ratio 4.5:1).
2. **Cultural Relevance:** Gambar yang dihasilkan harus relevan dengan budaya kekeluargaan yang hangat (Indonesian/Asian friendly).
3. **Speed:** Proses dari klik hingga gambar muncul < 5 detik (menggunakan Gemini 3 Flash).

```

---

