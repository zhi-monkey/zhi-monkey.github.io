
//生成验证码

	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

function generate() {
  // 清空 Canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 绘制背景色
  ctx.fillStyle = "#f2f2f2";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // 绘制随机数字
  var code = "";
  var chars = "0123456789";
  for (var i = 0; i < 4; i++) {
	var char = chars[Math.floor(Math.random() * chars.length)];
	code += char;
	ctx.font = "bold 20px Arial";
	ctx.fillStyle = "#333";
	ctx.fillText(char, 20 + i * 20, 25);
  }

  // 绘制干扰线
  for (var i = 0; i < 5; i++) {
	ctx.beginPath();
	ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
	ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
	ctx.strokeStyle = "#ccc";
	ctx.stroke();
  }

  // 绘制干扰点
  for (var i = 0; i < 30; i++) {
	ctx.beginPath();
	ctx.arc(Math.random() * canvas.width, Math.random() * canvas.height, 1, 0, 2 * Math.PI);
	ctx.fillStyle = "#ccc";
	ctx.fill();
  }

  // 将 Canvas 转换为图片
  var img = document.createElement("img");
  img.src = canvas.toDataURL("image/png");

  // // 显示图片
  // var container = document.createElement("div");
  // container.appendChild(img);
  // document.body.appendChild(container);


};

