import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from "../components/Home";
import Login from "../components/Login";
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "Login",
    //   component: Login
    // }
    {
      path: "/",
      name: "Home",
      component: Home
    }
  ]
})
