function drawImage(text) {
  const canvas = document.getElementById("canvas");
  console.log("hello" + canvas.width);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.beginPath();
  // ctx.rect(0, 0, canvas.width, canvas.height);

  //draw original spongebob image
  const img = document.getElementById("mocking-spongebob");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";

  //draw text on image
  var fontSize = "48px";
  var xPos = 10, yPos = 50;
  ctx.font = fontSize + " Comic Sans MS";
  ctx.fillText(text.current, xPos, yPos);
  ctx.fillStyle = "black";
  ctx.lineWidth = 2;
  ctx.strokeText(text.current, xPos, yPos);

  //convert canvas to image
  var generatedMeme = document.createElement('img');
  generatedMeme.src = canvas.toDataURL()
  generatedMeme.style.width = canvas.width;
  generatedMeme.style.height = canvas.height;
  document.getElementById("formatText").appendChild(generatedMeme);
}

window.onload = function() {
  chrome.storage.sync.get("current", drawImage);
}
