import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from '@/views/LoginView'

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children:[
      {path:"/homepage",name:"homepage",component:()=>import("../components/homepage.vue")},
      {path:"/textlist",name:"textlist",component:()=>import("../components/textlist.vue")},
      {path:"/example",name:"example",component:()=>import("../components/example.vue")},
      {path:"/mycenter",name:"mycenter",component:()=>import("../components/mycenter.vue")}
    ]
  },

  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
