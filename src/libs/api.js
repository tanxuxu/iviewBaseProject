import http from './http.js';

const api = {
  //获取妹子
  getMeizi: function(params={}){
    return http.get('http://gank.io/api/data/%E7%A6%8F%E5%88%A9/10/1');
  }
}


export default api;
