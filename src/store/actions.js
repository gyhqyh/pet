/**
 * Created by Administrator on 2017/12/31.
 */
import {
  get_home,
  get_classifi,
  update,
  juli
} from '../api/index'

import {
  GET_HOME,
  UPDATE_CENTER_ROUTE,
  GET_CLASSIFI,
  UPDATE,
  JULI
} from './type'
export default {
  async get_home ({commit}, data) {
    const result = await get_home(data.url, data.data)
    // console.log(result, 'actions')
    commit(GET_HOME, {result})
  },
  update_center_route ({commit}, data) {
    commit(UPDATE_CENTER_ROUTE, {data})
  },
  async get_classifi ({commit}, data) {
    const result = await get_classifi(data.url, data.data)
    commit(GET_CLASSIFI, {result})
  },
  async update ({commit}, data) {
    const result = await update(data.url, data.data)
    commit(UPDATE, {result})
  },
  async juli ({commit}, data) {
    const result = await juli(data.url, data.data)
    commit(JULI, {result})
    data.cb && data.cb()
  }
}
