<template>
  <q-page padding data-aos="fade-in">
    <div class="row q-pa-lg" v-if="getUser != {}">
      <div class="col-12 q-pa-md text-center text-h6 headings">
        Account Details
      </div>
      <div class="col-12">
        <q-separator />
      </div>
      <q-form @submit="userUpdate" class="col-12">
        <div class="row">
          <div class="col-12 col-md-6 q-pa-md">
            <q-input
              v-model="name"
              type="text"
              label="Name"
              lazy-rules
              filled
              bg-color="white"
            />
          </div>
          <div class="col-md-6 col-12 q-pa-md">
            <q-input
              v-model="email"
              filled
              bg-color="white"
              type="email"
              label="email"
              lazy-rules
            />
          </div>
          <div class="col-12 q-pa-md text-center">
            <q-btn outline class="text-blue" no-caps type="submit"
              >Update</q-btn
            >
          </div>
        </div>
      </q-form>
    </div>
    <div class="row q-pa-lg">
      <div class="col-12 q-pa-md text-center text-h6 headings">
        Change Password
      </div>
      <div class="col-12">
        <q-separator />
      </div>
      <q-form class="col-12" @submit="passwordChange">
        <div class="row">
          <div class="col-md-4 col-12 q-pa-md">
            <q-input
              v-model="currentPassword"
              :rules="passwordRules"
              :type="isCurPwd ? 'password' : 'text'"
              label="Current Password *"
              dense
              filled
              bg-color="white"
            >
              <template v-slot:append>
                <q-icon
                  :name="isCurPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isCurPwd = !isCurPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="col-md-4 col-12 q-pa-md">
            <q-input
              v-model="password"
              :rules="passwordRules"
              :type="isPwd ? 'password' : 'text'"
              label="password *"
              dense
              bg-color="white"
              filled
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="col-md-4 col-12 q-pa-md">
            <q-input
              v-model="confirmPassword"
              :rules="confirmPasswordRules"
              :type="isConPwd ? 'password' : 'text'"
              label="confirm password *"
              dense
              filled
              bg-color="white"
            >
              <template v-slot:append>
                <q-icon
                  :name="isConPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isConPwd = !isConPwd"
                />
              </template>
            </q-input>
          </div>
          <div class="col-12 q-pa-md text-center">
            <q-btn outline class="text-blue" no-caps type="submit"
              >Change password</q-btn
            >
          </div>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  meta: {
    title: `Account Settings | \u00D3felos`,
  },
  data() {
    return {
      name: '',
      username: '',
      email: '',
      currentPassword: '',
      confirmPassword: '',
      password: '',
      isPwd: true,
      isConPwd: true,
      isCurPwd: true,
      passwordRules: [
        (v) => !!v || 'Password is required',
        (v) => v.length >= 8 || 'Password must be greater than 8 characters',
      ],
      confirmPasswordRules: [
        (v) => !!v || 'Confirm Password',
        (v) => v === this.password || 'Password does not match',
      ],
    }
  },
  computed: {
    ...mapGetters('auth', ['getUser']),
  },
  async mounted() {
    this.name = this.getUser.name
    this.email = this.getUser.email
    this.username = this.getUser.username
  },
  methods: {
    ...mapActions('user', ['updateUser', 'changePassword']),
    userUpdate() {
      const data = {
        name: this.name,
        email: this.email,
        username: this.username,
      }
      this.updateUser(data)
    },
    passwordChange() {
      const data = {
        password: this.password,
        currentPassword: this.currentPassword,
        confirmPassword: this.confirmPassword,
      }
      this.changePassword(data)
    },
  },
}
</script>

<style></style>
