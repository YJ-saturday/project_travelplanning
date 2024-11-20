<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>환영합니다!</h1>
        <p>
          우리 홈페이지는 최고의 서비스를 제공합니다. 함께 새로운 가능성을
          만들어가요.
        </p>
        <button class="cta-button">더 알아보기</button>
      </div>
      <div class="hero-image">
        <img src="https://via.placeholder.com/600x400" alt="Hero Image" />
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <h2>우리의 이야기</h2>
      <p>
        우리 회사는 고객에게 최고의 가치를 제공하기 위해 노력합니다. 우리는
        끊임없는 혁신과 협력을 통해 여러분과 함께 더 나은 세상을 만들어갑니다.
      </p>
    </section>

    <!-- Features Section -->
    <section class="features">
      <h2>우리가 제공하는 것</h2>
      <div class="features-list">
        <div class="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 1" />
          <h3>뛰어난 품질</h3>
          <p>항상 최고의 품질을 보장합니다.</p>
        </div>
        <div class="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 2" />
          <h3>고객 만족</h3>
          <p>고객의 행복이 우리의 목표입니다.</p>
        </div>
        <div class="feature-item">
          <img src="https://via.placeholder.com/100" alt="Feature 3" />
          <h3>신뢰와 정직</h3>
          <p>항상 신뢰할 수 있는 서비스를 제공합니다.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
/* 기본 스타일 */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  line-height: 1.6;
}

.home {
  text-align: center;
  padding: 20px;
}

/* Hero 섹션 스타일 */
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: white;
}

.hero-content {
  flex: 1;
  max-width: 500px;
  margin: 20px;
}

.hero-content h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero-content p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.cta-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #2575fc;
  background: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;
}

.cta-button:hover {
  background: #ddd;
}

.hero-image {
  flex: 1;
  max-width: 600px;
  margin: 20px;
}

.hero-image img {
  width: 100%;
  border-radius: 10px;
}

/* About 섹션 스타일 */
.about {
  padding: 50px 20px;
  background: #f9f9f9;
}

.about h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.about p {
  font-size: 1.2rem;
  color: #555;
}

/* Features 섹션 스타일 */
.features {
  padding: 50px 20px;
}

.features h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.features-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.feature-item {
  flex: 1;
  max-width: 300px;
  margin: 20px;
  text-align: center;
}

.feature-item img {
  width: 100px;
  margin-bottom: 20px;
}

.feature-item h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.feature-item p {
  color: #555;
}
</style>
