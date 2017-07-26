import React from 'react';
import CheckGQL from './../check/CheckGQL';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {completeChecks_Thunk} from '../../../actions/index';        //OLD REDUCER
import {completeChecks_Thunk} from '../../../actions/checksActions';     //NEW REDUCER
import styles from './checks.css';
import $ from 'jquery';
import Rx from 'rxjs/Rx';
import RxUtility from '../../../utilities/RxUtility';

 var rxutility = new RxUtility();
 console.log("RxUtility Is Created...");
 rxutility.welcome();


class ChecksGQL extends React.Component {

    constructor(props){
        super(props);
        //######### INITIALIZE UTILITY #########
        // this.rxutility = new RxUtility();
        // console.log("RxUtility Is Created...");
        // this.rxutility.welcome();
        //######### INITIALIZE UTILITY #########
        this.state = {
          done : false
        };
    }


    completeChecks(e) {
      e.preventDefault();
      this.props.completeChecks_Thunk();
      console.log("Complete Checks.. INITIATED");
      //$("#routerORChecksBackButton").click();         //COMPLIANCE
    }



    // componentWillReceiveProps(nextProps) {
    //   console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... ChecksGQL!!!!!");
    //   //************When we are about to receive new update from Props... Then it will be called.*************
    //   console.log(nextProps.fetchingg);
    //   console.log(this.props.fetchingg);
    //
    //      if(nextProps.fetchingg === false){    //ORIGINAL
    //     //if(nextProps.fetchingg != this.props.fetchingg){    //COMPLIANCE
    //       console.log("Rendering checksRoutes now... After Ajax Response..NEW");
    //       $("#routerORChecksBackButton").click();         //COMPLIANCE
    //     }
    // }



     componentWillReceiveProps(nextProps) {
       console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... ChecksGQL!!!!!");
        this.setState({
          done: false
        });
       console.log(this.props);
       //************When we are about to receive new update from Props... Then it will be called.*************
       console.log(nextProps.completingChecks);
       console.log(this.props.completingChecks);

        if(nextProps.completingChecks === false && this.props.completingChecks === true){    //ORIGINAL
         //if(nextProps.completingChecks != this.props.completingChecks){    //COMPLIANCE
           //if(nextProps.completingChecks === false) {
           console.log("Rendering checksRoutes now... After Ajax Response..NEW");

           this.setState({done: true});

           // Rx.Observable.of(1,2,3)
           //this.rxutility.setObs();

           //console.log("NOTIFYING....");
           //rxutility.setObs();                //WORKS PERFECTLY.

           //}
         //}
       }

     }


      componentDidUpdate() {
        if(this.state.done) {
           $("#routerORChecksBackButton").click();
        }
        // this.setState({
        //   done: false
        // });
         //$('#backbutton2').click();
      }


   render() {

     console.log("Renderng: ChecksGQL");

     var loading = null;
     if(this.props.completingChecks) {
       loading = (
         <div className="alert alert-danger">
             <strong>Processing!</strong> Please Wait... !!!!!!
         </div>
       );
     }

    //  if(this.props.completedChecks){
    //    loading = (
    //      <div className="alert alert-danger">
    //          <strong>YAHOO!</strong> DONE... !!!!!!
    //      </div>
    //    );
    //    this.setState({done: true});
    //  }

    //  else {
    //         $("#routerORChecksBackButton").click();
    //  }

        //console.log("STORE IS: ");
        //console.log(this.props);

        const checksNode = this.props.questions.map((item) => {
            let color;
            let status = "";
            // console.log("Checks GQL");
            // console.log(item);

            if(item.status === null) {
              color = "Red";
            }
            else {
              if(item.status == "TODO")
                { color = "blue";}
              else
                { color = item.status;}
            }



            return (
              <div className="col-sm-12 col-md-11 col-lg-11 tchecs onHover">
                  <CheckGQL text={item.checkInfo.question.value} status={item.status} qid={item.checkInfo.question.questionId} color={color} checkid={item.checkInfo.checkId}/>
              </div>
            )
        });

        return (
            <div className="row">
            <div className="col-sm-12 col-md-11 col-lg-11">
                    {loading}

                <div className="list-group">
                    {checksNode}
                </div>

                <div className="col-sm-12 col-md-11 col-lg-6">
                  <button onClick={this.completeChecks.bind(this)} className="btn btn-danger"> COMPLETE CHECKS </button>
                </div>

            </div>
            </div>
        );

   }
}


function mapStateToProps(state) {
    console.log("ChecksGQL STORE...");
    console.log(state);

    return {
/*        questions: state.questions.data.checks,           //COMPLIANCE   //OLD REDUCER
//        fetchingg: state.questions.loadingData,
        completingChecks: state.questions.completingChecks,
        completedChecks: state.questions.completedChecks */

        questions: state.getChecks.data.checks,           //NEW REDUCER
        completingChecks: state.getChecks.completingChecks
//        completedChecks: state.questions.completedChecks

    };
}

function matchDispatchToProps(dispatch){
    console.log("props dispatch : ChecksGQL");
    console.log(dispatch);
    return bindActionCreators({ completeChecks_Thunk: completeChecks_Thunk}, dispatch);
}

// return {
//    questions: state.questions.getStore.books[0].checksByFormAndTimePeriod  //NEW-0
//     questions: state.questions.getStore.books[0].checks  //ORIGINAL  //OLD WAY ORIGINAL
// };

//export default Checks;
export default connect(mapStateToProps, matchDispatchToProps)(ChecksGQL);









