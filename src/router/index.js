import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Shop from '../views/Shop.vue';
import Contact from '../views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/shop', component: Shop },
  { path: '/contact', component: Contact }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
