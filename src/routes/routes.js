// import ------------------
import Home from "../components/layout/Home";
import ProductList from "../components/products/ProductList";
import Product from "../components/products/Product";
import Login from "../components/users/Login";
import Summary from "../components/panier/Summary";

export const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    children: [
      { path: "", name: "product-list", component: ProductList },
      { path: "/product/:id", name: "product", component: Product }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: Login
    // beforeEnter: (to, from, next) => {
    //   localStorage.isLogged && localStorage.isLogged !== "false"
    //     ? next()
    //     : next({ name: "product-list" });
    // }
  },
  {
    path: "/summary",
    name: "summary",
    component: Summary,
    beforeEnter: (to, from, next) => {
      localStorage.isLogged && localStorage.isLogged !== "false"
        ? next()
        : next({ name: "login" });
    }
  },
  { path: "/*", redirect: "/" }
];
