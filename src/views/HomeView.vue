<template>
  <div class="home">
    <!--    <HelloWorld />-->
    <HelloWorld2></HelloWorld2>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import HelloWorld2 from "@/components/HelloWorldVer2.vue";

@Options({
  components: {
    HelloWorld,
    HelloWorld2,
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss">
.home {
  margin: 0 auto;
  max-width: 1140px;
}
</style>
