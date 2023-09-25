if (document.images) {
  var img = new Image();
  img.src = "img/example.jpg";
}

function loadImage(url, callback) {
  var img = new Image(); //创建一个Image对象，实现图片的预下载    
  img.onload = function () {
    img.onload = null;
    callback(img);
  }
  img.src = url;
}



const imageUrls = [
  "../../static/pic/running/20220209185500.jpg",
  "../../static/pic/running/20220211164114.jpg",
  "../../static/pic/running/20220217190000.jpg",
  "../../static/pic/running/20220306151100.jpg",
  "../../static/pic/running/20220603151100.jpg",
  "../../static/pic/running/20220605151100.jpg",
  "../../static/pic/running/20230916101339.jpg",
  "../../static/pic/running/20230923094034.jpg",

  // Add more image URLs as needed
];

let currentImageIndex = 0;
const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const touchArea = document.getElementById('touch-area');

function displayImage(index) {
  galleryImage.src = imageUrls[index];
}

prevButton.addEventListener('click', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    displayImage(currentImageIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentImageIndex < imageUrls.length - 1) {
    currentImageIndex++;
    displayImage(currentImageIndex);
  }
});

// Initialize Hammer.js on the touch area
const hammer = new Hammer(touchArea);

// Add swipe event listeners for left and right swipes
hammer.on('swipeleft', () => {
  if (currentImageIndex < imageUrls.length - 1) {
    currentImageIndex++;
    displayImage(currentImageIndex);
  }
});

hammer.on('swiperight', () => {
  if (currentImageIndex > 0) {
    currentImageIndex--;
    displayImage(currentImageIndex);
  }
});

// Initial display
displayImage(currentImageIndex);


