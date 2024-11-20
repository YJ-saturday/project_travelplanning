// openweathermap, https://openweathermap.org ›
import axios from 'axios';

export async function fetchweather() {
  try {
    const response = await instance.get(
      'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=195ca0b1e91b5ed9e20ca3e94117a4b2'
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather list:', error);
    throw error; // 오류 발생 시 오류를 던져줌
  }
}
console.log(fetchweather);

// 여기서 현 위치의 위도 경도
https://developer.mozilla.org/ko/docs/Web/API/Geolocation_API