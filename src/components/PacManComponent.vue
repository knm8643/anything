<template>
  <div class="gameContainer">
    <div class="gameBox">
      <audio ref="audioPlayer" controls loop hidden>
        <source src="../assets/music/bgm.mp3" type="audio/mpeg" />
      </audio>
      <canvas ref="canvas" width="400" height="400"></canvas>
      <div class="gameScores">
        <span>획득 점수: {{ score }}</span>
      </div>
    </div>
    <div class="gameOpen" v-if="gameOn">
      <div class="modal">
        <div class="modal-content">
          <div v-if="!gameScore">
            집게 사장으로 도망쳐 게살버거를 드세요!<br />
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
      imagesData2: require("@/assets/images/ham.webp"),
      imagesData: require("@/assets/images/kcar2.png"),
      imageLoaded: false,
    };
  }
  mounted() {
    console.log("게임실행");
    this.playAudio();
  }
  playAudio() {
    this.$refs.audioPlayer.volume = 0.08;
    const audioPlayer = this.$refs.audioPlayer;
    audioPlayer.play();
  }
  initializeGame() {
    const canvas = this.$refs.canvas;
    const ctx = canvas.getContext("2d");

    const pacman = {
      x: 200,
      y: 200,
      radius: 12,
      mouthOpen: 90,
      // direction: 0, // 0: right, 1: down, 2: left, 3: up
    };

    const food = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,
      image: new Image(),
    };

    const orangeCircle = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,
      speed: 1,
      image: new Image(),
    };

    food.image.src = this.imagesData2;
    orangeCircle.image.src = this.imagesData;

    const drawOrangeCircle = () => {
      ctx.drawImage(
        orangeCircle.image,
        orangeCircle.x - 40,
        orangeCircle.y - 40,
        80,
        80
      );
    };

    orangeCircle.image.onload = function () {
      drawOrangeCircle();
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
      ctx.drawImage(food.image, food.x - 30, food.y - 30, 60, 60);
    }

    food.image.onload = function () {
      drawFood();
    };

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
          orangeCircle.speed = 1.5;
        } else if (this.score >= 10) {
          orangeCircle.speed = 1.9;
        } else if (this.score >= 15) {
          orangeCircle.speed = 2;
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
.gameContainer {
  background-image: url("../assets/images/back.webp");
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .gameBox {
    border: 2pt solid #2c3e50;
    border-radius: 2%;
    backdrop-filter: blur(6px);
    background-color: rgba(193, 184, 184, 0.5);
    padding: 1px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* 게임박스에 그림자 효과 추가 */
    .gameScores {
      font-size: large;
      height: 50px;
    }
  }
}
canvas {
  outline: none; /* 테두리 제거 */
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
