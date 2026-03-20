const aiData = {
    'alkitab': {
        'menyejukkan': {
            quotes: ["Tuhan adalah gembalaku, takkan kekurangan aku.", "Damai sejahtera Kukasihkan kepadamu.", "Serahkanlah segala kekuatiranmu kepada-Nya."],
            images: ["1501133531714-bd6700057174", "1507525428034-b723cf961d3e", "1490730141103-6cac27aaab94"]
        },
        'memberkati': {
            quotes: ["Tuhan memberkati engkau dan melindungi engkau.", "Diberkatilah orang yang mengandalkan Tuhan."],
            images: ["1518020382113-a7e8fc38eac9", "1511895426328-dc8714191300", "1506126613408-eca07ce68773"]
        },
        'menguatkan': {
            quotes: ["Janganlah takut, sebab Aku menyertai engkau.", "Orang yang menanti TUHAN mendapat kekuatan baru."],
            images: ["1444491741275-3746c854edea", "1533227268408-a5b066ed5606", "1493612276216-ee39255c0721"]
        },
        'sukacita': {
            quotes: ["Sukacita karena TUHAN itulah perlindunganmu.", "Bersukacitalah senantiasa dalam Tuhan!"],
            images: ["1516589178584-3c582664d509", "1533733319232-2110c0a59926", "1501133531714-bd6700057174"]
        }
    },
    'renungan': {
        'menyejukkan': {
            quotes: ["Saat badai menerpa, Yesus adalah nakhoda kapalmu.", "Kasih Tuhan sejuk seperti embun pagi."],
            images: ["1464822759023-5658ad06de22", "1507525428034-b723cf961d3e", "1490730141103-6cac27aaab94"]
        },
        'memberkati': {
            quotes: ["Bersyukur membuka pintu berkat baru.", "Jadilah saluran berkat bagi sesama."],
            images: ["1533733319232-a89abc85b95d", "1511895426328-dc8714191300", "1506126613408-eca07ce68773"]
        },
        'menguatkan': {
            quotes: ["Iman menari di tengah hujan bersama Tuhan.", "Lutut menyentuh lantai, hati menyentuh surga."],
            images: ["1522202176988-66273c2fd55f", "1499209565751-afdd8eb20de7", "1493612276216-ee39255c0721"]
        },
        'sukacita': {
            quotes: ["Pujian meruntuhkan tembok keputusasaan.", "Wajah berseri mencerminkan hati yang puas."],
            images: ["1521737604891-4121400a3395", "1516589178584-3c582664d509", "1501133531714-bd6700057174"]
        }
    },
    'janji-tuhan': {
        'menyejukkan': {
            quotes: ["Aku tidak akan pernah meninggalkan engkau.", "Damai sejahtera-Ku Kuberikan kepadamu."],
            images: ["1464822759023-5658ad06de22", "1507525428034-b723cf961d3e", "1490730141103-6cac27aaab94"]
        },
        'memberkati': {
            quotes: ["Tuhan membuka perbendaharaan langit bagimu.", "Segala yang kamu kerjakan dibuat-Nya berhasil."],
            images: ["1518020382113-a7e8fc38eac9", "1511895426328-dc8714191300", "1506126613408-eca07ce68773"]
        },
        'menguatkan': {
            quotes: ["Pencobaanmu tidak melampaui kekuatanmu.", "Dia menambah semangat kepada yang tiada berdaya."],
            images: ["1522202176988-66273c2fd55f", "1499209565751-afdd8eb20de7", "1493612276216-ee39255c0721"]
        },
        'sukacita': {
            quotes: ["Ratapanku telah Kauubah menjadi tari-tarian.", "Menabur air mata, menuai sorak-sorai."],
            images: ["1521737604891-4121400a3395", "1516589178584-3c582664d509", "1501133531714-bd6700057174"]
        }
    },
    'motivasi-kristen': {
        'menyejukkan': {
            quotes: ["Jangan biarkan hari ini merampas damaimu.", "Beristirahatlah dalam hadirat-Nya."],
            images: ["1464822759023-5658ad06de22", "1507525428034-b723cf961d3e", "1490730141103-6cac27aaab94"]
        },
        'memberkati': {
            quotes: ["Layani Tuhan dengan segenap hatimu.", "Kasih yang kamu tabur akan manis hari nanti."],
            images: ["1533733319232-a89abc85b95d", "1511895426328-dc8714191300", "1506126613408-eca07ce68773"]
        },
        'menguatkan': {
            quotes: ["Pahlawan iman dibentuk di medan pergumulan.", "Tuhan sedang memprosesmu menjadi emas murni."],
            images: ["1522202176988-66273c2fd55f", "1499209565751-afdd8eb20de7", "1493612276216-ee39255c0721"]
        },
        'sukacita': {
            quotes: ["Hidup ini anugerah, rayakan dengan syukur.", "Jadilah saksi Kristus yang penuh sukacita."],
            images: ["1521737604891-4121400a3395", "1516589178584-3c582664d509", "1501133531714-bd6700057174"]
        }
    }
};

