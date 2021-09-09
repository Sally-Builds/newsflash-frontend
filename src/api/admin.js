import { api } from 'src/boot/axios'
import { LocalStorage } from 'quasar'

export const createPost = async (payload) => {
  //   let value = LocalStorage.getItem('token')
  //   if (!value) {
  //     throw 'error'
  //   }
  return await api({
    method: 'POST',
    url: '/blogs',
    data: payload,
    // headers: {
    //   Authorization: 'Bearer ' + value,
    // },
  })
}

export const getAllPosts = async () => {
  // let value = LocalStorage.getItem('token')
  // if (!value) {
  //   throw 'error'
  // }
  return await api({
    method: 'GET',
    url: '/blogs',
    // headers: {
    //   Authorization: 'Bearer ' + value,
    // },
  })
}

export const getPost = async (payload) => {
  // let value = LocalStorage.getItem('token')
  // if (!value) {
  //   throw 'error'
  // }
  return await api({
    method: 'GET',
    url: `/blogs/${payload}`,
    // headers: {
    //   Authorization: 'Bearer ' + value,
    // },
  })
}

export const updatePost = async ({ data, id }) => {
  // let value = LocalStorage.getItem('token')
  // if (!value) {
  //   throw 'error'
  // }
  return await api({
    method: 'PATCH',
    url: `/blogs/${id}`,
    data,
    // headers: {
    //   Authorization: 'Bearer ' + value,
    // },
  })
}

export const deletePost = async (payload) => {
  // let value = LocalStorage.getItem('token')
  // if (!value) {
  //   throw 'error'
  // }
  return await api({
    method: 'DELETE',
    url: `/blogs/${payload}`,
    // headers: {
    //   Authorization: 'Bearer ' + value,
    // },
  })
}

export default {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
}
