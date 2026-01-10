document.addEventListener("DOMContentLoaded", () => {
    const hasGreeted = localStorage.getItem("hasGreeted");
    const savedName = localStorage.getItem("userName");

    if (!hasGreeted) {
        showCustomGreeting();
    } else if (savedName) {
        console.log(`Welcome back, ${savedName}!`);
    }

    loadGallery();
});

function showCustomGreeting() {
    const modal = document.getElementById("welcomeModal");
    const input = document.getElementById("userNameInput");
    const button = document.getElementById("submitName");

    modal.classList.add("show");

    // Prevent duplicate listeners
    button.onclick = () => {
        const name = input.value.trim();

        if (!name) {
            alert("Please enter your name.");
            return;
        }

        alert(`Hello, ${name}! Welcome to our website.`);

        modal.classList.remove("show");

        localStorage.setItem("hasGreeted", "true");
        localStorage.setItem("userName", name);
    };
}

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

    const gallery = document.getElementById("gallery");
    const loading = document.getElementById("loading");

    imageData.forEach((image) => {
        const item = document.createElement("div");
        item.className = "gallery-item";
        item.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
            <div class="overlay">
                <div class="overlay-text">${image.alt}</div>
            </div>
        `;
        gallery.appendChild(item);
    });

    loading.style.display = "none";

    console.log("Gallery loaded with " + imageData.length + " images");
}