// DOM Elements
const categorySelect = document.getElementById('category-select');
const toneSelect = document.getElementById('tone-select'); // Not actively used for generation yet simulating AI
const generateBtn = document.getElementById('generate-btn');
const loadingText = document.getElementById('loading-text');
const previewWrapper = document.getElementById('preview-wrapper');
const regenerateBtn = document.getElementById('regenerate-btn');
const downloadBtn = document.getElementById('download-btn');
const shareBtn = document.getElementById('share-btn');

// Canvas & Features Elements
const canvasElement = document.getElementById('canvas-element');
const canvasImage = document.getElementById('canvas-image');
const canvasQuote = document.getElementById('canvas-quote');
const canvasBrandText = document.getElementById('canvas-brand-text');
const canvasOverlay = document.getElementById('canvas-overlay');

const aspectRatioSelect = document.getElementById('aspect-ratio-select');
const brandingInput = document.getElementById('branding-input');
const quoteInput = document.getElementById('quote-input'); // Manual text area
const fontSelect = document.getElementById('font-select');
const filterBtns = document.querySelectorAll('.filter-btn');

// History Elements
const historyWrapper = document.getElementById('history-wrapper');
const historyGrid = document.getElementById('history-grid');
const historyCount = document.getElementById('history-count');
const clearHistoryBtn = document.getElementById('clear-history-btn');

// History State System
const STORAGE_KEY = 'fampost_history';
let historyData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

// Helper to get random item
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Map Categories & Tones to Image Keywords
const keywordMap = {
    'alkitab': {
        'menyejukkan': 'peaceful bible church',
        'memberkati': 'blessing hands light',
        'menguatkan': 'mountain cross faith',
        'sukacita': 'praise worship joy'
    },
    'renungan': {
        'menyejukkan': 'calm morning prayer',
        'memberkati': 'community helping bible',
        'menguatkan': 'lighthouse ocean storm',
        'sukacita': 'sunlight meadow happy'
    },
    'janji-tuhan': {
        'menyejukkan': 'rainbow sky calm',
        'memberkati': 'wheat field golden',
        'menguatkan': 'rock foundation solid',
        'sukacita': 'flower blooming garden'
    },
    'motivasi-kristen': {
        'menyejukkan': 'forest path light',
        'memberkati': 'giving hands love',
        'menguatkan': 'climber mountain summit',
        'sukacita': 'festival lights youth'
    }
};

