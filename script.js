document.body.style.backgroundColor = "white";

let albums = {};

// Load albums.json
fetch("albums.json")
  .then(response => response.json())
  .then(data => albums = data);

/* Show album */
function showAlbum(albumName) {
    const albumsDiv = document.getElementById('albums');
    const galleryDiv = document.getElementById('gallery');
    const backButton = document.getElementById('backButton');

    if (!albums[albumName]) {
        console.warn("Album not loaded yet.");
        return;
    }

    albumsDiv.style.display = 'none';
    galleryDiv.style.display = 'grid';
    backButton.style.display = 'inline-block';
    galleryDiv.innerHTML = '';

    albums[albumName].forEach(photo => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');

        // IMPORTANT: your JSON now uses objects
        img.src = photo.src;
        img.alt = photo.caption || "";
        img.classList.add("journal-image");

        img.onclick = () => openModal(photo.src, photo.caption);

        item.appendChild(img);
        galleryDiv.appendChild(item);
    });
}

/* Open modal */
function openModal(src, caption) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");

    modal.style.display = "flex";
    modalImg.src = src;
    modalCaption.textContent = caption || "";
}

/* Close modal */
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

/* Back button */
function goBack() {
    document.getElementById('gallery').style.display = 'none';
    document.getElementById('albums').style.display = 'block';
    document.getElementById('backButton').style.display = 'none';
}
