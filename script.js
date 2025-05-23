function ouvrirCarte() {
  const carte = document.querySelector('.carte');
  const audio = document.getElementById('musique');
  carte.classList.toggle('ouverte');

  if (carte.classList.contains('ouverte')) {
    audio.play();
    lancerPetales();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
}

function toggleMute() {
  const audio = document.getElementById('musique');
  const muteBtn = document.getElementById('muteBtn');
  audio.muted = !audio.muted;
  muteBtn.textContent = audio.muted ? '🔊 Remettre le son' : '🔇 Couper le son';
}

function afficherSouvenir(event) {
  event.stopPropagation();
  const souvenir = document.getElementById('souvenir');
  souvenir.classList.remove('reveal');
  void souvenir.offsetWidth; // Force reflow
  souvenir.classList.add('reveal');
}

function lancerPetales() {
  const container = document.getElementById('petales-container');
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (3 + Math.random() * 8) + 's';
    container.appendChild(petal);
    setTimeout(() => petal.remove(), 8000);
  }
}
