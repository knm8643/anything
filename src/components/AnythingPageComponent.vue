<template>
  <div class="case">
    <div class="top">
      <div class="top-bar"></div>
    </div>
    <div class="screen">
      <div class="dot"></div>
      <div class="inner-screen">
        <table>
          <tr v-for="row in rows" :key="row">
            <td v-for="cell in cells" :key="cell" class="{cell}">■</td>
          </tr>
        </table>
        <!-- <table>
          <tr v-for="(row, rowIndex) in playfield" :key="rowIndex">
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :class="{ filled: cell === 1 }"
            >
              ■
            </td>
          </tr>
        </table>! -->
      </div>
    </div>
    <div class="control">
      <div class="d-pad">
        <div class="bar"></div>
        <div class="bar1"></div>
      </div>
      <div class="buttons"></div>
      <div class="starts"></div>
      <div class="barrs"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class anyThingPage extends Vue {
  rows = 6;
  cells = 10;
  // cells = Array.from({ length: 10 }, (_, index) => index + 1);
  playfield: number[][] = [];
  mounted() {
    this.initializePlayfield();
  }
  initializePlayfield() {
    // this.playfield = Array.from({ length: this.rows }, () =>
    //   Array.from({ length: this.cells }, () => Math.round(Math.random()))
    // );
    this.animatePlayfield();
  }
  animatePlayfield() {
    alert("제작중입니다.");
    console.log("게임 자동시작");
  }
}
</script>
<style lang="scss">
.case {
  width: 300px;
  height: 500px;
  margin: 0 auto;
  margin-top: 50px;
  border: 6px solid #264545;
  border-radius: 20px;
  background: #ffff76;

  /* border-bottom-right-radius: 100px; */
}

.top {
  width: 300px;
  height: 20px;
  border-bottom: 4px solid #cbccce;
}

.top-bar {
  width: 250px;
  height: 20px;
  border-left: 4px solid #cbccce;
  border-right: 4px solid #cbccce;
  margin: 0 auto;
}

.screen {
  width: 260px;
  height: 200px;
  background: #9a9c9e;
  margin: 0 auto;
  margin-top: 15px;
  border: 6px solid #264545;
  border-radius: 20px;
  border-bottom-right-radius: 50px;
}

.inner-screen {
  width: 150px;
  height: 150px;
  background: #50fee4;
  margin: -60px auto;
  border: 6px solid #264545;
  border-radius: 6px;
  overflow: hidden;
}
.inner-screen table {
  width: 100%;
  height: 100%;
  border-collapse: collapse;
}

.inner-screen td {
  width: 10%; /* 각 셀의 너비를 조절 */
  height: 10%; /* 각 셀의 높이를 조절 */
  // border: 1px solid #264545;
}

.objects {
  width: 150px;
  height: 45px;
  margin-top: -45px;
  padding: 0px 10px;
  box-sizing: border-box;
}

.row {
  width: 15px;
  height: 170px;
  float: left;
  margin-right: 10px;
}

.piece {
  width: 15px;
  height: 15px;
  background: #264545;
}

.a {
  box-shadow: 0px 14px 0px #f33, 14px 14px 0px #f33;
  -webkit-animation: a 3s infinite linear;
  background: #f33;
}

.b {
  box-shadow: 0px 14px 0px #33ff63, 0px 28px 0px #33ff63;
  background: #33ff63;
  -webkit-animation: a 1s infinite linear;
}

.c {
  -webkit-animation: a 2s infinite linear;
  background: #ff7e33;
}

.d {
  -webkit-animation: a 5s infinite linear;
  background: #cfff33;
  box-shadow: 0px 15px #cfff33, 0px -15px #cfff33, 15px 0px #cfff33;
}

/* Animations */

@-webkit-keyframes a {
  0% {
    margin-top: 0px;
  }
  100% {
    margin-top: 200px;
  }
}

.dot {
  width: 10px;
  height: 10px;
  background: #264545;
  border-radius: 50%;
  margin-top: 70px;
  margin-left: 20px;
}

.control {
  width: 260px;
  height: 150px;
  margin: 0 auto;
  margin-top: 60px;
  overflow: shown;
}

.d-pad {
  width: 90px;
  height: 90px;
  overflow: hidden;
}

.bar {
  width: 90px;
  height: 30px;
  background: #264545;
  border-radius: 6px;
  margin-top: 30px;
}

.bar1 {
  width: 30px;
  height: 90px;
  background: #264545;
  border-radius: 6px;
  margin: -60px auto;
}

.buttons {
  width: 30px;
  height: 30px;
  background: #f4706c;
  border-radius: 50%;
  float: right;
  margin-top: -50px;
  box-shadow: -50px 15px 0px 0px #f4706c;
}

.starts {
  width: 30px;
  height: 5px;
  border-radius: 200px;
  background: #9a9c9e;
  margin: 0 auto;
  transform: rotate(-30deg) translateX(-30px);
  box-shadow: 30px 20px 0px #9a9c9e;
}

.barrs {
  width: 5px;
  height: 40px;
  background: #9a9c9e;
  border-radius: 200px;
  margin: 90px auto;
  transform: rotate(-35deg) translateX(70px);
  box-shadow: 15px 0px 0px #9a9c9e, 30px 0px 0px #9a9c9e, 45px 0px 0px #9a9c9e,
    60px 0px 0px #9a9c9e, 75px 0px 0px #9a9c9e;
}
</style>
