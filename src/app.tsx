import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import routes from "./router/index";
import renderRoutes from "./utils/renderRouter";

export default function App(): JSX.Element {
  const authed = false; // 如果登陆之后可以利用redux修改该值(关于redux不在我们这篇文章的讨论范围之内）
  const authPath = "/login"; // 默认未登录的时候返回的页面，可以自行设置

  return (
    <BrowserRouter>
      <Switch>{renderRoutes(routes, authed, authPath)}</Switch>
    </BrowserRouter>
  );
}
