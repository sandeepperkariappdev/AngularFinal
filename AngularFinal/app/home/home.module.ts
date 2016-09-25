import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import {PaymentComponent} from '../../app/payment/payment.component';
import {ClaimsComponent} from '../../app/claims/claims.component';
import {CardsComponent} from '../../app/cards/cards.component';
import {DairyFeedComponent} from '../../app/dairyfeed/dairyfeed.component';
import {NeedHelpComponent} from '../../app/needhelp/needhelp.component';
import {HomeService} from '../../app/home/home.service';
import {HomeComponent} from './home.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    PaymentComponent,
    ClaimsComponent,
    CardsComponent,
    DairyFeedComponent,
    NeedHelpComponent
  ],

  providers: [
    HomeService
  ]
})

export class HomeModule {}