// Generate Logic - NOW WITH REAL AI (GEMINI)
const generateContent = async () => {
    // 1. UI Loading State
    generateBtn.disabled = true;
    generateBtn.style.opacity = '0.7';
    loadingText.classList.remove('hidden');

    const category = categorySelect.value;
    const tone = toneSelect.value;
    
    try {
        // CALL THE SECURE API (VERCEL FUNCTION)
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ category, tone })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.error || "Gagal mengambil data dari AI.");
        }

        const aiResult = await response.json();
        const { quote, image_prompt } = aiResult;

        // 2. Select / Construct Image
        // Cleanup AI prompt: only take adjectives and nouns
        const cleanPrompt = image_prompt
            .replace(/a |an |the |of |with |and |in |on |at |by /gi, '') // Hapus kata sambung
            .replace(/[^a-zA-Z0-9 ]/g, '') 
            .split(' ')
            .filter(word => word.length > 2)
            .slice(0, 3) // Cukup 3 kata kunci utama aja
            .join(',');
            
        console.log("Gemini Quote:", quote);
        console.log("Gemini Visual Prompt:", image_prompt);
        console.log("Cleaned Keywords:", cleanPrompt);

        const randomSeed = Math.floor(Math.random() * 1000);
        const searchKeyword = `${category},${tone},${cleanPrompt}`;
        const imageUrl = `https://loremflickr.com/1080/1350/${encodeURIComponent(searchKeyword)}?lock=${randomSeed}`;

        // 3. Update Text Content & Styles
        canvasQuote.textContent = quote;
        quoteInput.value = quote;
        canvasQuote.style.fontFamily = fontSelect.value;
        canvasElement.style.aspectRatio = aspectRatioSelect.value;
        const customBrand = brandingInput.value.trim();
        canvasBrandText.textContent = customBrand ? customBrand : "FamPost";
        
        // 4. Reveal strategy
        loadingText.classList.add('hidden');
        generateBtn.disabled = false;
        generateBtn.style.opacity = '1';
        previewWrapper.classList.remove('hidden');
        previewWrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });

        // 5. Handle Image Loading with Timeout
        let imageLoaded = false;
        
        // Timeout 3 detik: kalau kelamaan cari gambar, pake fallback
        const loadTimeout = setTimeout(() => {
            if (!imageLoaded) {
                console.warn("Image load timeout, using fallback...");
                const fallbackId = "1507525428034-b723cf961d3e"; 
                canvasImage.src = `https://images.unsplash.com/photo-${fallbackId}?q=80&w=1080&auto=format&fit=crop`;
            }
        }, 3000);

        canvasImage.onload = () => {
            imageLoaded = true;
            clearTimeout(loadTimeout);
            setTimeout(saveToHistory, 500);
        };

        canvasImage.onerror = () => {
            imageLoaded = true;
            clearTimeout(loadTimeout);
            console.warn("Retrying image load with fallback...");
            const fallbackId = "1518020382113-a7e8fc38eac9"; 
            canvasImage.src = `https://images.unsplash.com/photo-${fallbackId}?q=80&w=1080&auto=format&fit=crop`;
        };

        // Trigger image load
        canvasImage.src = imageUrl;

    } catch (error) {
        console.error("Critical AI Generation Error:", error);
        
        // FALLBACK TO OLD MOCK DATA IF API FAILS
        const categoryData = aiData[category];
        const specificData = categoryData[tone] || categoryData['menyejukkan'];
        const fallbackQuote = getRandomItem(specificData.quotes);
        const fallbackImageId = getRandomItem(specificData.images);
        
        canvasQuote.textContent = fallbackQuote;
        quoteInput.value = fallbackQuote;
        canvasImage.src = `https://images.unsplash.com/photo-${fallbackImageId}?q=80&w=1080&auto=format&fit=crop`;
        
        // Finalize UI
        loadingText.classList.add('hidden');
        generateBtn.disabled = false;
        generateBtn.style.opacity = '1';
        previewWrapper.classList.remove('hidden');
        previewWrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
};

