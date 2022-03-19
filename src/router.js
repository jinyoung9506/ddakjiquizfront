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
            name: 'Home',
            meta: {
                title: '딱지 퀴즈'
            },
        },
        {
            path: "/Signin",
            component: Signin,
            name: 'Signin',
            meta: {
                title: '딱지 퀴즈 로그인',
                text: '로그인',
            },
        },
        {
            path: "/Signup",
            component: Signup,
            name: 'Signup',
            meta: {
                title: '딱지 퀴즈 회원가입',
                text: '회원 가입',
            },
        },
    ]
});

router.afterEach((to, /* from  */) => {
    const title = to.meta.title === undefined ? '딱지 퀴즈' : to.meta.title;
    Vue.nextTick(() => {
        document.title = title;
    });
});

export default router;
