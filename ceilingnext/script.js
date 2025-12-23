console.log("CeilingNext Website Loaded Successfully");
let index = 0;

function moveSlide(step){
  const slides = document.querySelector(".slides");
  const total = slides.children.length;
  index += step;

  if(index < 0) index = total - 1;
  if(index >= total) index = 0;

  slides.style.transform = `translateX(-${index * 100}%)`;
}

// Auto Slide
setInterval(() => {
  moveSlide(1);
}, 4000);



const images = [
  "https://via.placeholder.com/900x500?text=Gypsum+Ceiling",
  "https://via.placeholder.com/900x500?text=PVC+Ceiling",
  "https://via.placeholder.com/900x500?text=Armstrong+Grid"
];

let current = 0;
const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".thumbnails img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

function showImage(index){
  current = index;
  mainImage.src = images[current];
  thumbs.forEach((t,i)=>t.classList.toggle("active", i===current));
}

function changeImage(step){
  current = (current + step + images.length) % images.length;
  showImage(current);
}

function selectImage(index){
  showImage(index);
}

// Lightbox
mainImage.onclick = () => {
  lightbox.style.display = "flex";
  lightboxImg.src = images[current];
}

function closeLightbox(){
  lightbox.style.display = "none";
}

// Auto Slide
setInterval(()=>changeImage(1), 5000);

// Init
showImage(0);
