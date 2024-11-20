<template>
  <div class="container">
    <div class="section blue">
      <div class="content">
        <h2>소개</h2>
        <p>페이지 소개</p>
      </div>
    </div>
    <div class="section navy">
      <div class="content">
        <h2>날씨</h2>
        <p>유저가 있는 지역의 날씨를 알 수 있어요</p>
      </div>
    </div>
    <div class="section red">
      <div class="content">
        <h2>여행 계획</h2>
        <p>호텔 정보를 확인하고 <br />여행 계획을 세울 수 있어요</p>
      </div>
    </div>
    <div class="section beige">
      <div class="content">
        <h2>가계부</h2>
        <p>수익과 지출 내역을 작성해 보아요</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100vh;
  width: 100%;
}

.section {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.content {
  text-align: center;
  color: white;
  font-family: Arial, sans-serif;
}

.content h2 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
}

.content p {
  margin: 0;
  margin-top: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* 색상 스타일 */
.blue {
  background-color: #87ceeb; /* 밝은 파란색 */
}

.navy {
  background-color: #1a1a3f; /* 어두운 네이비 */
}

.red {
  background-color: #d28d85; /* 부드러운 붉은색 */
}

.beige {
  background-color: #d2b48c; /* 연한 베이지 */
}
</style>
