const moduleRoute = {
  path: '/sign-in',
  component: () => import('./SignInModule.vue'),
};

export default (router: any) => {
  router.addRoute(moduleRoute);
};
