import { LocalStorage, Cookies } from 'quasar'
import { Platform } from 'quasar'
let user = LocalStorage.getItem('userRole')
localStorage.getItem('token') == null

export default ({ router, app }) => {
  router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
      if (localStorage.getItem('token') == null) {
        next('/')
      } else {
        next()
      }
    } else if (to.matched.some((record) => record.meta.login)) {
      if (localStorage.getItem('token') !== null) {
        next('/admin')
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
