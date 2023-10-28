<template>
  <div class="gameContainer">
    <div class="gameBox">
      <audio ref="audioPlayer" controls loop hidden>
        <source src="../assets/music/bgm1.mp3" type="audio/mpeg" />
      </audio>
      <canvas ref="canvas" width="400" height="400"></canvas>
      <div class="gameScores">
        <span class="danger">{{ message }} </span>
        <span>점수: {{ score }}</span>
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
            <div class="reviewNone" style="display: block">
              Game Over<br />
              당신의 총 점수는 : {{ finalScore }}<br />
              <button @click="reset('none')">돌아가기</button>
              <button @click="reset('email')">평가하기</button>
            </div>
            <div class="reviewShow" style="display: none">
              <h2>별점 평가</h2>
              <select v-model="rating" style="width: 50px">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <!-- 나머지 입력 필드들은 이전과 동일하게 유지 -->
              <h2>평가적는 사람은 누구?</h2>
              <input v-model="reviewerName" type="text" />

              <h2>개발자에게 하고싶은 말은</h2>
              <textarea v-model="reviewContent"></textarea><br />
              <button @click="sendMail()">평가제출</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import { Vue } from "vue-class-component";

export default class PacmanGame extends Vue {
  data() {
    return {
      reviewContent: "",
      reviewerName: "징징이",
      rating: 5,
      message: "",
      gameScore: false,
      gameOn: true,
      score: 0,
      finalScore: 0,
      imagesData3: require("@/assets/images/j.webp"),
      imagesData2: require("@/assets/images/ham.webp"),
      imagesData: require("@/assets/images/kcar2.png"),
      imageLoaded: false,
    };
  }
  mounted() {
    console.log("게임실행");
    document.querySelector("nav").style.display = "none";
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
      image: new Image(),
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

    pacman.image.src = this.imagesData3;
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
      // ctx.drawImage(pacman.image, pacman.x - 30, pacman.y - 30, 30, 40);
      ctx.drawImage(pacman.image, pacman.x - 30, pacman.y - 30, 30, 60);
    }

    pacman.image.onload = function () {
      drawPacman();
    };

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

        switch (this.score) {
          case 4:
            orangeCircle.speed = 1.4;
            this.message = "집게사장이 화났습니다. 속도가 빨라집니다.";
            break;
          case 5:
            orangeCircle.speed = 1.5;
            break;
          case 6:
            orangeCircle.speed = 1.6;
            break;
          case 7:
            this.message = "점수 7 이상은 아직 미구현입니다^^!";
            orangeCircle.speed = 1.8;
            break;
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
  sendMail() {
    emailjs.init("RL-sgo5vo_PAEhlXN");
    emailjs
      .send("service_portfolio", "template_1mkalef", {
        to_name: this.rating,
        from_name: this.reviewerName,
        message: this.reviewContent,
      })
      .then(
        (response) => {
          alert("개발자에게 메시지가 전송이 완료됐습니다.");
          this.$router.push("/");
        },
        (error) => {
          console.error("이메일 전송 중 오류가 발생했습니다.");
        }
      );
  }
  reset(param) {
    if (param == "email") {
      const reviewNone = document.querySelector(".reviewNone");
      const reviewShow = document.querySelector(".reviewShow");

      if (reviewNone !== null && reviewShow !== null) {
        reviewNone.style.display = "none";
        reviewShow.style.display = "block";
      }
    } else {
      this.$nextTick(() => {
        this.$router.push("/");
      });
    }
  }

  startGame() {
    this.gameOn = false;
    this.initializeGame();
  }
}
</script>
<style scoped lang="scss">
.gameContainer {
  background-image: url("../assets/images/back3.jpeg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .gameBox {
    border: 2pt solid #2c3e50;
    border-radius: 2%;
    backdrop-filter: blur(9.5px);
    background-color: rgba(231, 221, 221, 0.5);
    padding: 1px;
    .gameScores {
      height: 50px;
      .danger {
        font-size: large;
        color: red;
      }
    }
  }
}
.gameScores span {
  font: bold;
  display: block;
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
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
  }

  .modal button:last-child {
    margin-right: 0;
  }

  .modal button:hover {
    background: #0056b3;
  }
}
</style>
