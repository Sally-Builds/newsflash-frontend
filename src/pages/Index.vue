<template>
  <q-page padding>
    <div class="row q-pa-lg">
      <div class="col-12 text-h5 text-center">Latest News</div>
      <div class="col-10">
        <q-list padding>
          <q-item v-for="(post, i) in posts" :key="i">
            <q-item-section thumbnail class="q-ml-none q-pa-md">
              <img
                :src="`http://localhost:3000/img/users/${post.photo}`"
                style="height: 170px; width: 300px"
              />
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-h6">{{ post.title }}</q-item-label>
              <q-item-label caption>
                <p class="link" @click="preview(post)">{{ post.preview }}...</p>
                <div>Categories: {{ post.tags }}</div>
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
    ...mapActions('admin', ['edit']),
    preview(data) {
      this.edit(data)
      this.$router.push(`/posts/${data.slug}`)
    },
  },
}
</script>

<style scoped>
.link:hover {
  text-decoration: underline;
  color: blueviolet;
  cursor: pointer;
}
</style>
