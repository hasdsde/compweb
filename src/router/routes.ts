import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
        { path: 'a', component: () => import('pages/IndexPage.vue') },
        { path: 'sea', component: () => import('pages/SeaComp.vue') },
        { path: 'fish', component: () => import('pages/FishComp.vue') },
        { path: 'location', component: () => import('pages/LocationComp.vue') },
        { path: 'about', component: () => import('pages/About.vue') },
        { path: 'userManager', component: () => import('pages/userManager.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
