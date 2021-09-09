<template>
  <q-page padding v-if="post">
    <q-form
      autocorrect="on"
      autocapitalize="on"
      autocomplete="on"
      spellcheck="true"
      @submit.prevent="submit"
      v-if="post"
    >
      <div class="row q-pa-lg">
        <div class="col-12 text-center text-h5 text-grey-9 q-pa-lg">
          Edit New Feed
        </div>
        <div class="col-6 q-pa-lg">
          <q-input filled v-model="title" label="News Title" :rules="rules" />
        </div>
        <div class="col-6 q-pa-lg">
          <q-input
            filled
            v-model="preview"
            label="News Preview"
            :rules="rules"
          />
        </div>
        <div class="col-6 q-pa-lg">
          <q-select
            filled
            multiple
            v-model="category"
            :options="options"
            label="Category"
            :rules="rules"
          />
        </div>
      </div>
      <div class="row q-pa-lg">
        <div class="col-12 text-center text-h6 text-grey-9">Write</div>
        <div class="col-12 q-pa-lg">
          <q-editor
            v-model="qeditor"
            :dense="$q.screen.lt.md"
            max-height="90vh"
            :rules="rules"
            :toolbar="[
              [
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  list: 'only-icons',
                  options: ['left', 'center', 'right', 'justify'],
                },
                {
                  label: $q.lang.editor.align,
                  icon: $q.iconSet.editor.align,
                  fixedLabel: true,
                  options: ['left', 'center', 'right', 'justify'],
                },
              ],
              [
                'bold',
                'italic',
                'strike',
                'underline',
                'subscript',
                'superscript',
              ],
              ['token', 'hr', 'link', 'custom_btn'],
              ['print', 'fullscreen'],
              [
                {
                  label: $q.lang.editor.formatting,
                  icon: $q.iconSet.editor.formatting,
                  list: 'no-icons',
                  options: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'code'],
                },
                {
                  label: $q.lang.editor.fontSize,
                  icon: $q.iconSet.editor.fontSize,
                  fixedLabel: true,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'size-1',
                    'size-2',
                    'size-3',
                    'size-4',
                    'size-5',
                    'size-6',
                    'size-7',
                  ],
                },
                {
                  label: $q.lang.editor.defaultFont,
                  icon: $q.iconSet.editor.font,
                  fixedIcon: true,
                  list: 'no-icons',
                  options: [
                    'default_font',
                    'arial',
                    'arial_black',
                    'comic_sans',
                    'courier_new',
                    'impact',
                    'lucida_grande',
                    'times_new_roman',
                    'verdana',
                  ],
                },
                'removeFormat',
              ],
              ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

              ['undo', 'redo'],
              ['viewsource'],
            ]"
            :fonts="{
              arial: 'Arial',
              arial_black: 'Arial Black',
              comic_sans: 'Comic Sans MS',
              courier_new: 'Courier New',
              impact: 'Impact',
              lucida_grande: 'Lucida Grande',
              times_new_roman: 'Times New Roman',
              verdana: 'Verdana',
            }"
          />
        </div>
        <div class="col-12 text-center">
          <q-btn label="save" flat type="submit" />
          <q-btn label="delete" flat @click="del()" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      title: '',
      preview: '',
      category: null,
      qeditor: '',
      image: null,
      options: [
        'Sport',
        'Politics',
        'Entertainment',
        'Technology',
        'Art',
        'Business',
        'Fashion',
        'Education',
      ],
      rules: [(v) => !!v || 'required'],
    }
  },
  mounted() {
    console.log(this.$route.params.id)
    if (this.post) {
      this.title = this.post.title
      this.preview = this.post.preview
      this.category = this.post.tags
      this.qeditor = this.post.post
    } else {
      this.getPost(this.$route.params.id).then(() => {
        this.title = this.post.title
        this.preview = this.post.preview
        this.category = this.post.tags
        this.qeditor = this.post.post
      })
    }
  },
  computed: {
    ...mapGetters('admin', ['post']),
  },
  methods: {
    ...mapActions('admin', ['updatePost', 'deletePost', 'getPost']),
    submit() {
      let data = {}
      data.title = this.title
      data.preview = this.preview
      data.tags = this.category
      data.post = this.qeditor
      this.updatePost({ data, id: this.post.slug })
    },
    del() {
      this.deletePost(this.$route.params.id)
      this.$router.push('/admin')
    },
  },
}
</script>

<style></style>
