import axios from 'axios';

const apiURL = process.env.REACT_APP_API_BASE_URL;
console.log("api backend url" , apiURL)

const instance = axios.create({
  baseURL: apiURL,
  timeout: 10000, // Thời gian chờ tối đa khi gửi yêu cầu

});



export default instance;