// Download Logic
const downloadImage = async () => {
    // UI Loading state for download button
    const originalText = downloadBtn.innerHTML;
    downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Memproses...';
    downloadBtn.disabled = true;

    try {
        // html2canvas config
        const canvas = await html2canvas(canvasElement, {
            useCORS: true,          // Handle cross-origin images (important for Unsplash)
            allowTaint: false,
            scale: 2,               // Double scale for better quality (1080px base if container is 540)
            backgroundColor: '#000' 
        });

        // Convert canvas to data URL (PNG)
        const dataUrl = canvas.toDataURL('image/png', 1.0);
        
        // Create an invisible anchor to trigger download
        const link = document.createElement('a');
        link.download = `FamPost-${categorySelect.value}-${Date.now()}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    } catch (error) {
        console.error("Error generating image:", error);
        alert("Terjadi kesalahan saat menyimpan gambar. Pastikan koneksi internet stabil.");
    } finally {
        // Restore button state
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
    }
};

// Web Share Logic
const shareImage = async () => {
    if (!navigator.share || !navigator.canShare) {
        alert("Browser Anda tidak mendukung fitur Web Share.");
        return;
    }
    
    const originalText = shareBtn.innerHTML;
    shareBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i>';
    shareBtn.disabled = true;
    
    try {
        const canvas = await html2canvas(canvasElement, {
            useCORS: true,
            allowTaint: false,
            scale: 2,
            backgroundColor: '#000'
        });
        
        canvas.toBlob(async (blob) => {
            try {
                const filesArray = [
                    new File([blob], `FamPost-${categorySelect.value}-${Date.now()}.png`, { 
                        type: "image/png", 
                        lastModified: new Date().getTime() 
                    })
                ];
                
                const shareData = {
                    title: 'FamPost AI',
                    text: 'Dibuat dengan aplikasi web FamPost AI.',
                    files: filesArray
                };
                
                if (navigator.canShare(shareData)) {
                    await navigator.share(shareData);
                } else {
                    alert("Sistem Anda tidak dapat membagikan file ini.");
                }
            } catch (err) {
                console.error("Share API error:", err);
            } finally {
                shareBtn.innerHTML = originalText;
                shareBtn.disabled = false;
            }
        }, 'image/png');
    } catch (error) {
        console.error("Error creating image for share:", error);
        alert("Terjadi kesalahan saat memproses gambar.");
        shareBtn.innerHTML = originalText;
        shareBtn.disabled = false;
    }
};

// Filter Selection Logic
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Change overlay class
        const filterName = btn.getAttribute('data-filter');
        canvasOverlay.className = `canvas-overlay ${filterName}`;
    });
});

// History Logic - Now handles snapshots
const saveToHistory = async () => {
    // Determine current active filter
    const activeFilterBtn = document.querySelector('.filter-btn.active');
    const filterClass = activeFilterBtn ? activeFilterBtn.getAttribute('data-filter') : 'dark-cinematic';

    // Capture snapshot for history thumbnail (small scale to save space)
    let snapshot = "";
    try {
        // We wait a tiny bit to make sure DOM is painted
        await new Promise(r => setTimeout(r, 100));
        const canvas = await html2canvas(canvasElement, {
            scale: 0.25, // Significant reduction for localStorage
            useCORS: true,
            logging: false,
            backgroundColor: '#000'
        });
        snapshot = canvas.toDataURL('image/jpeg', 0.7); // 70% quality jpeg
    } catch (err) {
        console.error("History snapshot failed", err);
        snapshot = canvasImage.src; // Fallback
    }

    const newItem = {
        id: Date.now(),
        category: categorySelect.value,
        tone: toneSelect.value, 
        imageUrl: canvasImage.src,
        snapshot: snapshot, // The final look
        quote: canvasQuote.textContent,
        font: fontSelect.value,
        filter: filterClass,
        ratio: aspectRatioSelect.value,
        brand: brandingInput.value
    };
    
    historyData.unshift(newItem);
    if(historyData.length > 12) historyData.pop(); // Slightly more history
    
    // Check localStorage size limit before saving
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(historyData));
    } catch (e) {
        console.warn("LocalStorage full, trimming history...");
        historyData.splice(5); // Keep only 5 if it's full
        localStorage.setItem(STORAGE_KEY, JSON.stringify(historyData));
    }
    renderHistory();
};

const renderHistory = () => {
    historyCount.textContent = historyData.length;
    if (historyData.length === 0) {
        historyWrapper.classList.add('hidden');
        return;
    }
    historyWrapper.classList.remove('hidden');
    historyGrid.innerHTML = '';
    
    historyData.forEach(item => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.title = "Klik untuk memuat kembali karya ini";
        div.innerHTML = `
            <img src="${item.snapshot || item.imageUrl}" alt="History item">
            <div class="history-item-overlay">
                ${item.category}
            </div>
            <div class="history-item-badge">
                <i class="fa-solid fa-clock-rotate-left"></i>
            </div>
        `;
        div.addEventListener('click', () => restoreHistory(item));
        historyGrid.appendChild(div);
    });
};

const restoreHistory = (item) => {
    if (!item) return;
    
    categorySelect.value = item.category || 'alkitab';
    if(item.tone) toneSelect.value = item.tone; // Restore tone correctly
    canvasImage.src = item.imageUrl;
    canvasQuote.textContent = item.quote;
    quoteInput.value = item.quote || ''; // Update manual textarea from history
    
    // Restore Style/Layout
    if(item.font) {
        fontSelect.value = item.font;
        canvasQuote.style.fontFamily = item.font;
    } else {
        canvasQuote.style.fontFamily = "'Outfit', sans-serif";
    }
    aspectRatioSelect.value = item.ratio || '1/1';
    brandingInput.value = item.brand || '';
    canvasBrandText.textContent = item.brand || "FamPost";
    
    // Restore layout
    canvasElement.style.aspectRatio = aspectRatioSelect.value;
    
    // Restore filter
    filterBtns.forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.filter-btn[data-filter="${item.filter}"]`);
    if(btn) btn.classList.add('active');
    canvasOverlay.className = `canvas-overlay ${item.filter || 'dark-cinematic'}`;
    
    // Show preview box - NO RE-GENERATION HERE
    loadingText.classList.add('hidden');
    generateBtn.disabled = false;
    previewWrapper.classList.remove('hidden');
    previewWrapper.scrollIntoView({ behavior: 'smooth', block: 'end' });
};

