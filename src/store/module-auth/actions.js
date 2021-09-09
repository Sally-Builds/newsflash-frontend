import api from 'src/api/auth'
import { Loading, Notify, Cookies, LocalStorage, QSpinnerGrid } from 'quasar'

//signup function
export async function signup({ dispatch }, data) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'teal' })
    const result = await api.signup(data)
    Notify.create({
      message: 'Successful, Please verify your email and Login',
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    this.$router.replace('/login')
    Loading.hide()
  } catch (e) {
    Loading.hide()
    if (e.response) {
      Notify.create({
        message: e.response.data.message,
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    } else {
      Notify.create({
        message: 'Something went wrong.',
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    }
  }
}

//email verification function
export async function verifyEmail({ commit }, data) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'teal' })
    const result = await api.verifyEmail(data)
    Loading.hide()
    commit('verifyEmail', 'successful')
  } catch (e) {
    Loading.hide()
    commit('verifyEmail', 'error')
  }
}

//login function
export async function login({ dispatch }, data) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'teal' })
    const result = await api.login(data)
    LocalStorage.set('token', result.data.token)
    LocalStorage.set('userRole', result.data.data.user.role)
    dispatch('getUser')
    Notify.create({
      message: 'successful',
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    this.$router.replace('/admin')
  } catch (e) {
    console.log(e)
    Loading.hide()
    if (e.response) {
      Notify.create({
        message: e.response.data.message,
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    } else {
      Notify.create({
        message: 'Something went wrong.',
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    }
  }
}

//logout user function
export async function logout({ commit }) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'teal' })
    await api.logout()
    LocalStorage.remove('token')
    LocalStorage.remove('userRole')
    this.$router.replace('/')
    commit('setUser', { user: null, isLoggedIn: false })
    Loading.hide()
  } catch (e) {
    Loading.hide()
    if (e.response) {
      Notify.create({
        message: e.response.data.message,
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    } else {
      Notify.create({
        message: 'Something went wrong.',
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    }
  }
}

//forgot password function
export async function forgotPassword({}, payload) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'teal' })
    const res = await api.forgotPassword(payload)
    Loading.hide()
    Notify.create({
      message: res.data.message,
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    this.$router.push('/login')
  } catch (e) {
    Loading.hide()
    if (e.response) {
      Notify.create({
        message: e.response.data.message,
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    } else {
      Notify.create({
        message: 'Something went wrong.',
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    }
  }
}

//reset password function
export async function resetPassword({ dispatch }, payload) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'teal' })
    const result = await api.resetPassword(payload)
    LocalStorage.set('token', result.data.token)
    LocalStorage.set('userRole', result.data.data.user.role)
    dispatch('getUser')
    Notify.create({
      message: 'Password reset successful.',
      icon: 'check',
      color: 'teal',
      textColor: 'white',
      position: 'top',
    })
    if (result.data.data.user.role === 'user') {
      this.$router.replace('/dashboard')
    } else {
      this.$router.replace('/admin/dashboard')
    }
  } catch (e) {
    Loading.hide()
    if (e.response) {
      Notify.create({
        message: e.response.data.message,
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    } else {
      Notify.create({
        message: 'Something went wrong.',
        icon: 'warning',
        color: 'negative',
        textColor: 'white',
        position: 'top',
      })
    }
  }
}

//get user function
export async function getUser({ commit }) {
  try {
    Loading.show({ spinner: QSpinnerGrid, spinnerColor: 'primary' })
    const user = await api.getUser()
    commit('setUser', { user, isLoggedIn: true })
    Loading.hide()
  } catch (e) {
    Loading.hide()
    LocalStorage.remove('token')
    LocalStorage.remove('userRole')
    commit('setUser', { user: null, isLoggedIn: false })
    // this.$router.push('/')
  }
}
