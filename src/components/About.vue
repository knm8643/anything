<template>
  <div class="aboutMain">
    <div
      class="moving-box"
      :style="{
        top: boxTop + 'vh',
        left: boxLeft + 'vw',
      }"
    ></div>
    <div class="bouncing-box" v-for="box in boxes" :key="box.id">
      <div class="box" :style="box.style"></div>
    </div>
  </div>
</template>

<style lang="scss">
.aboutMain {
  position: relative;
  width: 90vw;
  height: 90vh;
  overflow: hidden;
  .moving-box {
    position: absolute;
    border-radius: 38%;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    background-color: rgb(128, 172, 84);
  }
  .box {
    border: 1px solid black;
    width: 24px;
    height: 24px;
    border-radius: 38%;
    background-color: red;
    position: absolute;
    transition: transform 0.5s;
  }
}
</style>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class About extends Vue {
  boxTop = 20;
  boxLeft = 48;
  boxes = [] as {
    id: number;
    style: { top: string; left: string };
    speed: { x: number; y: number };
  }[];

  mounted() {
    this.createBoxes();
    this.animateBoxes();
    window.addEventListener("keydown", this.handleKeyDown);
  }

  beforeDestroy() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowUp":
        this.boxTop -= 2;
        break;
      case "ArrowDown":
        this.boxTop += 2;
        break;
      case "ArrowLeft":
        this.boxLeft -= 2;
        break;
      case "ArrowRight":
        this.boxLeft += 2;
        break;
    }
  }

  createBoxes() {
    for (let i = 1; i <= 28; i++) {
      const box = {
        id: i,
        style: {
          top: Math.random() * 100 + "vh",
          left: Math.random() * 100 + "vw",
        },
        speed: {
          x: Math.random() * 1 - 0.6, // 랜덤한 속도를 지정
          y: Math.random() * 1 - 0.6,
        },
      };
      this.boxes.push(box);
    }
  }
  animateBoxes() {
    requestAnimationFrame(this.animateBoxes);
    this.boxes.forEach((box) => {
      box.style.top = parseFloat(box.style.top) + box.speed.y + "vh";
      box.style.left = parseFloat(box.style.left) + box.speed.x + "vw";

      if (
        (parseInt(box.style.top) === this.boxTop + 1 &&
          parseInt(box.style.left) === this.boxLeft + 1) ||
        (parseInt(box.style.top) === this.boxTop + 1.5 &&
          parseInt(box.style.left) === this.boxLeft + 1.5) ||
        (parseInt(box.style.top) === this.boxTop - 1 &&
          parseInt(box.style.left) === this.boxLeft - 1) ||
        (parseInt(box.style.top) === this.boxTop - 1.5 &&
          parseInt(box.style.left) === this.boxLeft - 1.5) ||
        (parseInt(box.style.top) === this.boxTop + 2 &&
          parseInt(box.style.left) === this.boxLeft + 2)
      ) {
        console.log("game over");
        location.reload();
      }

      // 화면을 벗어난 박스는 재설정
      if (
        parseFloat(box.style.top) < -10 ||
        parseFloat(box.style.top) > 100 ||
        parseFloat(box.style.left) < -10 ||
        parseFloat(box.style.left) > 100
      ) {
        box.style.top = Math.random() * 50 + "vh";
        box.style.left = Math.random() * 90 + "vw";
      }
    });
  }
}
</script>
