import VueRouter from 'vue-router';
var UnAuthorizedLayoutComponent = function (resolve) { return require(['../layout/un-authorized'], resolve); };
var AuthorizationModuleComponent = function (resolve) { return require(['../module/authorization'], resolve); };
var LoginViewComponent = function (resolve) { return require(['../module/authorization/view/login'], resolve); };
var RegistryViewComponent = function (resolve) { return require(['../module/authorization/view/registry'], resolve); };
var ContactViewComponent = function (resolve) { return require(['../module/authorization/view/contact'], resolve); };
var AdminLayoutComponent = function (resolve) { return require(['../layout/admin'], resolve); };
var NotFoundComponent = function (resolve) { return require(['../layout/notfound'], resolve); };
/**
 * MODULE: PROPERTY
 * @param resolve
 */
var PropertyModuleComponent = function (resolve) { return require(['../module/property'], resolve); };
var PropertyListViewComponent = function (resolve) { return require(['../module/property/view/list-view'], resolve); };
var PropertyDetailViewComponent = function (resolve) { return require(['../module/property/view/detail-view'], resolve); };
var PropertyEditViewComponent = function (resolve) { return require(['../module/property/view/edit-view'], resolve); };
var PropertyEditGenaralComponent = function (resolve) { return require(['../module/property/view/edit-view/comps/general'], resolve); };
var PropertyEditDocumentComponent = function (resolve) { return require(['../module/property/view/edit-view/comps/document'], resolve); };
/**
 * MODULE: AGENDA
 * @param resolve
 */
var AgendaModuleComponent = function (resolve) { return require(['../module/agenda'], resolve); };
var AgendaListViewComponent = function (resolve) { return require(['../module/agenda/view/list-view'], resolve); };
var AgendaDetailViewComponent = function (resolve) { return require(['../module/agenda/view/detail-view'], resolve); };
var AgendaEditViewComponent = function (resolve) { return require(['../module/agenda/view/edit-view'], resolve); };
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
                    },
                    {
                        path: 'contact',
                        component: ContactViewComponent,
                        name: 'contact view',
                        meta: { description: 'contact' },
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
                alias: '',
                component: PropertyModuleComponent,
                name: 'property module',
                meta: { description: 'Property' },
                children: [
                    {
                        path: 'list',
                        alias: '',
                        component: PropertyListViewComponent,
                        name: 'list view',
                        meta: { description: 'list view' },
                    },
                    {
                        path: 'detail/:id',
                        component: PropertyDetailViewComponent,
                        name: 'detail view',
                        meta: { description: 'detail' },
                    },
                    {
                        path: 'edit/:id',
                        component: PropertyEditViewComponent,
                        name: 'edit view',
                        meta: { description: 'edit' },
                        children: [
                            {
                                path: 'general',
                                alias: '',
                                component: PropertyEditGenaralComponent,
                                name: 'property general tab view',
                                meta: { description: 'property general tab view' },
                            },
                            {
                                path: 'document',
                                component: PropertyEditDocumentComponent,
                                name: 'property document tab view',
                                meta: { description: 'property document tab view' },
                            }
                        ]
                    }
                ]
            },
            {
                path: 'agenda',
                component: AgendaModuleComponent,
                name: 'agenda module',
                meta: { description: 'agenda' },
                children: [
                    {
                        path: 'list',
                        alias: '',
                        component: AgendaListViewComponent,
                        name: 'agenda list view',
                        meta: { description: 'list view' },
                    },
                    {
                        path: 'detail/:id',
                        component: AgendaDetailViewComponent,
                        name: 'agenda detail view',
                        meta: { description: 'detail' },
                    },
                    {
                        path: 'edit/:id',
                        component: AgendaEditViewComponent,
                        name: 'agenda edit view',
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