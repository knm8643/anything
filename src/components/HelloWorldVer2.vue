<template>
  <!--  <div class="HelloWorldVerMain">장사종료</div>-->
  <div class="container">
    <div class="newsletter">
      <section class="name">
        <!--        <p>갑자기 '취업 성공' 충격, 충재의 이야기</p>-->
        <p>갑자기 부셔진 앞유리 충격, 레이의 이야기</p>
      </section>

      <section class="info">
        <p>DAILY NEWS</p>
        <p>₩440,000</p>
      </section>

      <section class="title">
        <h1>
          <span>교체비용!</span>
          <span>무려 44만원!</span>
        </h1>
      </section>

      <section class="content">
        <article class="left-side">
          <h2>
            <span>이 이야기는 어느 평범하게 비오는날 시작됩니다.</span>
            <span>일가족이 타던 레이에 누가 돌을 던져..</span>
          </h2>
          <div>
            <p>
              오늘 우리 가족이 차를 타고 가다가 불행하게도 앞유리가 돌에 맞아
              깨졌어요. 우리 가족과 사랑하는 강아지까지 함께 있던 그 순간,
              예기치 못한 사고에 너무나도 놀랐고 슬펐어요. 우리 모두가
              당황스러워하고 있었지만, 이런 상황에서 우리 가족이 가장 중요하다는
              것을 다시 한번 느꼈어요.
            </p>
            <p>
              수리 비용으로 총 44만원이 필요하다고 합니다. 이 금액은 조금 많을
              수 있겠지만, 우리 가족이 더 이상 어려움을 겪지 않도록 도와주세요.
              우리의 안전과 행복이 최우선이니까요. 저희 가족은 이런 어려운
              상황에서도 함께 있으면서 서로를 지탱해 나갈 수 있다고 믿어요.
              당신이 우리 가족의 리더이자 힘줄이기 때문에, 이 어려운 시간을 함께
              극복할 수 있을 거라 확신합니다. 정말 간절히 당신의 도움을 필요로
              합니다. 이런 상황에서도 우리 가족을 위해 항상 헌신하고 지원해
              주시는 당신에게 감사의 말씀을 전합니다. &lt;멘트 by GPT&gt;
            </p>
          </div>
        </article>
        <article class="right-side">
          <img src="../assets/images/레이.jpeg" />
          <!--          <p>-->
          <!--            Copyright (C) 2024.03 유림충재 날씨 좋은 어느날 함께<br />-->
          <!--            © 이충재 &lt;knm8643@nate.com&gt;&lt;010-5696-1909&gt;-->
          <!--          </p>-->
          <p>Copyright (C) 날씨 좋은날 창문이 벗겨진 레이</p>
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
<style lang="scss" scoped>
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
    //커스텀
    height: 100%;
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
