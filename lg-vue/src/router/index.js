import Vue from 'vue';
import VueRouter from 'vue-router';

// Esse é o meu layout padrão
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: 'resumo',
    children: [
      {
        path: '/resumo',
        name: 'resumo',
        component: () => import(/* webpackChunkName: "resumo" */ '../views/ResumoTarefas.vue'),
      },
      {
        path: '/tarefas',
        name: 'tarefas',
        component: () => import(/* webpackChunkName: "tarefas" */ '../views/Tarefas.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
