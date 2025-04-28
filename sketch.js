let video;

function setup() {
  let canvasWidth = windowWidth * 0.8;
  let canvasHeight = windowHeight * 0.8;
  createCanvas(canvasWidth, canvasHeight).position(
    (windowWidth - canvasWidth) / 2,
    (windowHeight - canvasHeight) / 2
  );

  // 啟用攝影機
  video = createCapture(VIDEO);
  video.size(canvasWidth, canvasHeight);
  video.hide(); // 隱藏原始的 HTML 視訊元素
}

function draw() {
  background('#8338ec');
  image(video, 0, 0, width, height); // 將攝影機影像繪製到畫布上
}

function windowResized() {
  setup(); // 重新調整畫布大小和位置
}
