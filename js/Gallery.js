var currentImageIndex = 0;
var imageUrls = [
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-083.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-082.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-086.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-085.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-081.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-080.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-077.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-001.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-004.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-005.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-015.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-014.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-012.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-017.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-019.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-023.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-024.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-026.jpg",
  "https://beyondcertainty.com/wp-content/uploads/2019/01/gallery-036.jpg",
];

function openImage(imageUrl) {
  var overlay = document.getElementById("overlay");
  var enlargedImage = document.getElementById("enlarged-image");

  enlargedImage.src = imageUrl;
  overlay.style.display = "block";
}

function closeImage() {
  var overlay = document.getElementById("overlay");
  overlay.style.display = "none";
}

function changeImage(direction) {
  currentImageIndex += direction;

  if (currentImageIndex < 0) {
    currentImageIndex = imageUrls.length - 1;
  } else if (currentImageIndex >= imageUrls.length) {
    currentImageIndex = 0;
  }

  var enlargedImage = document.getElementById("enlarged-image");
  enlargedImage.src = imageUrls[currentImageIndex];
}
