# 🚀 Bunu Sevmediysen - Karşıt Fikir Üreteci Chrome Uzantısı

<div align="center">

![Chrome Extension](https://chromewebstore.google.com/?hl=tr&pli=1)
![Manifest V3](https://img.shields.io/badge/Manifest-V3-orange)
![License](https://img.shields.io/badge/License-MIT-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript)
![Gemini AI](https://img.shields.io/badge/Gemini%20AI-API-purple)

*Bir konu hakkında Gemini AI kullanarak karşıt fikirler üreten akıllı Chrome uzantısı*

[🌐 Demo](#demo) • [⚡ Özellikler](#özellikler) • [🛠️ Teknolojiler](#teknolojiler) • [📦 Kurulum](#kurulum) • [🔧 API Kurulumu](#api-kurulumu) • [📖 Kullanım](#kullanım) • [🏗️ Proje Yapısı](#proje-yapısı) • [🤝 Katkıda Bulunma](#katkıda-bulunma)

</div>

---

## 📋 İçindekiler

- [Demo](#demo)
- [Proje Hakkında](#proje-hakkında)
- [Özellikler](#özellikler)
- [Teknolojiler](#teknolojiler)
- [Kurulum](#kurulum)
- [API Kurulumu](#api-kurulumu)
- [Kullanım](#kullanım)
- [Proje Yapısı](#proje-yapısı)
- [Geliştirme](#geliştirme)
- [Katkıda Bulunma](#katkıda-bulunma)
- [Lisans](#lisans)

## 🎯 Demo

Uzantı, kullanıcıların herhangi bir konu hakkında (film, dizi, hobi, etkinlik vb.) Gemini AI kullanarak karşıt veya eleştirel bakış açıları üretmesini sağlar. Farklı ton seçenekleri ile kişiselleştirilmiş sonuçlar sunar.

## 📖 Proje Hakkında

**Bunu Sevmediysen**, popüler kültür ve günlük yaşam konuları hakkında farklı perspektifler sunmayı amaçlayan bir Chrome uzantısıdır. Google'ın Gemini AI modelini kullanarak, kullanıcıların belirttiği konular hakkında eleştirel, mizahi veya akademik tonlarda karşıt görüşler üretir.

### 🎯 Amaç
- Popüler konular hakkında farklı bakış açıları sunmak
- Eleştirel düşünmeyi teşvik etmek
- Eğlenceli ve bilgilendirici içerik üretmek
- Kullanıcı deneyimini optimize etmek

## ⚡ Özellikler

### 🎨 Temel Özellikler
- **🤖 AI Destekli İçerik Üretimi**: Gemini 1.5 Flash modeli ile akıllı karşıt fikir üretimi
- **🎭 Çoklu Ton Seçenekleri**: Normal, Mizahi, Ciddi, Akademik tonlar
- **📱 Modern UI/UX**: Responsive ve kullanıcı dostu arayüz
- **⚡ Hızlı Yanıt**: Optimize edilmiş API çağrıları

### 🔧 Gelişmiş Özellikler
- **📋 Geçmiş Aramalar**: Son 5 aramayı yerel depolamada saklama
- **📋 Kopyalama**: Tek tıkla içerik kopyalama
- **📤 Paylaşım**: Web Share API ile kolay paylaşım
- **💾 Yerel Depolama**: localStorage ile veri kalıcılığı
- **⌨️ Klavye Desteği**: Enter tuşu ile hızlı erişim

### 🛡️ Güvenlik ve Performans
- **🔐 API Güvenliği**: Güvenli API anahtarı yönetimi
- **⚡ Hata Yönetimi**: Kapsamlı hata yakalama ve kullanıcı bildirimleri
- **📊 Rate Limiting**: API çağrı limitlerini aşmama
- **🔒 İçerik Filtreleme**: Güvenli içerik üretimi

## 🛠️ Teknolojiler

### 🎯 Frontend Teknolojileri
- **HTML5**: Modern semantic markup
- **CSS3**: 
  - Flexbox layout sistemi
  - CSS Grid (gelecek sürümler için)
  - CSS Custom Properties (variables)
  - Responsive design principles
  - Smooth transitions ve animations
- **Vanilla JavaScript (ES6+)**:
  - Async/Await pattern
  - Fetch API
  - LocalStorage API
  - Web Share API
  - Event handling
  - DOM manipulation

### 🤖 AI ve API Teknolojileri
- **Google Gemini AI API**:
  - Gemini 1.5 Flash modeli
  - RESTful API entegrasyonu
  - JSON request/response handling
  - Temperature ve token kontrolü
  - Safety ratings ve content filtering

### 🌐 Web Platform Teknolojileri
- **Chrome Extension API**:
  - Manifest V3 standardı
  - Popup interface
  - Content scripts (gelecek sürümler için)
  - Background scripts (gelecek sürümler için)
- **Web APIs**:
  - Clipboard API
  - Web Share API
  - LocalStorage API
  - Fetch API

### 📦 Geliştirme Araçları
- **Version Control**: Git
- **Package Management**: Native browser APIs
- **Code Quality**: ESLint (önerilen)
- **Testing**: Manual testing (otomatik testler gelecek sürümler için)

### 🏗️ Mimari ve Desenler
- **Modular Architecture**: Ayrı dosyalar (HTML, CSS, JS)
- **Event-Driven Programming**: DOM event handling
- **Async Programming**: Promise-based API calls
- **Local State Management**: LocalStorage ile durum yönetimi

## 📦 Kurulum

### 🚀 Hızlı Kurulum

1. **Repository'yi klonlayın:**
```bash
git clone https://github.com/Bunu-Sevmediysen/bunu-sevmediysen.git
cd bunu-sevmediysen
```

2. **Chrome'da geliştirici modunu aktifleştirin:**
   - Chrome'da `chrome://extensions/` adresine gidin
   - Sağ üst köşedeki "Geliştirici modu"nu açın

3. **Uzantıyı yükleyin:**
   - "Paketlenmemiş öğe yükle" butonuna tıklayın
   - Proje klasörünü seçin

### 🔧 Geliştirici Kurulumu

1. **Bağımlılıkları kontrol edin:**
```bash
# Node.js ve npm kurulu olmalı (opsiyonel)
node --version
npm --version
```

2. **Proje yapısını inceleyin:**
```
bunu-sevmediysen/
├── manifest.json      # Uzantı konfigürasyonu
├── popup.html        # Ana arayüz
├── popup.js          # Ana JavaScript kodu
├── style.css         # Stil dosyası
├── icons/            # Uzantı ikonları
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
├── README.md         # Bu dosya
└── LICENSE           # MIT lisansı
```

## 🔧 API Kurulumu

### 1. Gemini API Anahtarı Alma

1. **Google AI Studio'ya gidin:**
   - https://makersuite.google.com/app/apikey adresine gidin
   - Google hesabınızla giriş yapın

2. **API anahtarı oluşturun:**
   - "Create API Key" butonuna tıklayın
   - Anahtarınızı güvenli bir yerde saklayın

### 2. Uzantıya API Anahtarı Ekleme

1. **`popup.js` dosyasını açın**
2. **API anahtarını güncelleyin:**
```javascript
// popup.js dosyasında (satır 15)
const GEMINI_API_KEY = 'SENİN_GEMINI_API_ANAHTARIN_BURAYA';
```
3. **Kendi API anahtarınızı yapıştırın**

### 🔒 Güvenlik Notları

- API anahtarınızı asla public repository'lerde paylaşmayın
- Production ortamında environment variables kullanın
- API anahtarınızı düzenli olarak yenileyin

## 📖 Kullanım

### 🎯 Temel Kullanım

1. **Uzantıyı açın:**
   - Chrome toolbar'dan uzantı ikonuna tıklayın

2. **Konu girin:**
   - Metin kutusuna bir konu yazın (örn: "Star Wars serisi")

3. **Ton seçin:**
   - Dropdown menüden istediğiniz tonu seçin

4. **Fikir üretin:**
   - "Karşıt Fikir Getir" butonuna tıklayın

### 🎨 Ton Seçenekleri

| Ton | Açıklama | Kullanım Alanı |
|-----|----------|----------------|
| **Normal** | Dengeli ve objektif | Genel kullanım |
| **Mizahi** | Eğlenceli ve alaycı | Sosyal medya paylaşımları |
| **Ciddi** | Profesyonel ve analitik | İş ortamları |
| **Akademik** | Bilimsel ve detaylı | Araştırma ve eğitim |

### 🔧 Gelişmiş Özellikler

#### 📋 Geçmiş Aramalar
- Son 5 arama otomatik olarak kaydedilir
- Geçmiş aramalara tıklayarak hızlı erişim
- LocalStorage ile kalıcı depolama

#### 📋 Kopyalama ve Paylaşım
- **Kopyala**: İçeriği panoya kopyalar
- **Paylaş**: Web Share API ile paylaşım (desteklenen platformlarda)

#### ⌨️ Klavye Kısayolları
- **Enter**: Fikir üretme butonunu tetikler
- **Tab**: Form elemanları arasında geçiş

## 🏗️ Proje Yapısı

### 📁 Dosya Organizasyonu

```
bunu-sevmediysen/
├── 📄 manifest.json          # Chrome uzantı konfigürasyonu
├── 🌐 popup.html            # Ana popup arayüzü
├── ⚡ popup.js              # Ana JavaScript mantığı
├── 🎨 style.css             # CSS stilleri
├── 📁 icons/                # Uzantı ikonları
│   ├── 🖼️ icon16.png       # 16x16 ikon
│   ├── 🖼️ icon48.png       # 48x48 ikon
│   └── 🖼️ icon128.png      # 128x128 ikon
├── 📖 README.md             # Proje dokümantasyonu
└── 📜 LICENSE               # MIT lisans dosyası
```

### 🔧 Manifest V3 Konfigürasyonu

```json
{
  "manifest_version": 3,
  "name": "Bunu Sevmediysen",
  "version": "1.0",
  "description": "Gemini AI ile karşıt fikirler üreten Chrome uzantısı",
  "permissions": ["activeTab", "scripting"],
  "host_permissions": ["https://generativelanguage.googleapis.com/"],
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png",
      "128": "icons/icon128.png"
    }
  }
}
```

### 🧩 Kod Mimarisi

#### JavaScript Modülleri
- **Event Handlers**: DOM event yönetimi
- **API Service**: Gemini API entegrasyonu
- **Storage Service**: LocalStorage işlemleri
- **UI Service**: Arayüz güncellemeleri

#### CSS Organizasyonu
- **Layout**: Flexbox ve positioning
- **Components**: Button, input, container stilleri
- **States**: Hover, focus, disabled durumları
- **Responsive**: Farklı ekran boyutları için

## 🚀 Geliştirme

### 🔧 Geliştirme Ortamı Kurulumu

1. **Repository'yi fork edin**
2. **Local branch oluşturun:**
```bash
git checkout -b feature/yeni-ozellik
```

3. **Değişiklikleri test edin:**
   - Chrome'da uzantıyı yeniden yükleyin
   - Console'da hataları kontrol edin

### 🧪 Test Etme

#### Manuel Test Senaryoları
- [ ] API anahtarı olmadan çalışma
- [ ] Geçersiz API anahtarı ile hata yönetimi
- [ ] Boş konu girişi kontrolü
- [ ] Farklı ton seçenekleri
- [ ] Geçmiş aramalar fonksiyonu
- [ ] Kopyalama ve paylaşım özellikleri

#### Performans Testleri
- [ ] API yanıt süreleri
- [ ] Memory kullanımı
- [ ] LocalStorage boyutu

### 📝 Kod Standartları

#### JavaScript
- ES6+ syntax kullanımı
- Async/await pattern
- Error handling
- JSDoc comments

#### CSS
- BEM methodology
- Mobile-first approach
- CSS custom properties
- Minimal specificity

#### HTML
- Semantic markup
- Accessibility attributes
- Meta tags
- UTF-8 encoding

## 🤝 Katkıda Bulunma

### 🎯 Katkı Türleri

1. **🐛 Bug Reports**: Hata bildirimleri
2. **💡 Feature Requests**: Yeni özellik önerileri
3. **📝 Documentation**: Dokümantasyon iyileştirmeleri
4. **🎨 UI/UX Improvements**: Arayüz geliştirmeleri
5. **⚡ Performance**: Performans optimizasyonları

### 🔄 Katkı Süreci

1. **Issue açın** veya mevcut issue'yu inceleyin
2. **Fork edin** ve feature branch oluşturun
3. **Değişiklikleri yapın** ve test edin
4. **Commit mesajlarını** açıklayıcı yazın
5. **Pull Request** oluşturun

### 📋 Commit Mesaj Formatı

```
type(scope): description

feat(api): add new tone option
fix(ui): resolve button alignment issue
docs(readme): update installation instructions
style(css): improve responsive design
refactor(js): optimize API call function
```

### 🧪 Test Gereksinimleri

- [ ] Kod çalışır durumda
- [ ] Hata yönetimi mevcut
- [ ] UI responsive
- [ ] API entegrasyonu çalışıyor
- [ ] LocalStorage fonksiyonları çalışıyor

## 📊 Proje İstatistikleri

- **⭐ Stars**: [GitHub Stars]
- **🔀 Forks**: [GitHub Forks]
- **🐛 Issues**: [Open Issues]
- **📦 Downloads**: [Chrome Web Store Downloads]
- **👥 Contributors**: [Contributor Count]


## 🙏 Teşekkürler

- **Google AI** - Gemini API için
- **Chrome Extensions Team** - Platform desteği için
- **Open Source Community** - Sürekli gelişim için

## 📜 Lisans

Bu proje [MIT License](LICENSE) altında lisanslanmıştır.

```
MIT License

Copyright (c) 2024 Bunu Sevmediysen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

<div align="center">

**#BilisimVadisi2025 #ChromeExtension #AI #GeminiAPI #JavaScript #WebDevelopment**

</div> 
