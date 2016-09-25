import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';


 import { ContactComponent }  from '../../app/contact/contact.component';
 import { HomeComponent }   from '../../app/home/home.component';

// export const HeroesRoutes = [
//   { path: '/heroes',  component: HeroListComponent },
//   { path: '/hero/:id', component: HeroDetailComponent }
// ];


export const HeaderRoutes:Routes =[
    {
        path:'Home',     
        component:HomeComponent,
       
    },
    {
        path:'Contact',
        component:ContactComponent
    }
];

//export const HeaderRouting: ModuleWithProviders = RouterModule.forChild(HeaderRoutes);