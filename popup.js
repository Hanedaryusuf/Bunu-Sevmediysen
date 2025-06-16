// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const konuInput = document.getElementById('konuInput');
  const getirButton = document.getElementById('getirButton');
  const sonucAlani = document.getElementById('sonucAlani');
  const fikirText = document.getElementById('fikirText');
  const loading = document.getElementById('loading');
  const hataMesaji = document.getElementById('hataMesaji');
  const tonSecimi = document.getElementById('tonSecimi');
  const kopyalaButton = document.getElementById('kopyalaButton');
  const paylasButton = document.getElementById('paylasButton');
  const gecmisListesi = document.getElementById('gecmisListesi');

  // ---- ÖNEMLİ: BURAYA KENDİ GEMINI API ANAHTARINIZI GİRİN ----
  const GEMINI_API_KEY = 'SENİN_GEMINI_API_ANAHTARIN_BURAYA';
  // -----------------------------------------------------------

  // Geçmiş aramaları localStorage'dan yükle
  let gecmisAramalar = JSON.parse(localStorage.getItem('gecmisAramalar')) || [];
  gecmisAramalariGuncelle();

  if (GEMINI_API_KEY === 'SENİN_GEMINI_API_ANAHTARIN_BURAYA') {
    hataMesaji.textContent = 'Lütfen popup.js dosyasında GEMINI_API_KEY değişkenine kendi API anahtarınızı girin.';
    hataMesaji.style.display = 'block';
    getirButton.disabled = true;
  }

  // Geçmiş aramaları güncelleme fonksiyonu
  function gecmisAramalariGuncelle() {
    gecmisListesi.innerHTML = '';
    gecmisAramalar.slice(-5).reverse().forEach(arama => {
      const li = document.createElement('li');
      li.textContent = arama;
      li.addEventListener('click', () => {
        konuInput.value = arama;
        getirButton.click();
      });
      gecmisListesi.appendChild(li);
    });
  }

  // Geçmiş aramaya ekleme fonksiyonu
  function gecmisAramayaEkle(konu) {
    if (!gecmisAramalar.includes(konu)) {
      gecmisAramalar.push(konu);
      if (gecmisAramalar.length > 10) {
        gecmisAramalar.shift();
      }
      localStorage.setItem('gecmisAramalar', JSON.stringify(gecmisAramalar));
      gecmisAramalariGuncelle();
    }
  }

  // Kopyalama fonksiyonu
  kopyalaButton.addEventListener('click', () => {
    const text = fikirText.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const originalText = kopyalaButton.textContent;
      kopyalaButton.textContent = 'Kopyalandı!';
      setTimeout(() => {
        kopyalaButton.textContent = originalText;
      }, 2000);
    });
  });

  // Paylaşma fonksiyonu
  paylasButton.addEventListener('click', () => {
    const text = fikirText.textContent;
    const shareData = {
      title: 'Bunu Sevmediysen - Karşıt Fikir',
      text: text
    };
    
    if (navigator.share) {
      navigator.share(shareData).catch(console.error);
    } else {
      // Paylaşım API'si desteklenmiyorsa kopyalama yap
      navigator.clipboard.writeText(text).then(() => {
        const originalText = paylasButton.textContent;
        paylasButton.textContent = 'Kopyalandı!';
        setTimeout(() => {
          paylasButton.textContent = originalText;
        }, 2000);
      });
    }
  });

  getirButton.addEventListener('click', async () => {
    const konu = konuInput.value.trim();
    if (!konu) {
      hataMesaji.textContent = 'Lütfen bir konu girin.';
      hataMesaji.style.display = 'block';
      fikirText.textContent = '';
      return;
    }

    if (GEMINI_API_KEY === 'SENİN_GEMINI_API_ANAHTARIN_BURAYA') {
      hataMesaji.textContent = 'API Anahtarı eksik. Lütfen popup.js dosyasını güncelleyin.';
      hataMesaji.style.display = 'block';
      fikirText.textContent = '';
      return;
    }

    loading.style.display = 'block';
    hataMesaji.style.display = 'none';
    fikirText.textContent = '';
    kopyalaButton.style.display = 'none';
    paylasButton.style.display = 'none';

    const ton = tonSecimi.value;
    let tonAciklamasi = '';
    switch (ton) {
      case 'mizahi':
        tonAciklamasi = 'Mizahi bir dille';
        break;
      case 'ciddi':
        tonAciklamasi = 'Ciddi ve profesyonel bir dille';
        break;
      case 'akademik':
        tonAciklamasi = 'Akademik bir dille';
        break;
      default:
        tonAciklamasi = '';
    }

    const prompt = `${tonAciklamasi} bana "${konu}" hakkında eleştirel, farklı veya karşıt bir bakış açısı sun. Neden bazı insanlar bunu sevmeyebilir veya neden abartılmış olabilir? Argümanlarını gerekçelendir. Cevabını sadece bu karşıt fikir olarak ver. Ayrıca buna karşıt olan şeyleri de öner (yapılabilecek/izlenilebilecek) bunu en başında söyle, ek bir giriş veya sonuç cümlesi kullanma. Vereceğin cevap bir paragraftan fazla olmasın ve kısa olsun.`;

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: prompt
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 1,
            topP: 1,
            maxOutputTokens: 256,
          }
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('API Hatası:', errorData);
        throw new Error(`API Hatası: ${response.status} ${response.statusText}. Detay: ${errorData.error?.message || 'Bilinmeyen hata'}`);
      }

      const data = await response.json();
      
      if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
        const uretilenFikir = data.candidates[0].content.parts[0].text;
        fikirText.textContent = uretilenFikir;
        kopyalaButton.style.display = 'block';
        paylasButton.style.display = 'block';
        gecmisAramayaEkle(konu);
      } else if (data.promptFeedback && data.promptFeedback.blockReason) {
        console.error('İçerik engellendi:', data.promptFeedback.blockReason);
        console.error('Engellenme detayları:', data.promptFeedback.safetyRatings);
        fikirText.textContent = `İçerik politikaları nedeniyle bir yanıt üretilemedi. Sebep: ${data.promptFeedback.blockReason}`;
      } else {
        console.error('Beklenmedik API yanıt formatı:', data);
        fikirText.textContent = 'API\'den geçerli bir yanıt alınamadı veya yanıt boş.';
      }

    } catch (error) {
      console.error('Hata:', error);
      hataMesaji.textContent = `Bir hata oluştu: ${error.message}`;
      hataMesaji.style.display = 'block';
      fikirText.textContent = '';
    } finally {
      loading.style.display = 'none';
    }
  });

  // Enter tuşuna basıldığında da butonu tetikle
  konuInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      getirButton.click();
    }
  });
});
