"use strict";
var contact_component_1 = require('../../app/contact/contact.component');
var home_component_1 = require('../../app/home/home.component');
// export const HeroesRoutes = [
//   { path: '/heroes',  component: HeroListComponent },
//   { path: '/hero/:id', component: HeroDetailComponent }
// ];
exports.HeaderRoutes = [
    {
        path: 'Home',
        component: home_component_1.HomeComponent,
    },
    {
        path: 'Contact',
        component: contact_component_1.ContactComponent
    }
];
//export const HeaderRouting: ModuleWithProviders = RouterModule.forChild(HeaderRoutes); 
//# sourceMappingURL=header.routes.js.map