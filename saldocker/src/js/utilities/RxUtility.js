import Rx from 'rxjs/Rx';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';


let rxsource = new Subject();          //IMPORTANT   //PRIVATE VARIABLE

export default class RxUtility {

    constructor() {
      let instance = null;

      if(!instance){
        instance = this;
      }
      // to test whether we have singleton or not
      this.time = new Date()

      return instance;

    }

    welcome() {
      console.log("Hi. Welcome To RxUtility.!!!!!!!!!");
    }


    setObs() {
        console.log("SetObs Called.: RxUtility");
        // this.rxsource = new Rx.Observable(function(observer) {
        //   setTimeout(function() {
        //     observer.next("bye");
        //   }, 5000);
        // });
        rxsource.next("hi all");
    }


    getObs() {
      console.log("GetObs Called.: RxUtility");
      //return this.rxsource;
      return rxsource.asObservable();
    }



}




/*
=================
Example - [USAGE]
=================

One component
-------------
import RxUtility from '../../utilities/RxUtility';

var rxutility = new RxUtility();
console.log("RxUtility Is Created...");
rxutility.welcome();


console.log("Waiting for NOTIFICATION");
let _this = this;
rxutility.getObs().subscribe(function(x) {
  console.log("NOTIFICATION RECEIVED..!!!!!");
  console.log(x);
  _this.completeChecks();
});



Another component
-----------------

import RxUtility from '../../../utilities/RxUtility';

 var rxutility = new RxUtility();
 console.log("RxUtility Is Created...");
 rxutility.welcome();




console.log("NOTIFYING....");
rxutility.setObs();


*/