clearHistoryBtn.addEventListener('click', () => {
    if(confirm('Hapus semua riwayat desain yang tersimpan di browser ini?')) {
        historyData = [];
        localStorage.removeItem(STORAGE_KEY);
        renderHistory();
    }
});

// Font Selection Change event (Real-time update)
fontSelect.addEventListener('change', () => {
    canvasQuote.style.fontFamily = fontSelect.value;
    saveToHistory(); // Auto save change
});

// Aspect Ratio Change event (Real-time update)
aspectRatioSelect.addEventListener('change', () => {
    canvasElement.style.aspectRatio = aspectRatioSelect.value;
    // Update preview label text (optional but helpful)
    const ratioLabel = document.querySelector('.canvas-header h3');
    if (ratioLabel) {
        let labelText = "Preview ";
        if (aspectRatioSelect.value === "1/1") labelText += "(Square 1:1)";
        else if (aspectRatioSelect.value === "4/5") labelText += "(Portrait 4:5)";
        else if (aspectRatioSelect.value === "9/16") labelText += "(Story 9:16)";
        ratioLabel.textContent = labelText;
    }
});

// Event Listeners Initialization
generateBtn.addEventListener('click', generateContent);
regenerateBtn.addEventListener('click', generateContent);
downloadBtn.addEventListener('click', downloadImage);
if(shareBtn) shareBtn.addEventListener('click', shareImage);

// Manual Quote Input Sync
quoteInput.addEventListener('input', (e) => {
    canvasQuote.textContent = e.target.value;
});

// Branding Text Sync (Real-time update)
brandingInput.addEventListener('input', (e) => {
    canvasBrandText.textContent = e.target.value.trim() ? e.target.value.trim() : "FamPost";
});

// Canvas contenteditable sync back to textarea
canvasQuote.addEventListener('input', () => {
    quoteInput.value = canvasQuote.textContent;
});

// Initial Load
renderHistory();

