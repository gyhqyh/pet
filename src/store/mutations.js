/**
 * Created by Administrator on 2017/12/31.
 */
import {
  GET_HOME,
  UPDATE_CENTER_ROUTE
} from './type'
export default {
  [GET_HOME] (state,{result}) {
    state.home = result
  },
  [UPDATE_CENTER_ROUTE] (state, {data}) {
    state.back_route_path = data
  }
}
