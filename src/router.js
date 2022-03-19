import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Signin from "./views/Signin";
import Signup from "./views/Signup";

Vue.use(VueRouter);

//eslint-disable-next-line
const router = new VueRouter({ 
    mode: "history",
    routes: [
        {
            path: "", 
            component: Home,
        },
        {
            path: "/Signin",
            component: Signin
        },
        {
            path: "/Signup",
            component: Signup
        },
    ]
});

export default router;
