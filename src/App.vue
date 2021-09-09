<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  async mounted() {
    await this.getAllPosts()
    await this.getUser()
  },
  methods: {
    ...mapActions('auth', ['getUser']),
    ...mapActions('admin', ['getAllPosts']),
  },
}
</script>
