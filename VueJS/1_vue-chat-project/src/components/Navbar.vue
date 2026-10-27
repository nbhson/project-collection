<template>
  <v-toolbar class="pa-3 navbar-ds" style="position: absolute; top: 0; width: 100%">
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

    <v-btn icon class="ml-4" variant="text" @click="toggleTheme()">
      <v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
    </v-btn>
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
import { useTheme } from 'vuetify';
import mitt from 'mitt';

export default defineComponent({
  name: 'NavbarComponent',
  setup() {
    const toast = useToast();
    const router = useRouter();
    const { cookies } = useCookies();
    const emitter = mitt();
    const theme = useTheme();
    return {
      cookies,
      toast,
      router,
      emitter,
      theme,
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
    isDark(): boolean {
      return this.theme.global.name.value === 'darkTheme';
    },
  },
  methods: {
    toggleTheme() {
      this.theme.global.name.value = this.isDark ? 'lightTheme' : 'darkTheme';
      document.documentElement.classList.toggle('dark', !this.isDark);
    },
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

<style scoped>
.navbar-ds {
  background-color: var(--ds-surface);
  box-shadow: var(--ds-shadow-sm);
}
</style>
