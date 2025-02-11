// Lightbox işlevselliği
const images = document.querySelectorAll('.flower-image');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');

// Tüm resimlere tıklama olayı ekle
images.forEach(image => {
    image.addEventListener('click', () => {
        const src = image.getAttribute('src'); // Tıklanan resmin kaynağını al
        lightbox.style.display = 'flex'; // Lightbox'ı göster
        lightboxImage.src = src; // Resmi lightbox'a yükle
    });
});

// Lightbox'ı kapatma işlevi
function closeLightbox() {
    lightbox.style.display = 'none';
}
