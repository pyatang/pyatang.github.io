if(document.images){
    var img = new Image();
    img.src = "img/example.jpg";
}  

function loadImage(url, callback) {    
    var img = new Image(); //创建一个Image对象，实现图片的预下载    
    img.onload = function(){
        img.onload = null;
        callback(img);
    }
    img.src = url;
}


const imageUrls = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg',
  // Add more image URLs as needed
];

let currentImageIndex = 0;
const galleryImage = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

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

// Initial display
displayImage(currentImageIndex);






// Get references to the file input and the button
const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');

// Add a click event listener to the button
uploadButton.addEventListener('click', function() {
  // Trigger a click event on the file input
  fileInput.click();
});

// Add an event listener to the file input to handle file selection
fileInput.addEventListener('change', function() {
  const selectedFile = fileInput.files[0]; // Get the first selected file

  if (selectedFile) {
    // You can now work with the selected file, for example, you can upload it to a server.
    console.log('Selected file:', selectedFile.name);
    
    // Here, you can add code to upload the selected file to a server using AJAX or other methods.
    // You can also perform any additional processing you need on the selected file.
  }
});


<script>
  const imageUrls = [
"../../static/pic/running/20220209185500.jpg",
                                             ,
"../../static/pic/running/20220211164114.jpg",
                                             ,
"../../static/pic/running/20220217190000.jpg",
                                             ,
"../../static/pic/running/20220306151100.jpg",
                                             ,
"../../static/pic/running/20220603151100.jpg",
                                             ,
"../../static/pic/running/20220605151100.jpg",
                                             ,
"../../static/pic/running/20230916101339.jpg",
                                             ,
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
</script>


