import VueRouter from "vue-router";
import Vue from "vue";

import MainPage from '@/pages/MainPage';
import AboutPage from '@/pages/AboutPage';
import BlogPage from '@/pages/BlogPage';


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/about",
    name: "about-us",
    component: AboutPage,
  },
  {
    path: "/blog",
    name: "blog",
    component: BlogPage,
  }
];

const router = new VueRouter({
  routes
});

export default router;
