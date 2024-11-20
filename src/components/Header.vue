<template>
  <header
    @mousemove="onMousemove"
    :style="{ backgroundColor: `hsl(${headercolor}, 40%, 60%)` }"
    class="header"
  >
    <Title />

    <!-- :class="{ '클래스명': 조건 }" = 객체 리터럴 형태 -->
    <nav :class="{ 'is-active': isMenuOpen }">
      <ul>
        <li><a class="" @click="goIntroduction('/Introduction')">소개</a></li>
        <li><a class="" @click="goWeather('/Weather')">날씨</a></li>
        <li><a class="" @click="goTravelplan('/Travelplan')">여행계획</a></li>
        <li><a class="" @click="goAccountbook('/Accountbook')">가계부</a></li>
      </ul>
    </nav>
    <button class="menu-toggle" @click="toggleMenu">☰</button>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import Title from './Header/Title.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goIntroduction(route) {
  router.push(route);
}
function goTravelplan(route) {
  router.push(route);
}
function goWeather(route) {
  router.push(route);
}
function goAccountbook(route) {
  router.push(route);
}

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const headercolor = ref(0);
function onMousemove(e) {
  headercolor.value = e.clientX;
}
</script>

<style scoped>
/* 기본 헤더 스타일 */
.header {
  display: flex;
  justify-content: space-between;
  color: white;
  transition: 0.3s background-color ease;
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 129px;
  top: 0;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  padding: 10px;
}

nav ul li a {
  color: white;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  font-size: 30px;
  background: none;
  border: none;
  color: white;
}

/* 작은 화면에서 메뉴가 토글되도록 */
@media (max-width: 768px) {
  nav {
    display: none;
    width: 100%;
    background-color: #333;
    position: absolute;
    top: 80px;
    left: 0;
    padding: 10px 0;
  }

  nav.is-active {
    display: block;
  }

  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav ul li {
    margin: 10px 0;
  }

  .menu-toggle {
    display: block;
  }
}
</style>
