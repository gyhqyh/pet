/**
 * Created by Administrator on 2017/12/31.
 */
import {
  GET_HOME,
  UPDATE_CENTER_ROUTE,
  GET_CLASSIFI,
  UPDATE,
  JULI,
  GET_CITY,
  SELECT_CHENG,
  SELECT_XIAN,
  SELECT_DI
} from './type'
export default {
  [GET_HOME] (state,{result}) {
    state.home = result
  },
  [UPDATE_CENTER_ROUTE] (state, {data}) {
    state.back_route_path = data
  },
  [GET_CLASSIFI] (state, {result}) {
    state.classification.left = result
  },
  [UPDATE] (state, {result}) {
    state.classification.right = result
  },
  [JULI] (state, {result}) {
    state.hme_dingshi = result
  },
  [GET_CITY] (state, {result}) {
    state.sanji = result
  },
  [SELECT_CHENG] (state, {result}) {
    state.select_sheng = result
  },
  [SELECT_DI] (state, {result}) {
    state.select_di = result
    state.select_sheng = ''
  },
  [SELECT_XIAN] (state, {result}) {
    state.select_xian = result
    state.select_di = ''
  },
}
