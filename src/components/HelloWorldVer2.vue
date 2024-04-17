<template>
  <!--  <div class="HelloWorldVerMain">장사종료</div>-->
  <div class="container">
    <div class="newsletter">
      <section class="name">
        <p>갑자기 '취업 성공' 충격, 충재의 이야기</p>
      </section>

      <section class="info">
        <p>DAILY NEWS</p>
        <p>₩3,500</p>
      </section>

      <section class="title">
        <h1>
          <span>취업 성공,</span>
          <span>함께 기뻐해주세요!</span>
        </h1>
      </section>

      <section class="content">
        <article class="left-side">
          <h2>
            <span>저는 웹 개발자로</span>
            <span>취업했습니다!</span>
          </h2>
          <div>
            <p>
              저는 현재 강서에 위치한 굿소프트에서 웹 개발자로 일하고 있습니다.
              현재 Java, JSP, JSTL 및 MSSQL과 같은 기술을 활용하여 GS라테일
              백오피스 신규 프로젝트를 수행하고 있습니다. 그리고 이를 통해 제
              개발 역량을 지속적으로 향상시키고 있습니다. 특히, 사용자 경험을
              개선하고 시스템의 안정성을 높이는 데 관심을 가지고 있습니다. 제
              성장과 함께 기술의 발전을 추구하며, 항상 도전과 학습에 열려있는
              개발자로써 노력하고 있습니다.
            </p>
            <p>
              현재 프로젝트의 경험을 통해 문제 해결 능력과 협업 능력을 키우고
              있습니다. 또한, 새로운 기술의및 도구에 대한 학습에 열정적으로
              참여하여 프로젝트에 적용하고 있습니다. 끊임없는 도전과 성장을
              추구하며, 사용자 중심의 솔루션을 개발하는 것을 목표로 삼고
              있습니다. 이를 통해 제가 참여하는 프로젝트와 회사의 성과에
              기여하고, 더 나은 미래를 위해 노력하고 있습니다. 함께 일하는
              동료들과의 협업을 통해 더 나은 결과물을 만들어내기 위해 노력하고
              있으며, 저의 역량을 발휘하여 조직의 발전에 기여할 수 있도록 최선을
              다하고 있습니다. &lt;멘트 by GPT&gt;
            </p>
          </div>
        </article>
        <article class="right-side">
          <img src="../assets/images/이충재컷흑백.jpeg" />
          <p>
            Copyright (C) 2024.03 유림충재 날씨 좋은 어느날 함께<br />
            © 이충재 &lt;knm8643@nate.com&gt;&lt;010-5696-1909&gt;
          </p>
        </article>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HomeView2 extends Vue {
  mounted() {
    console.log("출처 : https://codepen.io/masterneme/pen/zYeGwJB ");
  }
}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: dimgray;
}

.container {
  animation: scale-up 2.5s linear;
}

.newsletter {
  width: 800px;
  background-color: whitesmoke;
  padding: 5px;
  border: 1px solid black;
  transform: rotate(-5deg);
  animation: rotate 0.5s linear 5;
  position: relative;
}

.newsletter::before {
  content: "";
  width: 8px;
  height: 98%;
  position: absolute;
  left: -10px;
  top: 1%;
  background-color: whitesmoke;
  border: 1px solid black;
}

.newsletter::after {
  content: "";
  width: 8px;
  height: 96%;
  position: absolute;
  left: -19px;
  top: 2%;
  background-color: whitesmoke;
  border: 1px solid black;
}

.name {
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 40px;
  font-weight: 400;
}

.info {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px 5px;
}

.title h1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-size: 65px;
}

.content {
  display: flex;
}

.left-side {
  display: flex;
  flex-direction: column;
}

.left-side h2 {
  display: flex;
  flex-direction: column;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px 5px;
}

.left-side div {
  display: flex;
}

.left-side div p {
  padding: 5px 0 10px 5px;
}

.right-side {
  padding: 0 0 20px 5px;
  font-size: x-small;
  img {
    width: 280px;
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}

@keyframes scale-up {
  0% {
    transform: scale(1%);
  }
  100% {
    transform: scale(100%);
  }
}
</style>
