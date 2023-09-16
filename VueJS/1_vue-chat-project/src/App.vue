<template>
  <div style="position: relative">
    <nav-bar></nav-bar>
    <div class="app d-flex align-center">
      <!-- <transition
        :appear="true"
        enter-active-class="animate__animated animate__zoomIn"
        leave-active-class="animate__animated animate__zoomOut"
      > -->
      <router-view />
      <!-- </transition> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarComponent from './components/Navbar.vue';
import { useCookies } from 'vue3-cookies';
import { userInfoApi } from './api/user';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { useToast } from 'vue-toastification';
import { SERVER_ERROR } from './utils/constants/commons';

export default defineComponent({
  name: 'App',
  setup() {
    const toast = useToast();
    const { cookies } = useCookies();
    const router = useRouter();
    const store = useStore();
    return {
      cookies,
      toast,
      router,
      store,
    };
  },
  created() {
    this.syncUserAuth();
  },
  methods: {
    syncUserAuth() {
      const jwtToken = this.cookies.get('jwt');

      const toast = this.toast;
      const store = this.store;
      const router = this.router;

      if (jwtToken) {
        store.dispatch('setJwt', jwtToken);
        userInfoApi()
          .then(function (response: any) {
            store.dispatch('setAuth', response.data);
            toast.success('Login successfully!');
            router.push('/');
          })
          .catch(function (error: any) {
            toast.error(SERVER_ERROR);
            store.dispatch('resetAuth');
          });
      } else {
        router.push('/sign-in');
      }
    },
  },
  components: {
    'nav-bar': NavbarComponent,
  },
});
</script>

<style>
.app {
  height: 100vh;
  width: 100%;
  background: var(--c-primary);
}
::-webkit-scrollbar {
  display: none;
}
</style>
