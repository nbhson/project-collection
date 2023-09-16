<template>
  <v-toolbar class="pa-3" color="white" style="position: absolute; top: 0; width: 100%">
    <div class="d-flex justify-center" style="flex: 1">
      <!-- <img src="src/assets/cyborg.png" alt="" width="45" /> -->
      <div class="d-flex align-center">
        <v-toolbar-title>
          <router-link class="text-decoration-none text-black text-h5" to="/">Cyborg</router-link>
        </v-toolbar-title>
      </div>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex justify-center" style="flex: 1">
      <div v-if="!authentication" class="d-flex navbar-nav">
        <v-btn
          class="text-decoration-none text-black mr-8"
          v-bind="path === '/sign-in' ? active : {}"
          size="large"
          to="/sign-in"
        >
          Sign in
        </v-btn>

        <v-btn
          class="text-decoration-none text-black"
          size="large"
          to="/sign-up"
          v-bind="path === '/sign-up' ? active : {}"
        >
          Sign up
        </v-btn>
      </div>
      <temple v-else class="d-flex navbar-nav">
        <v-btn color="error" variant="outlined" size="large" @click="submit()">
          Logout
          <!-- <v-icon>mdi-export</v-icon> -->
        </v-btn>
      </temple>
    </div>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapGetters, useStore } from 'vuex';
import { useCookies } from 'vue3-cookies';
import { logoutApi } from '../api/auth';
import { useToast } from 'vue-toastification';
import { SERVER_ERROR } from '../utils/constants/commons';
import { useRouter } from 'vue-router';
import { setLoginStatusApi } from '../api/user';
import mitt from 'mitt';

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    const toast = useToast();
    const router = useRouter();
    const { cookies } = useCookies();
    const emitter = mitt();
    return {
      cookies,
      toast,
      router,
      emitter,
    };
  },
  data() {
    return {
      store: useStore(),
      active: {
        variant: 'outlined',
        color: 'primary',
      },
      path: '',
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      (toParams: any, previousParams: any) => {
        this.path = this.$route.path;
        this.store.dispatch('setFormLoading', false);
        this.store.dispatch('setErrMsg', '');
      },
    );
  },
  computed: {
    ...mapGetters(['user', 'authentication']),
  },
  methods: {
    submit() {
      const store = this.store;
      const cookies = this.cookies;
      const toast = this.toast;
      const router = this.router;

      setLoginStatusApi(false, store.getters.user._id)
        .then(function () {
          return logoutApi();
        })
        .then(function (success) {
          cookies.remove('jwt');
          store.dispatch('resetAuth');
          // store.dispatch('removeMsg');
          toast.success('Logout successfully!');
          store.dispatch('setIsUpdate', false);
          router.push('/sign-in');
        })
        .catch(function () {
          toast.error(SERVER_ERROR);
        });
    },
  },
});
</script>
