import { createRouter, createWebHistory } from 'vue-router';

import Defaultlayout from '@/components/Defaultlayout.vue';

import Introduction from '@/views/Introduction.vue';
import Weather from '@/views/Weather.vue';
import Travelplan from '@/views/Travelplan.vue';
import Accountbook from '@/views/Accountbook.vue';

import memo from '@/memo.vue';

const routes = [
  { path: '/', name: 'Defaultlayout', component: Defaultlayout },
  { path: '/Accountbook', name: 'Accountbook', component: Accountbook },
  { path: '/Introduction', name: 'Introduction', component: Introduction },
  { path: '/Travelplan', name: 'Travelplan', component: Travelplan },
  { path: '/Weather', name: 'Weather', component: Weather },
  { path: '/memo', name: 'memo', component: memo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
