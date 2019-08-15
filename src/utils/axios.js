// 引入模块
import axios from "axios"
import qs from 'qs'
 
// 是否允许跨域
axios.defaults.withCredentials=false;
 
// axios初始化：延迟时间，主路由地址
let instance = axios.create({
  baseURL: 'http://adminapi.bzffs.cc',
  timeout: 10000,
});
 
// 设置拦截器
instance.interceptors.request.use(function(config){
  //在发送请求之前做某事
  return config;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});
//响应拦截器
instance.interceptors.response.use(function(response){
  //对响应数据做些事
  return response;
},function(error){
  //请求错误时做些事
  return Promise.reject(error);
});
 
// 是否销毁拦截器
// 1.给拦截器起个名称 var myInterceptors = instance.interceptors.requesst.use();
// 2.instance.interceptors.request.eject(myInterceptor);
 
// 请求成功的回调
function checkStatus(res) {
  //请求结束成功
  if (res.status === 200 || res.status === 304) {
    return res.data
  }
  return {
    code: 0,
    msg: res.data.msg || res.statusText,
    data: res.statusText
  }
  return res
}
// 请求失败的回调
function checkCode(res) {
  if (res.code === 0) {
    throw new Error(res.msg)
  }
  return res
}
//模块化导出
export default {
  get(url, params) {
    if (!url) return;
    return instance({
      method: 'get',
      url: url,
      params,
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  post(url, data) {
    if (!url) return;
    return instance({
      method: 'post',
      url: url,
      data: qs.stringify(data),
      timeout: 30000
    }).then(checkStatus).then(checkCode)
  },
  postFile(url, data) {
    if (!url) return;
    return instance({
      method: 'post',
      url: url,
      data
    }).then(checkStatus).then(checkCode)
  }
}