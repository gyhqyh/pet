/**
 * Created by Administrator on 2018/1/4.
 */
import axios from 'axios'

export default async function ajax(url=' ', data={}, type='GET') {
  return new Promise(function (resolve, rejeck){
    let promise
    if(type === 'GET') {
      let dataStr=''

      Object.keys(data).forEach(key => {
        dataStr += `${key}=${data[key]}&`

      })
      if(dataStr) {
        dataStr = dataStr.substr(0,dataStr.lastIndexOf('&'))
        url = `${url}?${dataStr}`
      }
      promise = axios.get(url)

    } else {
      promise = axios.post(url, data)
    }
    promise
      .then( response => {
        let data = response.data
        // console.log(data)
        resolve(response.data)
      })
      .catch(err => {
        rejeck('暂时失联，稍后回来')
      })
  })
}
