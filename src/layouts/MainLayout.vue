<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title> NewsFlash </q-toolbar-title>
      </q-toolbar>
      <q-toolbar>
        <q-space />
        <q-btn
          flat
          :label="data.name"
          v-for="(data, i) in links"
          :key="i"
          @click="goTo(data.link)"
          no-caps
        />
        <q-space />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      right: false,
      links: [
        { name: 'Home', link: 'home' },
        { name: 'Sport', link: 'sport' },
        { name: 'Politics', link: 'politics' },
        { name: 'Technology', link: 'technology' },
        { name: 'Entertainment', link: 'entertainment' },
        { name: 'Art', link: 'art' },
        { name: 'Fashion', link: 'fashion' },
        { name: 'Education', link: 'education' },
      ],
    }
  },
  methods: {
    ...mapActions('admin', ['setCategory']),
    goTo(name) {
      if (name === 'home') {
        this.setCategory('all')
        this.$router.push('/')
      } else {
        this.setCategory(name)
        this.$router.push(`/news_feeds/${name}`)
      }
    },
  },
}
</script>

<style>
.table {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
