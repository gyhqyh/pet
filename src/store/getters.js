/**
 * Created by Administrator on 2017/12/31.
 */
export default {
  show_time (state) {
    return (state.classification.right.cate_list && (state.classification.right.cate_list.length == 1) )? 1 : 2
  }
}
