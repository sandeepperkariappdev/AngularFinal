import { Component } from '@angular/core';
import {PaymentService} from '../../app/payment/payment.service';
import {Hero} from '../../app/payment/Hero';
@Component({
  moduleId: module.id,
  providers:[PaymentService],
  selector: 'payment',
  templateUrl: 'payment.component.html',
  styleUrls: ['payment.component.css']
})
export class PaymentComponent {
  componentName: 'PaymentComponent';
  title = 'app works!';
  heroes:Hero[];
  errorMessage:string;
  payments:Array<any>;
  constructor(private _paymentService: PaymentService) {
        // Utilize .get request from app/friend.service.ts to populate friends object
        //this.payments = _paymentService.getPayments();
        this.getData();
    }
    getData(){
      this._paymentService.getPayments().subscribe(
                      heroes => this.heroes = heroes,
                       error =>  this.errorMessage = <any>error
      );
    }

    addHero(name: string){
      if (!name) { return; }
      this._paymentService.sendData(name)
                     .subscribe(
                       hero  => this.heroes.push(hero),
                       error =>  this.errorMessage = <any>error);
      
    }
    
}
