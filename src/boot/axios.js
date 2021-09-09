import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

const api = axios.create({
  baseURL: 'api/v1',
})
Vue.prototype.$api = api
export { api }
