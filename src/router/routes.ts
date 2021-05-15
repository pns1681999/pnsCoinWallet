import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/Index.vue') },
      {
        path:'/create-wallet',
        name: 'create',
        component: () => import('pages/CreateWallet.vue')
      },
      {
        path:'/access-wallet',
        name: 'access',
        component: () => import('pages/AccessWallet.vue')
      },
      {
        path:'/interface',
        name: 'interface',
        redirect: '/interface/dashboard'
      },
      {
        path: '/interface/dashboard',
        name: 'dashboard',
        component: () => import('src/pages/Dashboard.vue')
      },
      {
        path: 'interface/send-transaction',
        name: 'send-transaction',
        component: () => import('src/pages/SendTransaction.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    name: 'error',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
