<template>
  <div class="home">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss">
.home {
  background-color: rgb(67, 61, 61);
  height: 100vh;
}
</style>
