document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
});

function loadGallery() {
  const imageData = [
    { src: 'images/DSC03517.jpg', alt: '"In God We Trust" on my way to Valley of Fire.'},
    { src: 'images/DSC03519.jpg', alt: 'Around all the corners are nice little stopping pockets. Photo time.' },
    { src: 'images/DSC03534.jpg', alt: 'This bright orange picture frame was calling to me.' },
    { src: 'images/DSC03536.jpg', alt: 'A flower from the cement.' },
    { src: 'images/DSC03539.jpg', alt: 'The markings in the rocks was so unique.' },
    { src: 'images/DSC03544.jpg', alt: 'Love a good sun glow!' },
    { src: 'images/DSC03545.jpg', alt: 'Take my breath away!' },
    { src: 'images/DSC03563.jpg', alt: 'I pull over for these. Happy for the pull off pockets!' },
    { src: 'images/DSC03581.jpg', alt: 'Leaving Valley of Fire.' },
    { src: 'images/DSC03594-3.jpg', alt: 'Bye 2025.' },
  ];

  const gallery = document.querySelector('.gallery');
  const loading = document.querySelector('.loading');

  if (!gallery) {
    console.error('Gallery container not found. Make sure <div class="gallery"></div> exists in the HTML.');
    if (loading) loading.textContent = 'Gallery container missing.';
    return;
  }

  // Clear any existing content
  gallery.innerHTML = '';

  imageData.forEach((image) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.innerHTML = `
      <img src="${image.src}" alt="${image.alt}" loading="lazy">
      <div class="overlay"><div class="overlay-text">${image.alt}</div></div>
    `;

    // Remove any inline width/height that might be present in data or added elsewhere
    const imgEl = item.querySelector('img');
    if (imgEl) {
      imgEl.removeAttribute('width');
      imgEl.removeAttribute('height');
      imgEl.style.width = '';
      imgEl.style.height = '';
    }

    gallery.appendChild(item);
  });

  if (loading) loading.style.display = 'none';
}
