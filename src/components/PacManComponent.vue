<template>
  <div>
    <div class="gameBox">
      <canvas ref="canvas" width="400" height="400"></canvas>
      <div>획득 점수: {{ score }}</div>
    </div>
    <div class="gameOpen" v-if="gameOn">
      <div class="modal">
        <div class="modal-content">
          <div v-if="!gameScore">
            환영합니다<br />
            조종은 키보드 방향키로 해주세요<br />
            <!-- <img src="../assets/images/kcar.webp" /> -->
            <button @click="startGame()">게임 시작</button>
          </div>
          <div v-else-if="gameScore">
            Game Over<br />
            당신의 총 점수는 : {{ finalScore }}<br />
            <button @click="reset('none')">돌아 가기</button>
            <button @click="reset('email')">
              개발자에게 점수 및 평가보내기
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Vue } from "vue-class-component";

export default class PacmanGame extends Vue {
  data() {
    return {
      gameScore: false,
      gameOn: true,
      score: 0,
      finalScore: 0,
      imagesData: require("@/assets/images/kcar.webp"),
      imageLoaded: false,
    };
  }
  mounted() {
    console.log("게임실행");
  }
  initializeGame() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");

    const pacman = {
      x: 200,
      y: 200,
      radius: 13,
      mouthOpen: 90,
      // direction: 0, // 0: right, 1: down, 2: left, 3: up
    };

    const food = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,
    };

    const orangeCircle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,
      speed: 1,
    };

    const drawOrangeCircle = () => {
      ctx.beginPath();
      const image = new Image();

      if (!this.imageLoaded) {
        this.imageLoaded = true;
        image.src = this.imagesData;
        // image.src = "/anything/favicon.ico";
        // image.src = "";
      }

      image.onload = function () {
        ctx.drawImage(image, 10, 10, 20, 20);
      };

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
    };

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
        this.gameOn = true;
        this.gameScore = true;
        this.finalScore = this.score;
        pacman.x = orangeCircle.x; // 게임 오버시 무조건 붙잡히고 퇴장
        pacman.y = orangeCircle.y;
        canvas.removeEventListener("keydown", keydownHandler);
      }
    };

    function gameLoop() {
      pacman.mouthOpen = (pacman.mouthOpen + 5) % 360;
      canvas.addEventListener("keydown", keydownHandler);

      updatePacman();
      checkCollision();
      updateOrangeCircle();

      drawPacman();
      drawFood();
      drawOrangeCircle();

      requestAnimationFrame(gameLoop);
    }

    function keydownHandler(event) {
      if (event.key === "ArrowRight") {
        pacman.direction = 0;
      } else if (event.key === "ArrowDown") {
        pacman.direction = 1;
      } else if (event.key === "ArrowLeft") {
        pacman.direction = 2;
      } else if (event.key === "ArrowUp") {
        pacman.direction = 3;
      }
    }

    canvas.setAttribute("tabindex", "0");
    canvas.focus();

    gameLoop();
  }
  reset(param) {
    if (param == "email") alert("아직 미구현 10/25");
    this.$nextTick(() => {
      this.$router.push("/");
    });
  }

  startGame() {
    this.gameOn = false;
    this.initializeGame();
  }
}
</script>
<style scoped lang="scss">
canvas {
  border: 2pt solid #2c3e50;
}
.gameOpen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background: white;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
  }

  .modal button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  .modal button:hover {
    background: #0056b3;
  }
}
</style>
