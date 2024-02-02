<template>
  <div>
    应用11
    <u-button @click="show">3</u-button>
  </div>
</template>

<script setup>
import { message } from "../dist/unittec";

const show = () => {
  message.success("成功");
};
</script>
