/**
 * Created by Administrator on 2017/12/31.
 */
import {
  get_home
} from '../api/index'

import {
  GET_HOME
} from './type'
export default {
  async get_home ({commit}, data) {
    const result = await get_home(data.url, data.data)
    console.log(result, 'actions')
    commit(GET_HOME, {result})
  }
}
