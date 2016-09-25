//import {  provideRouter, RouterConfig  } from '@angular/router';
"use strict";
var router_1 = require('@angular/router');
var sidenav_route_1 = require('../app/sidenav/sidenav.route');
var header_routes_1 = require('../app/header/header.routes');
exports.appRoutingProviders = [];
var appRoutes = sidenav_route_1.SideNavRoutes.concat(header_routes_1.HeaderRoutes);
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//const routes:RouterConfig =[
//   ...SideNavRoutes,
//  ...HeaderRoutes
//];
//export const APP_ROUTER_PROVIDERS = [
//    provideRouter(routes),
//    AppComponent
//]
//  ...SideNavRoutes,
//     ...HeaderRoutes
// {
//         path:'Home',
//         component:HomeComponent
//     },
//     {
//         path:'Contact',
//         component:ContactComponent,
//     }
//# sourceMappingURL=app.routing.js.map