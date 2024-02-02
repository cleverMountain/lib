<template>
  <Teleport to="body">
    <div class="u-message">{{ props.content }}</div>
  </Teleport>
</template>


<script setup>
import { ref } from "vue";
const props = defineProps({
  content: String,
  duration: Number,
  destroy: Function,
});

setTimeout(() => {
  props.destroy()
}, props.duration)
</script>


<style>
.u-message {
  width: 100px;
  border: 1px solid red;
  padding: 4px;
  position: absolute;
  left: 50%;
}
</style>