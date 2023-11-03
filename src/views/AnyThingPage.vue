<template>
  <div class="anyThingPage">
    <anyThingPage></anyThingPage>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import anyThingPage from "@/components/AnythingPageComponent.vue";

@Options({
  components: { anyThingPage },
})
export default class anyThingPageView extends Vue {}
</script>
