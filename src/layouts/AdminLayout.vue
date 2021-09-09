<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-3">
    <q-header class="bg-white text-grey-9">
      <q-toolbar>
        <q-toolbar-title> NewsFlash Admin </q-toolbar-title>
      </q-toolbar>
      <q-toolbar>
        <q-space />
        <q-btn flat label="Home" to="/admin" />
        <q-btn flat label="New" to="/new" v-if="isLoggedIn" />
        <q-btn flat label="Profile" to="/settings" v-if="isLoggedIn" />
        <q-btn flat label="Logout" v-if="isLoggedIn" @click="logout" />
        <q-space />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      right: false,
    }
  },
  computed: {
    ...mapState('auth', ['isLoggedIn']),
  },
  methods: {
    ...mapActions('auth', ['logout']),
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
