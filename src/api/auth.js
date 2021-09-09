import { api } from 'src/boot/axios'
import { Loading, Notify, Cookies, LocalStorage, QSpinnerBox } from 'quasar'

export const signup = async (data) => {
  return await api({
    method: 'POST',
    url: '/users/signup',
    data,
  })
}

export const login = async (data) => {
  return await api({
    method: 'POST',
    url: '/users/login',
    data,
  })
}

export const verifyEmail = async (data) => {
  return await api({
    method: 'GET',
    url: `/users/emailconfirmation/${data}`,
  })
}

export const logout = async () => {
  return await api({
    method: 'GET',
    url: '/users/logout',
  })
}

export const forgotPassword = async (data) => {
  return await api({
    method: 'POST',
    url: '/users/forgotpassword',
    data,
  })
}

export const resetPassword = async ({ token, password, confirmPassword }) => {
  return await api({
    method: 'PATCH',
    url: `/users/resetpassword/${token}`,
    data: {
      password,
      confirmPassword,
    },
  })
}

export const getUser = async () => {
  let value = LocalStorage.getItem('token')
  if (!value) {
    throw 'err'
    // return 'err'
  }
  const result = await api({
    method: 'GET',
    url: '/users/me',
    headers: {
      Authorization: 'Bearer ' + value,
    },
  })
  return result.data.user
}

export const ResendEmailLink = async (data) => {
  return await api({
    method: 'GET',
    url: `/users/resendlink/${data}`,
  })
}

export default {
  signup,
  getUser,
  login,
  logout,
  forgotPassword,
  resetPassword,
  ResendEmailLink,
  verifyEmail,
}
