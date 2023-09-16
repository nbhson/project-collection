/** PLUGIN */
import { loadFonts } from './utils/plugins/webfontloader';
import { injectStore, axios } from './utils/interceptor/interceptor';
import { TOAST_TIME_OUT } from '@/utils/constants/commons';
import Toast, { POSITION } from 'vue-toastification';
import vuetify from './utils/plugins/vuetify';
import VueAxios from 'vue-axios';
import VueCookies from 'vue3-cookies';
/** APP */
import { createApp } from 'vue';
import { registerModules } from './register-modules';
import App from './App.vue';
import store from './store/store';
import router from './route/route';
/** MODULES */
import SignInModule from './modules/sign-in';
import SignUpModule from './modules/sign-up';
import HomeModule from './modules/home';
/** STYLE */
import './assets/base.css';
import 'animate.css';
import 'vue-toastification/dist/index.css';

loadFonts();
injectStore(store);
registerModules({
  signIn: SignInModule,
  signUp: SignUpModule,
  home: HomeModule,
});
const toastOptions: any = {
  position: POSITION.BOTTOM_RIGHT,
  timeout: TOAST_TIME_OUT,
};
const cookiesOption: any = {
  expireTimes: '3d',
  path: '/',
  domain: '',
  secure: true,
  sameSite: 'None',
};

const app = createApp(App);
app.use(VueAxios, axios);
app.use(VueCookies, cookiesOption);
app.use(store);
app.use(router);
app.use(vuetify);
app.use(Toast, toastOptions);
app.mount('#app');
