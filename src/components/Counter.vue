<template>
  <div class="counter">
    <div class="title">{{ count }}</div>
    <div>
      <button @click="add">+</button>
      <button @click="minus">-</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
const add = () => {
  count.value += 1;
};
const minus = () => {
  count.value -= 1;
};
console.log(_APP)
</script>

<style lang="less" scoped>

.counter {
  .title {
    color: aqua;
    font-size: 16px;
  }
}
</style>
