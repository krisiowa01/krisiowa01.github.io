document.body.style.backgroundColor = "black";

/* --------------------------------------------------
   Image Modal (single image view)
-------------------------------------------------- */
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


/* --------------------------------------------------
   Journal Section (auto‑added under each image)
-------------------------------------------------- */
function addJournalSectionBelowImage(imgElement) {
    if (imgElement.nextElementSibling?.classList.contains("journal-section")) return;

    const journalDiv = document.createElement("div");
    journalDiv.className = "journal-section";

    const label = document.createElement("label");
    label.textContent = "Journal Entry:";
    label.style.display = "block";
    label.style.marginBottom = "5px";

    const textarea = document.createElement("textarea");
    textarea.placeholder = "Write your thoughts here...";

    journalDiv.appendChild(label);
    journalDiv.appendChild(textarea);

    imgElement.insertAdjacentElement("afterend", journalDiv);
}

/* Add journal sections automatically */
document.querySelectorAll(".journal-image").forEach(img => {
    addJournalSectionBelowImage(img);
});


/* --------------------------------------------------
   Album Modal (shows all images inside an album)
-------------------------------------------------- */
function openAlbumModal(galleryId) {
    const modal = document.getElementById("albumModal");
    const content = document.getElementById("albumModalContent");

    // Clear previous content
    content.innerHTML = "";

    // Pull all images from the selected gallery
    const images = document.querySelectorAll(`#${galleryId} .journal-image`);

    images.forEach(img => {
        const clone = img.cloneNode(true);
        clone.onclick = () => openModal(clone.src); // open single-image modal
        content.appendChild(clone);
    });

    modal.style.display = "block";
}

function closeAlbumModal() {
    document.getElementById("albumModal").style.display = "none";
}


/* --------------------------------------------------
   Album Click Handler (open album modal)
-------------------------------------------------- */
document.querySelectorAll(".album").forEach(album => {
    album.addEventListener("click", () => {
        const target = album.getAttribute("data-target");
        openAlbumModal(target);
    });
});
