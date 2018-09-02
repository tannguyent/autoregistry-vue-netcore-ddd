import VueRouter, { RouteConfig } from 'vue-router'

const UnAuthorizedLayoutComponent = resolve => require(['../layout/un-authorized'], resolve);
const AuthorizationModuleComponent = resolve => require(['../module/authorization'], resolve);
const LoginViewComponent = resolve => require(['../module/authorization/view/login'], resolve);
const RegistryViewComponent = resolve => require(['../module/authorization/view/registry'], resolve);
const ContactViewComponent = resolve => require(['../module/authorization/view/contact'], resolve);

const AdminLayoutComponent = resolve => require(['../layout/admin'], resolve);

const NotFoundComponent = resolve => require(['../layout/notfound'], resolve);

/**
 * MODULE: PROPERTY
 * @param resolve
 */
const PropertyModuleComponent = resolve => require(['../module/property'], resolve);
const PropertyListViewComponent = resolve => require(['../module/property/view/list-view'], resolve);
const PropertyDetailViewComponent = resolve => require(['../module/property/view/detail-view'], resolve);
const PropertyEditViewComponent = resolve => require(['../module/property/view/edit-view'], resolve);
const PropertyEditGenaralComponent = resolve => require(['../module/property/view/edit-view/comps/general'], resolve);
const PropertyEditDocumentComponent = resolve => require(['../module/property/view/edit-view/comps/document'], resolve);

/**
 * MODULE: AGENDA
 * @param resolve
 */
const AgendaModuleComponent = resolve => require(['../module/agenda'], resolve);
const AgendaListViewComponent = resolve => require(['../module/agenda/view/list-view'], resolve);
const AgendaDetailViewComponent = resolve => require(['../module/agenda/view/detail-view'], resolve);
const AgendaEditViewComponent = resolve => require(['../module/agenda/view/edit-view'], resolve);

/**
 * MODULE: SEARCH RESULT
 */
const SearchResultModuleComponent = resolve => require(['../module/search'], resolve);

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
            },
            {
                path: 'search-result/:query',
                component: SearchResultModuleComponent,
                name: 'search-result-module',
                props: true,
                meta: {
                    description: 'search'
                },
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
