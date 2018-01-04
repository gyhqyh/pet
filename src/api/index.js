/**
 * Created by Administrator on 2018/1/4.
 */
import ajax from './ajax'

//得到首页的内容
export function get_home (url, data_obj) {
  return ajax(url, data_obj)
}
