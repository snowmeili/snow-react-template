import Home from "../containers/home";
import Login from "../containers/singer";
import User from "../containers/singer";

const routes = [
  {
    path: "/",
    exact: true,
    component: Home,
    // requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    // requiresAuth: false,
  },
  {
    path: "/user",
    component: User,
    // requiresAuth: true, //需要登陆后才能跳转的页面
  },
];

export default routes;
