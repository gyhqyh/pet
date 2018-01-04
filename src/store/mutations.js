/**
 * Created by Administrator on 2017/12/31.
 */
import {
  GET_HOME
} from './type'
export default {
  [GET_HOME] (state,{result}) {
    state.home = result
  }
}
