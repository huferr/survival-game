const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const offset = {
  x: 1,
  y: 1,
};

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y,
  },
  imageSrc: "./assets/imgs/background.png",
});

function animate() {
  window.requestAnimationFrame(animate)

  background.draw()
}

animate()