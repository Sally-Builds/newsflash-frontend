<template>
  <q-page padding data-aos="fade-in" data-aos-duration="2000">
    <!-- another section -->
    <div class="row">
      <div class="col-12 col-md-6 table q-pa-lg">
        <!-- small screens -->
        <q-card flat bordered square>
          <q-card-section class="col-6 bg-primary">
            <div class="text-center text-white text-h5">Login</div>
            <q-form @submit="submit">
              <div class="q-pa-lg">
                <q-input
                  color="primary"
                  bg-color="grey-4"
                  filled
                  v-model="email"
                  label="E-mail *"
                  type="email"
                  :rules="emailRules"
                  dense
                  lazy-rules
                >
                  <template v-slot:prepend>
                    <q-icon name="mail" />
                  </template>
                </q-input>
              </div>
              <div class="q-pa-lg">
                <q-input
                  v-model="password"
                  :rules="passwordRules"
                  :type="isPwd ? 'password' : 'text'"
                  lazy-rules
                  label="Password *"
                  color="primary"
                  bg-color="grey-4"
                  filled
                  dense
                >
                  <template v-slot:prepend>
                    <q-icon name="mdi-lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'visibility_off' : 'visibility'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
              </div>
              <div class="q-pa-lg text-center">
                <div class="row">
                  <div class="col-12 col-md-12 table q-pa-md q-pt-0">
                    <q-btn
                      outline
                      class="full-width bg-primary text-grey-3"
                      no-caps
                      type="submit"
                      >Login</q-btn
                    >
                  </div>
                </div>
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
      password: '',
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be greater than 8 characters',
      ],
      isPwd: true,
    }
  },
  methods: {
    ...mapActions('auth', ['login']),
    submit() {
      const data = {
        email: this.email,
        password: this.password,
      }
      this.login(data)
    },
    toReg() {
      this.$router.push('/register')
    },
    goTo() {
      this.$router.push('/')
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
