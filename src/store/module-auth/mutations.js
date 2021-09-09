//set user
export function setUser(state, { user, isLoggedIn }) {
  state.user = user
  state.isLoggedIn = isLoggedIn
}

export function verifyEmail(state, payload) {
  state.emailVerifyStatus = payload
}
