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




