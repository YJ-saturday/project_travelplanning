<template>
  <a href="/" class="title">
    <h1>
      <span>K</span>
      <span>I</span>
      <span>M</span>
      <span>Y</span>
      <span>E</span>
      <span>J</span>
      <span>O</span>
      <span>N</span>
      <span>G</span>
    </h1>
  </a>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function gohome(route) {
  router.push(route);
}
</script>

<style scoped>
.title:hover {
}

.title {
  text-decoration: none;
}

h1 {
  padding-left: 25px;
  padding-top: 10px;
  cursor: pointer;
}

h1 span {
  position: relative;
  top: -6px;
  /* display: inline-block; */
  animation: bounce 0.3s ease infinite alternate;
  /* font-family: 'Titan One', cursive; */
  font-size: 30px;
  color: #fff;
  /* text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
    0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent, 0  0 transparent,
    0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4); */
  letter-spacing: 2px;
}

h1 span:nth-child(2) {
  animation-delay: 0.1s;
}
h1 span:nth-child(3) {
  animation-delay: 0.2s;
}
h1 span:nth-child(4) {
  animation-delay: 0.3s;
}
h1 span:nth-child(5) {
  animation-delay: 0.4s;
}
h1 span:nth-child(6) {
  animation-delay: 0.5s;
}
h1 span:nth-child(7) {
  animation-delay: 0.6s;
}
h1 span:nth-child(8) {
  animation-delay: 0.7s;
}

@keyframes bounce {
  100% {
    top: -12px;
    /* text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0  0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2); */
  }
}
</style>
