import Home        from "../components/layout/Home";
import Login       from "../components/Login";
//import Basket      from "../components/Basket"
import Summary     from "../components/Summary";
import ProductList from "../components/products/ProductList";
import Product     from "../components/products/Product";

export const routes = [
    { path: "/",
      name: "home",
      component: Home,
      children:[
        { path: "", name: "product-list", component: ProductList},
        { path: "/product:id", name: "product", component: Product}
    ]},
    { path: "/login", name: "login", component: Login },
    { path: "/summary", name: "summary", component: Summary },
    //{ path: "/basket", name: "basket", component: Basket },
]
