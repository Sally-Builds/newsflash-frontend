export function getUser(state) {
  let user = {}
  if (state.user) {
    user = state.user
  }
  return user
}

export function emailVerifyStatus(state) {
  return state.emailVerifyStatus
}
