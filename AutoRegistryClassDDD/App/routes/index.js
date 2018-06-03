import VueRouter from 'vue-router';
import HomeView from '../components/views/frontview/HomeComponent.vue';
import HomeContainerComponent from '../components/views/frontview/container/home/HomeContainerComponent.vue';
import LoginContainerComponent from '../components/views/frontview/container/login/LoginContainerComponent.vue';
import RegistryContainerComponent from '../components/views/frontview/container/registry/RegistryContainerComponent.vue';
import AdminHomeComponent from '../components/views/admin/AdminHomeComponent.vue';
import DashboardContainerComponent from '../components/views/admin/container/dashboard/DashBoardContainerComponent.vue';
import SettingContainerComponent from '../components/views/admin/container/setting/SettingContainerComponent.vue';
import NotFoundComponent from '../components/views/notfound/NotFoundComponent.vue';
var routes = [
    {
        name: 'home',
        path: '/',
        component: HomeView,
        children: [
            {
                path: 'home',
                alias: '',
                component: HomeContainerComponent,
                name: 'Dashboard',
                meta: { description: 'Overview of dashboard' }
            },
            {
                name: 'login',
                path: 'login',
                component: LoginContainerComponent
            },
            {
                name: 'registry',
                path: 'registry',
                component: RegistryContainerComponent
            }
        ]
    },
    {
        name: "Admin",
        path: '/admin',
        component: AdminHomeComponent,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                alias: '',
                component: DashboardContainerComponent,
                name: 'Dashboard',
                meta: { description: 'Overview of dashboard' }
            }, {
                path: 'setting',
                component: SettingContainerComponent,
                name: 'Setting',
                meta: { description: 'Include all configurations of the system' }
            }
        ]
    },
    {
        // not found handler
        path: '*',
        component: NotFoundComponent
    }
];
var router = new VueRouter({
    routes: routes,
    mode: 'history',
    linkExactActiveClass: 'active',
});
router.beforeEach(function (to, from, next) {
    next();
});
export default router;
//# sourceMappingURL=index.js.map