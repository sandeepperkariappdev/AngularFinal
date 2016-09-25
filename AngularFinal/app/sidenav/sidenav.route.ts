import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ContactComponent }  from '../../app/contact/contact.component';
import { HomeComponent }   from '../../app/home/home.component';

export const SideNavRoutes:Routes =[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'Contact',        
        component:ContactComponent
    }
];


//export const SideNavRouting: ModuleWithProviders = RouterModule.forChild(SideNavRoutes);