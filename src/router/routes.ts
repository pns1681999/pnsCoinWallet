import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path:'/create-wallet',
        component: () => import('pages/CreateWallet.vue')
      },
      {
        path:'/access-wallet',
        component: () => import('pages/AccessWallet.vue')
      },
      {
        path:'/interface',
        redirect: '/interface/dashboard'
      },
      {
        path: '/interface/dashboard',
        name: 'dashboard',
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
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
