export function getAllPosts(state, payload) {
  state.posts = payload
}

export function setForEdit(state, payload) {
  state.id = payload
}
export function setCategory(state, payload) {
  state.category = payload
}
