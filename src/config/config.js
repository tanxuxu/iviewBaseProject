import Env from './env';

let config = {
    env: Env,
    timeout: 6000,   //请求超时设置
    baseURL: 'https://api.example.com'    //在global中配置baseUrl会替换掉该值
};
export default config;
