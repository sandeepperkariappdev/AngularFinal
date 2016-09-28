import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {routing,appRoutingProviders} from './app.routing';
import { SideNavComponent } from '../app/sidenav/sidenav.component';
import { HeaderComponent } from '../app/header/header.component';
import { HomeModule } from '../app/home/home.module';
import { ContactModule } from '../app/contact/contact.module';
import { HttpModule } from '@angular/http';
import { SettingsModule } from '../app/settings/settings.module';
@NgModule({
  imports:[
    BrowserModule,
    routing,
    HttpModule,
    HomeModule,
    ContactModule,
    SettingsModule
    ],
  declarations: [ AppComponent,SideNavComponent,HeaderComponent ],
  providers: [
      appRoutingProviders
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
