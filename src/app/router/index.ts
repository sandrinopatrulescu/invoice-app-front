import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/invoices/add',
      name: 'invoice-add',
      component: () => import('@/features/invoices/pages/InvoiceEditor.vue'),
      alias: '/',
    },
    {
      path: '/invoices/:id(\\d+)/edit',
      name: 'invoice-edit',
      component: () => import('@/features/invoices/pages/InvoiceEditor.vue'),
      props: true,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/app/pages/NotFound.vue'),
    },
  ],
})

export default router
