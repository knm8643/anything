<template>
  <div class="hello">
    <nav>
      <router-link to="/">개발자 소개[네비삭제예정]</router-link> |
      <router-link to="/pacman">게임하기</router-link>
    </nav>
    <h1>이충재란 인간 소개할예정</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  mounted() {
    const navElement = document.querySelector("nav");
    if (navElement !== null) {
      navElement.style.display = "block";
    }
  }
}
</script>

<style lang="scss">
.hello {
  color: white;
  max-width: 360px; /* 핸드폰 사이즈로 설정 */
  margin: 0 auto;
  border: 1px solid #ddd; /* 테두리 스타일 추가 */
  padding: 10px;
  background-color: none; /* .hello 클래스에만 배경색 추가 */
}
</style>
