# Bunu Sevmediysen - Karşıt Fikir Üreteci

Bu Chrome uzantısı, kullanıcıların belirli bir konu hakkında karşıt veya eleştirel bakış açıları üretmesine yardımcı olan bir araçtır. Gemini AI API'sini kullanarak, herhangi bir konu hakkında farklı perspektifler sunar.

## Özellikler

- 🔍 Herhangi bir konu hakkında karşıt fikir üretme
- 🎭 Farklı ton seçenekleri (Mizahi, Ciddi, Akademik)
- 📋 Son 5 aramayı hatırlama ve hızlı erişim
- 📋 Üretilen fikirleri kopyalama
- 📤 Fikirleri paylaşma özelliği
- 💾 Yerel depolama ile geçmiş aramaları saklama

## Kurulum

1. Bu repoyu klonlayın:
```bash
git clone https://github.com/yourusername/bunu-sevmediysen.git
```

2. Chrome tarayıcınızda `chrome://extensions/` adresine gidin
3. Sağ üst köşedeki "Geliştirici modu"nu aktif edin
4. "Paketlenmemiş öğe yükle" butonuna tıklayın
5. İndirdiğiniz klasörü seçin

## Kullanım

1. Chrome uzantılar menüsünden "Bunu Sevmediysen" uzantısını açın
2. Bir konu girin
3. İstediğiniz tonu seçin
4. "Fikir Getir" butonuna tıklayın
5. Üretilen karşıt fikri kopyalayın veya paylaşın

## API Anahtarı Ayarlama

Uzantıyı kullanabilmek için kendi Gemini API anahtarınızı eklemeniz gerekmektedir:

1. `popup.js` dosyasını açın
2. `GEMINI_API_KEY` değişkenini kendi API anahtarınızla güncelleyin

## Teknolojiler

- JavaScript
- Chrome Extension API
- Gemini AI API
- LocalStorage API
- Web Share API

## Lisans

MIT License

## Etiketler

#BilisimVadisi2025 #ChromeExtension #AI #GeminiAPI 