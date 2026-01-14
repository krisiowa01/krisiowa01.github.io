document.body.style.backgroundColor = "black";

/* Modal */
function openModal(imageSrc) {
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

/* Journal Section */
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

/* Album switching */
document.querySelectorAll(".album").forEach(album => {
    album.addEventListener("click", () => {
        const target = album.getAttribute("data-target");

        // Hide all galleries
        document.querySelectorAll(".gallery").forEach(g => g.style.display = "none");

        // Show selected gallery
        document.getElementById(target).style.display = "grid";

        // Scroll to gallery
        window.scrollTo({ top: album.offsetTop, behavior: "smooth" });
    });
});

document.querySelectorAll(".album").forEach(album => { album.addEventListener("click", () => { const target = album.getAttribute("data-target"); document.querySelectorAll(".gallery").forEach(g => g.style.display = "none"); document.getElementById(target).style.display = "grid"; }); });