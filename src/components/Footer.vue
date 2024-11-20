<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h4>회사 정보</h4>
        <p>주소: 서울특별시 강남구</p>
        <p>전화: 02-1234-5678</p>
        <p>이메일: contact@example.com</p>
      </div>
      <div class="footer-section">
        <h4>빠른 링크</h4>
        <ul>
          <li><a href="#">홈</a></li>
          <li><a href="#">서비스</a></li>
          <li><a href="#">문의하기</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>팔로우 하기</h4>
        <div class="social-links">
          <a href="#">페이스북</a>
          <a href="#">트위터</a>
          <a href="#">인스타그램</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 MyWebsite. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-section {
  flex: 1;
  margin: 10px;
  min-width: 200px;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 18px;
  text-transform: uppercase;
  color: #f4c10f;
}

.footer-section p,
.footer-section ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #f4c10f;
}

.social-links a {
  color: #ccc;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #f4c10f;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 14px;
  color: #aaa;
}
</style>
