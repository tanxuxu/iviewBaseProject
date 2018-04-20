import axios from "axios";
import config from "../config/config";

// axios全局配置
axios.defaults.baseURL = (config.env === 'production') ? window.g.path : config.baseURL;
axios.defaults.timeout = config.timeout;
//封装请求方法
const http = {
  /*
  post请求
  @params: 请求目标    参数
  */
  post: function(target, params = {}) {
    let _this = this;
    return new Promise(function(resolve, reject) {
        axios({
          url: target,
          method: 'post',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: JSON.stringify(params)
        }).then(res => {
          resolve(res.data);
        }).catch((error) => {
          reject(error);
        });
    });
  },
  /*
  get请求
  @params: 请求目标    参数
  */
  get: function(target, params = {}) {
    let _this = this;
    return new Promise(function(resolve, reject) {
        axios({
          url: target,
          method: 'get',
          params: params
        }).then(res => {
          resolve(res.data);
        }).catch((error) => {
          reject(error);
        });
    });
  }
}
export default http;
