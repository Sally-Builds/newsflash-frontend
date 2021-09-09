import api from '../../api/admin'
import { Loading, Notify, Cookies, LocalStorage, QSpinnerGrid } from 'quasar'

export async function createPost({ commit }, payload) {
  try {
    console.log(payload)
    const result = await api.createPost(payload)
    Notify.create({
      message: 'Succesfuly created',
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    window.location.reload()
  } catch (e) {
    console.log(e.response)
  }
}

export async function getAllPosts({ commit }) {
  try {
    const result = await api.getAllPosts()
    console.log(result.data.data.blogs)
    commit('getAllPosts', result.data.data.blogs)
  } catch (e) {
    console.log(e.response)
  }
}

export async function getPost({ commit, dispatch }, payload) {
  try {
    const result = await api.getPost(payload)
    dispatch('edit', result.data.data.blog)
  } catch (e) {
    console.log(e.response)
  }
}

export async function updatePost({ commit, dispatch }, payload) {
  try {
    console.log(payload)
    const result = await api.updatePost(payload)
    Notify.create({
      message: 'Succesful',
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    dispatch('getAllPosts')
    this.$router.push('/admin')
  } catch (e) {
    console.log(e.response)
  }
}

export async function deletePost({ commit, dispatch }, payload) {
  try {
    console.log(payload)
    const result = await api.deletePost(payload)
    Notify.create({
      message: 'Deleted',
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    dispatch('getAllPosts')
    this.$router.push('/admin')
  } catch (e) {
    console.log(e.response)
  }
}

export async function edit({ commit }, payload) {
  commit('setForEdit', payload)
}

export async function setCategory({ commit }, payload) {
  commit('setCategory', payload)
}
