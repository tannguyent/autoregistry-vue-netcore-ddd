import VueRouter from 'vue-router';
var UnAuthorizedLayoutComponent = function (resolve) { return require(['../layout/un-authorized'], resolve); };
var AuthorizationModuleComponent = function (resolve) { return require(['../module/authorization'], resolve); };
var LoginViewComponent = function (resolve) { return require(['../module/authorization/view/login'], resolve); };
var RegistryViewComponent = function (resolve) { return require(['../module/authorization/view/registry'], resolve); };
var AdminLayoutComponent = function (resolve) { return require(['../layout/admin'], resolve); };
var NotFoundComponent = function (resolve) { return require(['../layout/notfound'], resolve); };
var PropertyModuleComponent = function (resolve) { return require(['../module/property'], resolve); };
var PropertyListViewComponent = function (resolve) { return require(['../module/property/view/list-view'], resolve); };
var PropertyDetailViewComponent = function (resolve) { return require(['../module/property/view/detail-view'], resolve); };
var PropertyEditViewComponent = function (resolve) { return require(['../module/property/view/edit-view'], resolve); };
var routes = [
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
//# sourceMappingURL=route.js.map