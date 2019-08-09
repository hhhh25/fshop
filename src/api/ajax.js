/**
 * ajax请求函数
 * 返回值：promise对象(异步返回response.data)
 */
import axios from 'axios'
export default function ajax(url = '', data = {}, type = 'GET') {

  return new Promise(function (resolve, reject) {
    //执行异步ajax请求
    let promise
    if (type === 'GET') {
      // 准 备 url query 参 数 数 据 
      let dataStr = '' // 数 据 拼 接 字 符 串 
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发 送 get 请 求 
      promise = axios.get(url)
    } else {
      // 发 送 post 请 求 
      promise = axios.post(url, data)
    }

    promise.then(response => {
      // 成功调用resolve
      resolve(response.data)
    }).catch(error => {
      // 失败调用reject
      reject(error)
    })
  })
}
