import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  timeout: 10000, // Thời gian chờ tối đa khi gửi yêu cầu

});

export default instance;
