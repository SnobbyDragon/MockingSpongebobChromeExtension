function drawImage(text) {
  const canvas = document.getElementById("canvas");
  console.log("hello" + canvas.width);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.fill();
  const img = document.getElementById("mocking-spongebob");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "48px Comic Sans MS";
  ctx.fillText(text.current, 10, 50);
  ctx.fillStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeText(text.current, 10, 50);

  // dataUrl = canvas.toDataURL(),

}

window.onload = function() {
  chrome.storage.sync.get("current", drawImage);
}
