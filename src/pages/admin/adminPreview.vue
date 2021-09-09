<template>
  <q-page padding v-if="post">
    <div class="row q-pa-lg" style="height: 90vh">
      <div class="col-8 q-pa-lg table">
        <q-carousel animated v-model="slide" infinite height="80vh">
          <q-carousel-slide
            :name="1"
            :img-src="`http://localhost:3000/img/users/${post.photo}`"
          />
        </q-carousel>
      </div>
    </div>

    <div class="row q-pa-lg">
      <div class="col-12 text-h5 text-center">{{ post.title }}</div>
      <div class="col-12 q-pa-lg">
        <div v-html="post.post"></div>
      </div>
      <div class="col-12 text-center">
        <q-btn label="Edit" flat @click="editPost(post)" />
        <q-btn label="Delete" color="red" flat />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      slide: 1,
    }
  },
  mounted() {
    this.getPost(this.$route.params.id)
  },
  computed: {
    ...mapGetters('admin', ['post']),
  },
  methods: {
    ...mapActions('admin', ['edit', 'getPost']),
    editPost(data) {
      this.edit(data)
      this.$router.push(`/edit/${data.slug}`)
    },
  },
}
</script>

<style></style>
