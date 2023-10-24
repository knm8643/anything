<template>
  <div>
    <canvas ref="canvas" width="400" height="400"></canvas>
    <div>획득 점수 : {{ score }}</div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class PacmanGame extends Vue {
  data() {
    return {
      score: 0,
    };
  }
  mounted() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");

    const pacman = {
      x: 50,
      y: 20,
      radius: 15,
      mouthOpen: 30,
      direction: 0, // 0: right, 1: down, 2: left, 3: up
    };

    const food = {
      x: 200,
      y: 200,
      radius: 10,
    };

    const orangeCircle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,
      speed: 1,
    };

    function drawOrangeCircle() {
      ctx.beginPath();
      ctx.arc(
        orangeCircle.x,
        orangeCircle.y,
        orangeCircle.radius,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "orange";
      ctx.fill();
      ctx.closePath();
    }

    function updateOrangeCircle() {
      const dx = pacman.x - orangeCircle.x;
      const dy = pacman.y - orangeCircle.y;
      const angle = Math.atan2(dy, dx);

      orangeCircle.x += orangeCircle.speed * Math.cos(angle);
      orangeCircle.y += orangeCircle.speed * Math.sin(angle);
    }

    function drawPacman() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(
        pacman.x,
        pacman.y,
        pacman.radius,
        (pacman.mouthOpen / 180) * Math.PI,
        (360 - pacman.mouthOpen / 180) * Math.PI
      );
      ctx.lineTo(pacman.x, pacman.y);
      ctx.fillStyle = "yellow";
      ctx.fill();
      ctx.closePath();
    }

    function drawFood() {
      ctx.beginPath();
      ctx.arc(food.x, food.y, food.radius, 0, 2 * Math.PI);
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
    }

    function updatePacman() {
      if (pacman.direction === 0 && pacman.x + pacman.radius < canvas.width) {
        pacman.x += 2;
      } else if (
        pacman.direction === 1 &&
        pacman.y + pacman.radius < canvas.height
      ) {
        pacman.y += 2;
      } else if (pacman.direction === 2 && pacman.x - pacman.radius > 0) {
        pacman.x -= 2;
      } else if (pacman.direction === 3 && pacman.y - pacman.radius > 0) {
        pacman.y -= 2;
      }
    }

    const checkCollision = () => {
      const dx = pacman.x - food.x;
      const dy = pacman.y - food.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < pacman.radius + food.radius) {
        this.score += 1;

        if (this.score >= 5) {
          orangeCircle.speed = 1.4;
        } else if (this.score >= 10) {
          orangeCircle.speed = 1.8;
        }

        food.x = Math.random() * canvas.width;
        food.y = Math.random() * canvas.height;
      }

      const dx2 = pacman.x - orangeCircle.x;
      const dy2 = pacman.y - orangeCircle.y;
      const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);

      if (distance2 < pacman.radius + orangeCircle.radius) {
        console.log("Game Over");
        this.$router.push("/?gameOver");
        this.$nextTick(() => {
          location.reload();
        });
      }
    };

    function gameLoop() {
      pacman.mouthOpen = (pacman.mouthOpen + 5) % 360;

      updatePacman();
      checkCollision();
      updateOrangeCircle();

      drawPacman();
      drawFood();
      drawOrangeCircle();

      requestAnimationFrame(gameLoop);
    }

    canvas.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        pacman.direction = 0;
      } else if (event.key === "ArrowDown") {
        pacman.direction = 1;
      } else if (event.key === "ArrowLeft") {
        pacman.direction = 2;
      } else if (event.key === "ArrowUp") {
        pacman.direction = 3;
      }
    });

    canvas.setAttribute("tabindex", "0");
    canvas.focus();

    gameLoop();
  }
}
</script>
