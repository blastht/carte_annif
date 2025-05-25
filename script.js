function ouvrirMessage() {
  document.getElementById("message").style.opacity = "1";
}

const images = [
  { src: "images/tahiti1.jpg", caption: "Moment en famille ❤️" },
  { src: "images/tahiti2.jpg", caption: "Sourire radieux en robe rouge ✨" },
  { src: "images/tahiti3.jpg", caption: "La petite perle du Pacifique 🐚" },
  { src: "images/tahiti4.jpg", caption: "Balade à l’ombre des grands lieux" }
];

let index = 0;
const photo = document.getElementById("photo");
const caption = document.getElementById("caption");

// Préchargement
images.forEach(img => {
  const preload = new Image();
  preload.src = img.src;
});

function updateImage() {
  photo.classList.remove("visible");
  setTimeout(() => {
    photo.src = images[index].src;
    caption.textContent = images[index].caption;
    photo.classList.add("visible");
  }, 200);
}

function changeImage(direction) {
  index = (index + direction + images.length) % images.length;
  updateImage();
}

setInterval(() => {
  changeImage(1);
}, 6000); // Optionnel : automatique toutes les 6s
