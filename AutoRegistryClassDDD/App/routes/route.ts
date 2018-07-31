import VueRouter, { RouteConfig } from 'vue-router'

const UnAuthorizedLayoutComponent = resolve => require(['../layout/un-authorized'], resolve);
const AuthorizationModuleComponent = resolve => require(['../module/authorization'], resolve);
const LoginViewComponent = resolve => require(['../module/authorization/view/login'], resolve);
const RegistryViewComponent = resolve => require(['../module/authorization/view/registry'], resolve);

const AdminLayoutComponent = resolve => require(['../layout/admin'], resolve);

const NotFoundComponent = resolve => require(['../layout/notfound'], resolve);

const PropertyModuleComponent = resolve => require(['../module/property'], resolve);
const PropertyListViewComponent = resolve => require(['../module/property/view/list-view'], resolve);
const PropertyDetailViewComponent = resolve => require(['../module/property/view/detail-view'], resolve);
const PropertyEditViewComponent = resolve => require(['../module/property/view/edit-view'], resolve);

const routes = [
    {
        name: 'home',
        path: '/',
        component: UnAuthorizedLayoutComponent,
        children: [
            {
                path: 'authorization',
                alias: '',
                component: AuthorizationModuleComponent,
                name: 'authorization module',
                meta: { description: 'Login' },
                children: [
                    {
                        path: 'login',
                        alias: '',
                        component: LoginViewComponent,
                        name: 'login view',
                        meta: { description: 'Login' },
                    },
                    {
                        path: 'registry',
                        component: RegistryViewComponent,
                        name: 'registry view',
                        meta: { description: 'Registry' },
                    }
                ]
            },
        ]
    },
    {
        name: "admin",
        path: "/admin",
        component: AdminLayoutComponent,
        children: [
            {
                path: 'property',
                component: PropertyModuleComponent,
                name: 'property module',
                meta: { description: 'Property' },
                children: [
                    {
                        path: 'list',
                        component: PropertyListViewComponent,
                        name: 'list view',
                        meta: { description: 'list view' },
                    },
                    {
                        path: 'detail',
                        component: PropertyDetailViewComponent,
                        name: 'detail view',
                        meta: { description: 'detail' },
                    },
                    {
                        path: 'edit',
                        component: PropertyEditViewComponent,
                        name: 'edit view',
                        meta: { description: 'edit' },
                    }
                ]
            }
        ]
    },
    {
        // not found handler
        path: '*',
        component: NotFoundComponent
    }
]

const router: VueRouter = new VueRouter({
    routes: routes,
    mode: 'history',
    linkExactActiveClass: 'active',
});


router.beforeEach((to, from, next) => {
    next();
})

export default router
