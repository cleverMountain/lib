
import axios from "axios";
import qs from "qs";

// 设置axios为form-data
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.get["Content-Type"] =
  "application/x-www-form-urlencoded";

axios.defaults.baseURL = 'http://192.168.4.118:7041';
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers["Authorization"] = "Bearer " + token;
}


axios.defaults.transformRequest = function (data) {

  let res = qs.stringify(data, { arrayFormat: 'indices', allowDots: true })
console.log(res)
  return res
};
axios.defaults.timeout = 60000;

// 添加请求拦截器
axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);


export default axios;
