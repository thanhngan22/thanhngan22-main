import axios from 'axios';


const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL_LOCAL,
  timeout: 10000, // Thời gian chờ tối đa khi gửi yêu cầu

});

export default instance;
