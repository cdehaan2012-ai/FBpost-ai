# 🕊️ FamPost AI - Christian Visual Generator (Powered by Gemini AI)

**FamPost AI** adalah platform generator konten visual spiritual yang menggabungkan kecerdasan buatan (AI) dengan desain estetik. Aplikasi ini secara otomatis menciptakan kutipan/ayat Alkitab dan memilih latar belakang gambar yang relevan menggunakan **Google Gemini AI**.

---

## ✨ Fitur Unggulan

- **🧠 Smart AI Content Generator**: Menggunakan **Google Gemini (1.5 Flash / Pro)** untuk men-generate kutipan rohani asli dan *visual prompt* yang relevan secara otomatis.
- **🎨 Dynamic Image Search**: Sistem pencarian gambar otomatis berbasis *keyword* dari AI untuk mendapatkan suasana latar belakang yang paling pas.
- **📱 Responsive Layout**: Desain adaptif dengan tampilan **2-Kolom Desktop** (Sticky Preview) dan **1-Kolom Mobile**.
- **📏 Multiple Aspect Ratios**: Pilihan rasio fleksibel: **1:1 (Post)**, **4:5 (Portrait)**, dan **9:16 (Story)**.
- **🖋️ Custom Typography**: Pilih dari berbagai font rohani premium dan ubah posisi teks (Atas, Tengah, Bawah).
- **🔒 Secure API Proxy**: Integrasi API Gemini yang aman menggunakan **Vercel Serverless Functions** (melindungi API Key Anda).
- **💾 Design History**: Simpan dan akses kembali riwayat desain langsung di browser Anda.

---

## 🚀 Teknologi yang Digunakan

- **Frontend**: Vanilla JavaScript (ES6+), HTML5, CSS3 (Modern Glassmorphism).
- **AI Brain**: [Google Gemini AI API](https://aistudio.google.com/).
- **Backend API**: [Vercel Serverless Functions](https://vercel.com/docs/functions) (Node.js).
- **Image Provider**: [Unsplash](https://unsplash.com/) & [LoremFlickr](https://loremflickr.com/).
- **Canvas Rendering**: [html2canvas](https://html2canvas.hertzen.com/).

---

## 🛠️ Cara Setup & Jalankan Lokal

1. **Clone & Install**:
   ```bash
   # Clone project
   git clone https://github.com/username/fampost-ai.git
   cd fampost-ai

   # Install dependencies (untuk @google/generative-ai)
   npm install
   ```

2. **Konfigurasi API Key**:
   Buat file `.env` di root folder dan isi dengan Gemini API Key Anda:
   ```text
   GEMINI_API_KEY=KUNCI_API_GEMINI_ANDA
   ```

3. **Jalankan di Lokal (Development)**:
   Gunakan Vercel CLI untuk menjalankan server backend lokal:
   ```bash
   vercel dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

---

## 📄 Deployment di Vercel

Aplikasi ini dirancang khusus untuk **Vercel**. Pastikan Anda menambahkan Environment Variable berikut di dashboard Vercel Project Anda:
- `GEMINI_API_KEY`: Masukkan API Key dari Google AI Studio.

---

## 🙏 Kontribusi & Lisensi

Proyek ini bersifat open-source di bawah lisensi **MIT**. Mari bersama-sama berkontribusi untuk menyebarkan Firman Tuhan melalui teknologi yang indah.

---
*Dibuat dengan ❤️ untuk kemuliaan Tuhan.*
