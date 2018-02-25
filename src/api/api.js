import { wxRequest } from './wxRequest'

const URL = 'https://www.easy-mock.com/mock/5a902cb6aad80a47eaa237f6/example'

// index
export const getIndex = () => {
  let obj = {}
  return wxRequest(obj, `${URL}/index`)
}

// 商品详情
export const getCommodity = (id) => {
  let obj = {}
  return wxRequest(obj, `${URL}/details`)
}

// 选择商品
export const getChoice = (id) => {
  let obj = {}
  return wxRequest(obj, `${URL}/details-choice`)
}
