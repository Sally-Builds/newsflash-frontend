<template>
  <q-page padding>
    <div class="row q-pa-lg">
      <div class="col-12 text-h5 text-center">Latest News</div>
      <div class="col-10">
        <q-list padding>
          <q-item v-for="(data, i) in posts" :key="i">
            <q-item-section thumbnail class="q-ml-none q-pa-md">
              <img
                :src="`http://localhost:3000/img/users/${data.photo}`"
                style="height: 170px; width: 300px"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6">{{ data.title }}</q-item-label>
              <q-item-label caption>
                <p class="link" @click="$router.push('/id')">
                  {{ data.preview }}...
                </p>
                <div>Categories: {{ data.tags }}</div>
                <div>
                  <q-btn flat label="preview" @click="preview(data)" />
                  <q-btn flat label="edit" @click="editPost(data)" />
                  <q-btn flat label="Delete" color="red" @click="del(data)" />
                </div>
              </q-item-label>
            </q-item-section>

            <!-- <q-item-section side>
              <q-item-label caption>3 mins ago</q-item-label>
            </q-item-section> -->
          </q-item>
        </q-list>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters('admin', ['posts']),
  },
  methods: {
    ...mapActions('admin', ['edit', 'deletePost']),
    preview(data) {
      this.edit(data)
      this.$router.push(`/admin/posts/${data.slug}`)
    },
    editPost(data) {
      this.edit(data)
      this.$router.push(`/edit/${data.slug}`)
    },
    del(data) {
      this.deletePost(data.slug)
      window.location.reload()
    },
  },
}
</script>

<style></style>
