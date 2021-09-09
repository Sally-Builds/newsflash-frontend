export function posts(state) {
  return state.posts
}

export function post(state) {
  return state.id
}

export function categories(state) {
  let posts = []
  if (state.category === 'all') {
    posts = state.posts
  } else {
    posts = state.posts.filter((e) => e.tags.toLowerCase() === state.category)
  }
  return posts
}
