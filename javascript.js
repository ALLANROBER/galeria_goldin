const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const music = document.getElementById("music");
const heartsContainer = document.getElementById("hearts-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentIndex = 0;
let heartInterval;

// canciones para cada imagen
const songs = [
    "music/Ojitos-Lindos.mp3",
    "music/enseñame a bailar.mp3",
    "music/Me-Fui-de-Vacaciones.mp3",
    "music/Despues-de-la-Playa.mp3",
    "music/Si-Estuviesemos-Juntos-Juntos.mp3"
];

function createHeart(){

    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },4000);

}

photos.forEach((photo, index) => {

    photo.addEventListener("click", () => {

        currentIndex = index;

        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;

        music.src = songs[currentIndex];
        music.play();

        heartInterval = setInterval(createHeart,300);

    });

});

next.addEventListener("click", (e)=>{

    e.stopPropagation();

    currentIndex++;

    if(currentIndex >= photos.length){
        currentIndex = 0;
    }

    lightboxImg.src = photos[currentIndex].src;
    music.src = songs[currentIndex];
    music.play();

});

prev.addEventListener("click", (e)=>{

    e.stopPropagation();

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = photos.length - 1;
    }

    lightboxImg.src = photos[currentIndex].src;
    music.src = songs[currentIndex];
    music.play();

});

lightbox.addEventListener("click", () => {

    lightbox.style.display = "none";
    music.pause();
    clearInterval(heartInterval);

});