"use strict";
var contact_component_1 = require('../../app/contact/contact.component');
var home_component_1 = require('../../app/home/home.component');
var settings_component_1 = require('../../app/settings/settings.component');
exports.SideNavRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent
    },
    {
        path: 'Contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: 'settings',
        component: settings_component_1.SettingsComponent
    }
];
//export const SideNavRouting: ModuleWithProviders = RouterModule.forChild(SideNavRoutes); 
//# sourceMappingURL=sidenav.route.js.map