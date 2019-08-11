import request from './request'
import { ENDPOINTS } from 'config'

const getEndpoint = (num) => {
  return request({
    url:    `${ENDPOINTS.GET_ENDPOINT}/${num}`,
    method: 'GET'
  });
}
const APIService = {
  getEndpoint 
}

export default APIService;
