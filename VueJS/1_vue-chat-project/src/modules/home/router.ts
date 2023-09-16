import store from '../../store/store';

const moduleRoute = {
  path: '/',
  component: () => import('./HomeModule.vue'),
  beforeEnter: (to: any, from: any, next: any) => {
    if (store.getters.authentication) {
      next();
    }
  },
};

export default (router: any) => {
  router.addRoute(moduleRoute);
};
