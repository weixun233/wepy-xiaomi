import wepy from 'wepy'
import tip from 'utils/tip'
import {getTurnJSON} from 'utils/utils'

export const wxRequest = async(params = {}, url) => {
  tip.loading()
  let data = params.query || {}
  let res = await wepy.request({
    url,
    data,
    method: params.method || 'GET',
    header: {
      'content-type': 'application/json' // 默认值
    }
  })
  res = getTurnJSON(res)
  console.log(res)
  if (res.code === 0) {
    tip.loadend()
    return res
  }
}
