"use strict";
var contact_component_1 = require('../../app/contact/contact.component');
var home_component_1 = require('../../app/home/home.component');
exports.SideNavRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'Contact',
        component: contact_component_1.ContactComponent
    }
];
//export const SideNavRouting: ModuleWithProviders = RouterModule.forChild(SideNavRoutes); 
//# sourceMappingURL=sidenav.route.js.map