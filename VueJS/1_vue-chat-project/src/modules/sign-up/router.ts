const moduleRoute = {
  path: '/sign-up',
  component: () => import('./SignUpModule.vue'),
};

export default (router: any) => {
  router.addRoute(moduleRoute);
};
