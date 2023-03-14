import axios from 'axios';

const backendUrl = 'http://localhost:8080';

const instance = axios.create({
  baseURL: backendUrl,
  timeout: 10000, // Thời gian chờ tối đa khi gửi yêu cầu

});

export default instance;
