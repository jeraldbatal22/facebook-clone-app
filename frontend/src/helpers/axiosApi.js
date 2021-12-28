import axios from 'axios'
import { get, USER } from './storage'

const url = 'http://localhost:4001/api'
export const getRequest = (endpoint, config = false) => {
  let header = {}
  if (config) {
    header = {
      headers: {
        'accept': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${get(USER).token}`
      }
    };
  }
  const result = axios.get(`${url}/${endpoint}`, header).then((res) => {
    return res.data
  })
  return result
}

export const postRequest = (endpoint, data = {}, config = false) => {
  let header = {}
  if (config) {
    header = {
      headers: {
        'accept': 'application/json',
        // 'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${get(USER).token}`
      }
    };
  }

  const result = axios.post(`${url}/${endpoint}`, data, header).then((res) => {
    return res.data
  })
  return result
}