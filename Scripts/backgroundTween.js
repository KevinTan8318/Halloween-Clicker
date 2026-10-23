setInterval(() => {
  let R = Math.round(Math.random() * 255);
  let G = Math.round(Math.random() * 255);
  let B = Math.round(Math.random() * 255);

  document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
  document.body.style.transition = "7s linear";
}, 15000);
