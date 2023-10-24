<template>
  <header>
    <h1>퍼즐 버블 아케이드</h1>
  </header>
  <nav>
    <ul>
      <li><a href="#">홈</a></li>
      <li><a href="#">게임 목록</a></li>
      <li><a href="#">고객 서비스</a></li>
    </ul>
  </nav>
  <main>
    <h2>인기 게임</h2>
    <section class="game">
      <img src="puzzle-bubble.jpg" alt="퍼즐 버블" />
      <h3>퍼즐 버블</h3>
      <p>퍼즐 버블은 전설적인 아케이드 게임입니다. 색상 볼을 맞춰보세요!</p>
      <button>게임 시작</button>
    </section>
    <!-- 다른 게임 섹션들도 추가 가능 -->
  </main>
</template>
<script>
import { Options, Vue } from "vue-class-component";

@Options({})
export default class Pacman extends Vue {}
</script>

<style scoped>
body {
  background-color: #000; /* 검은 배경색 */
  color: #fff; /* 흰색 텍스트 */
  font-family: "Press Start 2P", cursive; /* 레트로 폰트 */
  text-align: center;
}

header {
  background-color: #04bdf1; /* 파란 배경색 */
  padding: 20px;
}

nav ul {
  list-style-type: none;
  padding: 0;
}

nav li {
  display: inline;
  margin-right: 20px;
}

nav a {
  text-decoration: none;
  color: #fff;
}

main {
  padding: 20px;
}

.game {
  border: 2px solid #000;
  background-color: #ffdd00; /* 노란 배경색 */
  padding: 20px;
  margin: 20px;
}

h1,
h2,
h3 {
  color: #04bdf1; /* 파란색 텍스트 */
}

button {
  background-color: #ffdd00; /* 노란 버튼 배경색 */
  border: 2px solid #000;
  padding: 10px 20px;
  border-radius: 10px;
  font-family: "Press Start 2P", cursive;
  text-transform: uppercase;
  color: #000; /* 검은색 텍스트 */
  cursor: pointer;
}

img {
  width: 200px;
  height: 200px;
}
</style>
