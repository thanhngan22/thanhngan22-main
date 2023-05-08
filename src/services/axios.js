import axios from 'axios';


const instance = axios.create({
  baseURL: 'localhost:3001',
  timeout: 10000, // Thời gian chờ tối đa khi gửi yêu cầu

});

export default instance;
