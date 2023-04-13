import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'

const Home = { template: "<div>Home</div>" };
const About = { template: "<div>About</div>" };
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Test,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Test2
    },
    {
      path: "/custom/:id",
      name: "custompage",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Test3
    },
  ],
});

export default router;
