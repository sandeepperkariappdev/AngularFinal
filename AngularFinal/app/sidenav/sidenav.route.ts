import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { ContactComponent }  from '../../app/contact/contact.component';
import { HomeComponent }   from '../../app/home/home.component';
import { SettingsComponent }   from '../../app/settings/settings.component';


export const SideNavRoutes:Routes =[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'Contact',        
        component:ContactComponent
    },
    {
        path:'settings',        
        component:SettingsComponent
    }
];


//export const SideNavRouting: ModuleWithProviders = RouterModule.forChild(SideNavRoutes);