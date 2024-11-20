<template>
  <div>
    <div class="carousel">
      <!-- 슬라이드 컨테이너 -->
      <div class="carousel-outer" ref="carouselOuter">
        <div class="carousel-inner" ref="carouselInner">
          <div
            class="carousel-item"
            v-for="(item, index) in items"
            :key="index"
          >
            <h2>{{ item }}</h2>
          </div>
        </div>
      </div>

      <!-- 네비게이션 버튼 -->
      <div class="carousel-buttons">
        <button class="button" @click="moveLeft">←</button>
        <button class="button" @click="moveRight">→</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// 슬라이드 데이터
const items = ['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4', 'Slide 5'];

// 상태 관리
const carouselOuter = ref(null);
const carouselInner = ref(null);
const currentIndex = ref(0);

// 화면 크기 변화에 따른 반응형 처리
const updateSizes = () => {
  const outerWidth = carouselOuter.value.clientWidth;
  const itemElements = carouselInner.value.children;

  // 각 슬라이드 항목 크기 설정
  for (const item of itemElements) {
    item.style.width = `${outerWidth}px`;
  }

  // 전체 inner 리스트 크기 설정
  carouselInner.value.style.width = `${outerWidth * items.length}px`;

  // 현재 위치 업데이트
  updateCarouselPosition();
};

// 슬라이드 위치 이동
const updateCarouselPosition = () => {
  const outerWidth = carouselOuter.value.clientWidth;
  carouselInner.value.style.transform = `translateX(-${
    currentIndex.value * outerWidth
  }px)`;
};

// 좌우 이동 이벤트
const moveLeft = () => {
  currentIndex.value = Math.max(0, currentIndex.value - 1);
  updateCarouselPosition();
};

const moveRight = () => {
  currentIndex.value = Math.min(items.length - 1, currentIndex.value + 1);
  updateCarouselPosition();
};

// 초기화 및 이벤트 리스너 등록
onMounted(() => {
  updateSizes();
  window.addEventListener('resize', updateSizes);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSizes);
});
</script>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.carousel-outer {
  width: 100vw; /* 페이지 가로 크기 전체를 차지 */
  height: 800px; /* 원하는 높이 설정 */
  overflow: hidden;
  position: relative;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
  height: 100%;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000203;
  color: white;
  font-size: 2rem;
  font-weight: bold;
}

.carousel-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}

.button {
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 1rem;
  font-weight: bold;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #555;
}
</style>
