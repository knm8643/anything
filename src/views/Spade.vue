<template>
  <div class="spade">
    <spade></spade>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import spade from "@/components/SpadeComponent.vue";

@Options({
  components: { spade },
})
export default class spadeView extends Vue {}
</script>

<style scoped></style>
