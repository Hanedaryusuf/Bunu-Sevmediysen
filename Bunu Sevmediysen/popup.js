// popup.js
document.addEventListener('DOMContentLoaded', function () {
  const konuInput = document.getElementById('konuInput');
  const getirButton = document.getElementById('getirButton');
  const sonucAlani = document.getElementById('sonucAlani');
  const fikirText = document.getElementById('fikirText');
  const loading = document.getElementById('loading');
  const hataMesaji = document.getElementById('hataMesaji');

  // ---- ÖNEMLİ: BURAYA KENDİ GEMINI API ANAHTARINIZI GİRİN ----
  const GEMINI_API_KEY = 'SENİN_GEMINI_API_ANAHTARIN_BURAYA';
  // -----------------------------------------------------------

  if (GEMINI_API_KEY === 'SENİN_GEMINI_API_ANAHTARIN_BURAYA') {
    hataMesaji.textContent = 'Lütfen popup.js dosyasında GEMINI_API_KEY değişkenine kendi API anahtarınızı girin.';
    hataMesaji.style.display = 'block';
    getirButton.disabled = true;
  }

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

    const prompt = `Bana "${konu}" hakkında eleştirel, farklı veya karşıt bir bakış açısı sun. Neden bazı insanlar bunu sevmeyebilir veya neden abartılmış olabilir? Argümanlarını gerekçelendir. Cevabını sadece bu karşıt fikir olarak ver.ayrıca buna karşıt olan şeyleri de öner(yapılabilecek/izlenilebilecek) bunu en başında söyle, ek bir giriş veya sonuç cümlesi kullanma.Vereceğin cevap bir paragraftan fazla olmasın ve kısa olsun`;

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
          // İsteğe bağlı: Üretkenlik ayarları
          // generationConfig: {
          //   temperature: 0.7,
          //   topK: 1,
          //   topP: 1,
          //   maxOutputTokens: 256,
          // }
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
      } else if (data.promptFeedback && data.promptFeedback.blockReason) {
        console.error('İçerik engellendi:', data.promptFeedback.blockReason);
        console.error('Engellenme detayları:', data.promptFeedback.safetyRatings);
        fikirText.textContent = `İçerik politikaları nedeniyle bir yanıt üretilemedi. Sebep: ${data.promptFeedback.blockReason}`;
      } 
      else {
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
      event.preventDefault(); // Form gönderimini engelle (varsa)
      getirButton.click();
    }
  });
});