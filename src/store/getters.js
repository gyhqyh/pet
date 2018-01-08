/**
 * Created by Administrator on 2017/12/31.
 */
export default {
  show_time (state) {
    return (state.classification.right.cate_list && (state.classification.right.cate_list.length == 1) )? 1 : 2
  },
  get_sheng (state) {
    let arr = []
    console.log(1)
    arr = state.sanji.filter((item,index) => {
      return item.di == '00' && item.xian == '00'
    })
    return arr
  },
  get_di (state) {
    let arr = []
    let sheng = state.select_sheng
    console.log(123121212121)
    /*if(!sheng) {
      return
    }*/
    arr = state.sanji.filter((item, index) => {
      return item.sheng == sheng && item.level == 2
      // debugger
    })
    return arr
  },
  get_xian (state) {
    let arr = []
    let di = state.select_di
    arr = state.sanji.filter((item, index) => {
      return item.di == di && item.level == 3
    })
    return arr
  }
}