ChecksGQL.defaultProps = {
  "checks": [
      {
          "checkId": "350001-SL35C-PetrolFillingStation-period-3",
          "checkType": "OK",
          "checkTime": {
              "year": 2017,
              "week": 16,
              "day": 0,
              "hour": null
          },
          "question": {
              "questionId": "780001",
              "value": "Battery indicator shows battery is charged for Quick Carts, Trolley Collection Trailer and Trolley Collection Tug."
          },
          "latestEvent": {
              "eventId": "66393f9d-6262-43a3-bdf1-bbae0ce06bb5",
              "eventType": "CheckStatusChanged",
              "status": "Red",
              "modifiedBy": {
                  "userId": "latestuserId"
              },
              "nextSteps": [
                  {
                      "nextStepId": "02a12d6a-f5fe-4f91-ba50-029a7a6b101a",
                      "description": {
                          "value": "Order new sand via Click2 Order"
                      },
                      "assignedTo": {
                          "userId": "testUserId"
                      },
                      "initials": "DV",
                      "status": "Open",
                      "notes": [
                          {
                              "value": "note1"
                          },
                          {
                              "value": "note2"
                          }
                      ]
                  },
                  {
                      "nextStepId": "02a12d6a-f5fe-4f91-ba50-dasdsaa6b1sas",
                      "description": {
                          "value": "Order new sand via Click2 Order 2ndNextstep"
                      },
                      "assignedTo": {
                          "userId": "testId"
                      },
                      "initials": "MM",
                      "status": "Open",
                      "notes": [
                          {
                              "value": "note1"
                          },
                          {
                              "value": "note2"
                          }
                      ]
                  }
              ]
          }
      },
      {
          "checkId": "5dcecd03-6e21-48e2-82dc-3aba6e0ae26f",
          "checkType": "OK",
          "checkTime": {
              "year": 2017,
              "week": 16,
              "day": 0,
              "hour": null
          },
          "question": {
              "questionId": "780001",
              "value": "Battery indicator shows battery is charged for Quick Carts, Trolley Collection Trailer and Trolley Collection Tug."
          },
          "latestEvent": null
      },
      {
          "checkId": "5e1b17a1-2c71-4e93-9f95-9825a6a670a7",
          "checkType": "OK",
          "checkTime": {
              "year": 2017,
              "week": 16,
              "day": 0,
              "hour": null
          },
          "question": {
              "questionId": "780002",
              "value": "Charging leads are in sound condition with no visible damage for Quick Carts, Trolley Collection Trailer and Trolley Collection Tug ."
          },
          "latestEvent": null
      }
  ]
 };



//
// {
//     "getStore": {
//         "storeId": "2055",
//         "storeName": "Baldock",
//         "books": [
//             {
//                 "bookId": "2017 P1 SL78 Trolley Collection Vehicles",
//                 "checks": [
//                     {
//                         "checkId": "350001-SL35C-PetrolFillingStation-period-3",
//                         "checkType": "OK",
//                         "checkTime": {
//                             "year": 2017,
//                             "week": 16,
//                             "day": 0,
//                             "hour": null
//                         },
//                         "question": {
//                             "questionId": "780001",
//                             "value": "Battery indicator shows battery is charged for Quick Carts, Trolley Collection Trailer and Trolley Collection Tug."
//                         },
//                         "latestEvent": {
//                             "eventId": "66393f9d-6262-43a3-bdf1-bbae0ce06bb5",
//                             "eventType": "CheckStatusChanged",
//                             "status": "Red",
//                             "modifiedBy": {
//                                 "userId": "latestuserId"
//                             },
//                             "nextSteps": [
//                                 {
//                                     "nextStepId": "02a12d6a-f5fe-4f91-ba50-029a7a6b101a",
//                                     "description": {
//                                         "value": "Order new sand via Click2 Order"
//                                     },
//                                     "assignedTo": {
//                                         "userId": "testUserId"
//                                     },
//                                     "initials": "DV",
//                                     "status": "Open",
//                                     "notes": [
//                                         {
//                                             "value": "note1"
//                                         },
//                                         {
//                                             "value": "note2"
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     "nextStepId": "02a12d6a-f5fe-4f91-ba50-dasdsaa6b1sas",
//                                     "description": {
//                                         "value": "Order new sand via Click2 Order 2ndNextstep"
//                                     },
//                                     "assignedTo": {
//                                         "userId": "testId"
//                                     },
//                                     "initials": "MM",
//                                     "status": "Open",
//                                     "notes": [
//                                         {
//                                             "value": "note1"
//                                         },
//                                         {
//                                             "value": "note2"
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     },
//                     {
//                         "checkId": "5dcecd03-6e21-48e2-82dc-3aba6e0ae26f",
//                         "checkType": "OK",
//                         "checkTime": {
//                             "year": 2017,
//                             "week": 16,
//                             "day": 0,
//                             "hour": null
//                         },
//                         "question": {
//                             "questionId": "780001",
//                             "value": "Battery indicator shows battery is charged for Quick Carts, Trolley Collection Trailer and Trolley Collection Tug."
//                         },
//                         "latestEvent": null
//                     },
//                     {
//                         "checkId": "5e1b17a1-2c71-4e93-9f95-9825a6a670a7",
//                         "checkType": "OK",
//                         "checkTime": {
//                             "year": 2017,
//                             "week": 16,
//                             "day": 0,
//                             "hour": null
//                         },
//                         "question": {
//                             "questionId": "780002",
//                             "value": "Charging leads are in sound condition with no visible damage for Quick Carts, Trolley Collection Trailer and Trolley Collection Tug ."
//                         },
//                         "latestEvent": null
//                     }
//                 ]
//             }
//         ]
//     }
