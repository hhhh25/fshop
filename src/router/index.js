/*
路由器对象模块
*/
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Msite from '../pages/Msite/Msite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';

export default new VueRouter({
    routes:[
        // 一般路由
        {
            path:'/msite',
            component:Msite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        // 自动跳转路由
        {
            path:'/',
            redirect:'./msite'
        },
        {
            path:'/login',
            component:Login
        },
    ]
})