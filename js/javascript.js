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
