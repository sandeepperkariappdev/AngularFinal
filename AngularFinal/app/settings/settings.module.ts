import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {SettingsComponent} from '../../app/settings/settings.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
   SettingsComponent
  ],

  providers: [
    
  ]
})

export class SettingsModule {}