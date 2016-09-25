import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Hero} from './Hero';
const url =   "https://airporthubops-qa-enfsvc.ual.com/sdb/SDBAPI/Channels/HTTP/ArptSuprView?versionNo=2.0&gates=C-30,C-31,C-32,C-33,C-34,C-35,C-36,C-37,C-39,C-40,C-41,C-42,C-43,C-44,C-45,E1,E2,E3,E4,E5,E7,E8,E10,E11,E12,E14,E15,E16,E9,E17,E18,E19,E20,E21,E22,E23,E24,C-14,C-16,C-17,C-18,C-19,C-20,C-21,C-22,C-23,C-24,C-25,C-26,D1,D10,D11,D12,D2,D3,D4,D4A,D5,D6,D6A,D7,D8,D9,A1,A2,A7,A8,B76,B77,B79,B79A,B80,B81,B83,B85A,B86,B87,B88,B1,B10,B11,B12,B14,B15,B16,B2,B3,B4,B5,B6,B7,B8,B9,B17,B18,B19,B20,B21,B22,B23,B24,B25,B26,B27,B29,B30,B31&rplyInJson=true&station=IAH&viewType=ALL";
const token = "Bearer AAENU1ZDLVRTVkRCT0FSRFV7WbFsw_yzufa5Es9ounNsO1dKSUZskRiLsYoXXJi8jEsl1CAl4R92c_0Gh_vag7Fhi02RRNmQ4oT1I3GA4y4";
@Injectable()
export class PaymentService {     
    
    constructor(private http:Http) {
       
    }

      getPayments():Observable<Hero[]> {
       let headers = new Headers({ 'Content-Type': 'application/json','Authorization':token });      
        let options = new RequestOptions({ headers: headers });
      return this.http.get(url,options).map(this.extractData).catch(this.handleError);
    }
     private extractData(res:Response){
        let body = res.json();
        console.log(body);
        return body.data || {};
    }
    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
    }
     sendData(name:string):Observable<Hero>{
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post('app/heroes.json', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    }
}