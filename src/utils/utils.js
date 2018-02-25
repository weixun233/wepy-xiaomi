// 处理字符串形式的数据，转化为JSON格式
export function getTurnJSON(string) {
  let ret = string.data

  if (typeof ret === 'string') {
    let index = ret.search(/{/)
    let len = ret.lastIndexOf('}') + 1
    let matches = ret.substring(index, len)
    if (matches) {
      ret = JSON.parse(matches)
    }
  }
  return ret
}

// 返回min~max之间的随机整数
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
