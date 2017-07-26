import initialState2GQL from "./storeGQL";
import obj2arg from 'graphql-obj2arg';
//import Utility from './Utility';
import RxUtility from '../utilities/RxUtility';
//import QueryGenerator from './QueryGenerator';


//######### UTILITY USE ############
// var utility = new Utility();
// console.log("Utility Is Created...");
// utility.welcome();

// var rxutility = new RxUtility();
// console.log("RxUtility Is Created...");
// rxutility.welcome();

//var QueryGeneratorUtil = new QueryGenerator();
//######### UTILITY USE ############


export default function (state = initialState2GQL, action) {
    console.log("STARTING REDUCER.....!!!!!!!");
    console.log(state);

    var checks;
    if(state.data != undefined) {
      //checks = state.data.getStore.books[0].checksByTimePeriod;   //ORIGINAL
      checks = state.data.checks;     //COMPLIANCE
      console.log("CHECKS FOUND.....!!!!!!!!");
      console.log(checks);
    }
    else {
      console.log("CHECKS NOT AVAILABLE NOW...!!!!!!!!");
    }


    switch (action.type) {

        // case 'FETCHING' :                      //ORIGINAL
        //   console.log("FETCHING... WAIT...");
        //   state = {loadingData: true};
        //   return state;
        //   break;


        case 'FETCHING' :
          console.log("FETCHING... WAIT...");
          state = {...state, loadingData: true};
          return state;
          break;

        case 'FETCHING_AN' :
          console.log("FETCHING...AddNotes... WAIT...");
          state = {...state, loadingANChecks: true};
          return state;
          break;


        case 'FETCHING_ANS' :
          console.log("FETCHING...AddNextSteps... WAIT...");
          state = {...state, loadingAddNS: true};
          return state;
          break;

        case 'FETCHING_ENS' :
          console.log("FETCHING...EditNextSteps... WAIT...");
          state = {...state, loadingEditNS: true};
          return state;
          break;

        case 'FETCHING_CSC' :
          console.log("FETCHING...ChangeStatusChecks... WAIT...");
          state = {...state, loadingCSChecks: true};
          return state;
          break;


        case 'FETCHING_CSNS' :
          console.log("FETCHING...ChangeStatusNS... WAIT...");
          state = {...state, loadingCSNSteps: true};
          return state;
          break;


        case 'FETCH_START' :
          console.log("FETCH_START... WAIT...");
          state = {...state, loadingBooks: true};
          return state;
          break;


        case 'FETCH_DONE' :
          console.log("FETCHED... DONE...");
          state = {...state, loadingBooks: false};
          return state;
          break;

        //######### FILLING STORE ############
        case 'FILL_STORE' :
            console.log("Filling STORE....");
            console.log(state);
            //state = {loadingData: false}
            //state = action.data;

            /*state = {    //ORIGINAL
              data: action.data.data,
              loadingData: false
            }*/
            state = {
              ...state,               //COMPLIANCE  //.map undefined property...
              data: action.data,
              loadingData: false
            }

            console.log(state);
            return state;
            break;



            case 'FILL_STORE_AN' :
                console.log("Filling STORE....AddNotes");
                console.log(state);
                //state = {loadingData: false}
                //state = action.data;

                /*state = {    //ORIGINAL
                  data: action.data.data,
                  loadingData: false
                }*/
                state = {
                  ...state,               //COMPLIANCE  //.map undefined property...
                  data: action.data,
                  loadingANChecks: false
                }

                console.log(state);
                return state;
                break;


            case 'FILL_STORE_ANS' :
                console.log("Filling STORE....AddNextSteps");
                console.log(state);
                //state = {loadingData: false}
                //state = action.data;

                /*state = {    //ORIGINAL
                  data: action.data.data,
                  loadingData: false
                }*/
                state = {
                  ...state,               //COMPLIANCE  //.map undefined property...
                  data: action.data,
                  loadingAddNS: false
                }

                console.log(state);
                return state;
                break;



            case 'FILL_STORE_ENS' :
                console.log("Filling STORE....EditNextSteps");
                console.log(state);
                //state = {loadingData: false}
                //state = action.data;

                /*state = {    //ORIGINAL
                  data: action.data.data,
                  loadingData: false
                }*/
                state = {
                  ...state,               //COMPLIANCE  //.map undefined property...
                  data: action.data,
                  loadingEditNS: false
                }

                console.log(state);
                return state;
                break;


            case 'FILL_STORE_CSC' :
                console.log("Filling STORE....ChangeStatusChecks");
                console.log(state);
                //state = {loadingData: false}
                //state = action.data;

                /*state = {    //ORIGINAL
                  data: action.data.data,
                  loadingData: false
                }*/
                state = {
                  ...state,               //COMPLIANCE  //.map undefined property...
                  data: action.data,
                  loadingCSChecks: false
                }

                console.log(state);
                return state;
                break;


            case 'FILL_STORE_CSNS' :
                console.log("Filling STORE....ChangeStatusNS");
                console.log(state);
                //state = {loadingData: false}
                //state = action.data;

                /*state = {    //ORIGINAL
                  data: action.data.data,
                  loadingData: false
                }*/
                state = {
                  ...state,               //COMPLIANCE  //.map undefined property...
                  data: action.data,
                  loadingCSNSteps: false
                }

                console.log(state);
                return state;
                break;



            //######### FILLING INCOMPLETE_CHECKS ############
            case 'FETCH_INCOMPLETE_CHECKS_START' :
              console.log("FETCH_INCOMPLETE_CHECKS_START... WAIT...");
              state = {...state, loadingIncompleteChecks: true};
              return state;
              break;

            case 'FILL_INCOMPLETE_CHECKS' :
                console.log("Filling INCOMPLETE_CHECKS....");
                console.log(state);

                state = {
                  ...state,
                  loadingIncompleteChecks: false,
                  incompleteChecks: action.data
                }

                console.log(state);
                return state;
                break;


              //######### FILLING PROGRESS_DATA ############
              case 'FETCH_PROGRESS_DATA_START' :
                console.log("FETCH_PROGRESS_DATA_START... WAIT...");
                state = {...state, loadingProgressData: true};
                return state;
                break;

              case 'FILL_PROGRESS_DATA' :
                  console.log("Filling PROGRESS_DATA....");

                  state = {
                    ...state,
                    loadingProgressData: false,
                    progressData: action.data
                  }

                  return state;
                  break;



              //######### FILLING REVIEWS_DATA ############
              case 'FETCH_REVIEWS_START' :
                console.log("FETCH_REVIEWS_START... WAIT...");
                state = {...state, loadingReviews: true};
                return state;
                break;

              case 'FILL_REVIEWS_DATA' :
              console.log("Filling REVIEWS_DATA....");

                  state = {
                    ...state,
                    loadingReviews: false,
                    reviews: action.data
                  }

                  return state;
                  break;


          //######### FILLING REVIEWS_DATA ############
          case 'FETCH_BOOK_REVIEW_START' :
            console.log("FETCH_BOOK_REVIEW_START... WAIT...");
            state = {...state, loadingBookReview: true};
            return state;
            break;

          case 'FILL_BOOK_REVIEW_DATA' :
          console.log("Filling BOOK_REVIEW_DATA....");

              state = {
                ...state,
                loadingBookReview: false,
                bookReview: action.data
              }

              return state;
              break;


      //######### FILLING REVIEWS_DATA ############
      case 'SIGN_OFF_START' :
        console.log("SIGN_OFF_START... WAIT...");
        state = {...state, signOffStart: true};
        return state;
        break;

      case 'SIGN_OFF_STOP' :
      console.log("SIGN_OFF_STOP....");

          state = {
            ...state,
            signOffStart: false,
          }

          return state;
          break;


      //######### FILLING REVIEWS_DATA ############
      case 'COMPLETE_CHECKS_START' :
        console.log("COMPLETE_CHECKS_START... WAIT...");
        state = {...state, completingChecks: true};
        return state;
        break;

      case 'COMPLETE_CHECKS_STOP' :
      console.log("COMPLETE_CHECKS_STOP....");

          state = {
            ...state,
            completingChecks: false
          }

          return state;
          break;









//#################### GRAPHQL_CHANGE ########################
case 'ADD_NEXT_STEP_GQL' :
  console.log("Add next steps.#GQL");
  var nextsps;
  checks.forEach(function(item){
         if(item.checkInfo.checkId === action.cid)
         {
             console.log("adding: "+action.data);
             console.log("Size: "+item.nextSteps.length);

             let siz = item.nextSteps.length;
             let obj = action.data;
             console.log(obj);
             item.nextSteps.push(obj);
             nextsps = item.nextSteps;
             console.log(item.nextSteps);
         }
  });

  var addnextstepquery = `
  mutation {
processCheckEvent (storeId: "2055", checkId:"`+action.cid+`", newCheckEvent: {
eventTime: "2017-06-22T10:15:30+05:30",
eventType: "STORECHECKCHANGED",
status:"Red",
modifiedBy:{
          userId:"Mr. Test user 2"
},
nextSteps:
[${obj2arg(nextsps, { noOuterBraces: true })}]

})
   {checkInfo{checkId},status}
}
`;

  //utility.ajaxUtilityAPI(addnextstepquery, "ADD_NEXT_STEP");

  var a = {
      questions: [ ...state.questions ]
  };
  return a;




  case 'EDIT_NEXT_STEP_GQL' :
    console.log("Edit next steps.#GQL");
    var extstatus;
    var nextsps;
    checks.forEach(function(item){
           if(item.checkInfo.checkId === action.cid)
           {
               console.log("Editing/Replacing: ");
               console.log(action.data);
               console.log("Size: "+item.nextSteps.length);

               var nid = action.nid;
               var allnxsps = item.nextSteps;
               var index;

               for(var i=0; i<allnxsps.length; i++) {
                 if(allnxsps[i].nextStepId === nid) {
                   index = i;
                 }
               }

               item.nextSteps[index] = action.data;

               nextsps = item.nextSteps;
               extstatus = item.status;

               console.log("New NS Obj :");
               console.log(item.nextSteps[index]);
           }
    });

    var editnextstepquery = `
    mutation {

  processCheckEvent (storeId: "2055", checkId:"`+action.cid+`", newCheckEvent: {
  eventTime: "2017-06-22T10:15:30+05:30",
  eventType: "STORECHECKCHANGED",
  status:"`+extstatus+`",
  modifiedBy:{
            userId:"Mr. Test user 3"
  },
  nextSteps:
    [${obj2arg(nextsps, { noOuterBraces: true })}]

  })
     {checkInfo{checkId}, status}
  }
  `;

    //utility.ajaxUtilityAPI(editnextstepquery, "EDIT_NEXT_STEP");

    var a = {
        questions: [ ...state.questions ]
    };
    return a;




    case 'CHANGE_STATUS_GQL' :
      console.log("Change status to Green....#GQL");
      console.log(state);
      var nextsps;
      checks.forEach(function(item){
             console.log("check");
             if(item.checkInfo.checkId === action.cid)
             {
                 console.log("Changing status: "+action.cid);
                 item.status = "green";
                 console.log(item.nextSteps);
                 nextsps = item.nextSteps;
                 console.log("Done...");
             }
      });

      var changestatusquery = `
mutation {
  processCheckEvent (storeId: "2055", checkId:"`+action.cid+`", newCheckEvent: {
    eventTime: "2017-06-25T10:15:30+05:30",
    eventType: "STORECHECKCHANGED",
    status:"Green",
    modifiedBy:{
              userId:"Test User 1"
    },
    nextSteps:
    [${obj2arg(nextsps, { noOuterBraces: true })}]
  })
       {checkInfo{checkId}, status}
}
`;

    //utility.ajaxUtilityAPI(changestatusquery, "CHANGE_STATUS_CHECK");  //ORIGINAL
    //utility.ajaxUtilityAPITemp(changestatusquery, "CHANGE_STATUS_CHECK", action.dispMethod);  //NEW ORIGINAL

      var a = {
          questions: [ ...state.questions ]
      };
      return a;






      case 'CHANGE_STATUS_NS_GQL' :
        console.log("Change status to Closed of NextStep....#GQL");
        console.log(state);
        var nextsps;
        checks.forEach(function(item){
               console.log("check");
               if(item.checkInfo.checkId === action.cid)
               {
                 console.log("Changing status: "+action.cid);

                 var nid = action.nid;
                 var allnxsps = item.nextSteps;
                 var index;

                 for(var i=0; i<allnxsps.length; i++) {
                   if(allnxsps[i].nextStepId === nid) {
                     index = i;
                   }
                 }

                 item.nextSteps[index].status = "Closed";
                 console.log(item.nextSteps);
                 nextsps = item.nextSteps;
                 console.log("Done...");
               }
        });

        var changestatusNSquery = `
  mutation {
    processCheckEvent (storeId: "2055", checkId:"`+action.cid+`", newCheckEvent: {
      eventTime: "2017-06-25T10:15:30+05:30",
      eventType: "STORECHECKCHANGED",
      status:"Green",
      modifiedBy:{
                userId:"Test User Me"
      },
      nextSteps:
      [${obj2arg(nextsps, { noOuterBraces: true })}]
    })
         {checkInfo{checkId}, status}
  }
  `;

      alert(changestatusNSquery);
      //utility.ajaxUtilityAPI(changestatusNSquery, "CHANGE_STATUS_NS_GQL");

        var a = {
            questions: [ ...state.questions ]
        };
        return a;



//#################### GRAPHQL_CHANGE ########################




//################## OLD_WAY ###################
/*        case 'ADD_QUESTIONS' :
            var a = {
              questions: [ ...state.questions,
                action.data
              ]
            };
            return a;
            break;


        case 'UPDATE_QUESTIONS' :
            state.questions.forEach(function(item){
              if(item.QUESTIONID === action.payload) {
                item.STATUS = "GREEN";
              }
            });
            var a = {
              questions: [ ...state.questions ]
            };
            return a;
            break;


          case 'ADD_NEXT_STEP' :
            console.log("Add next steps");
            state.questions.forEach(function(item){
                   if(item.QUESTIONID === action.qid)
                   {
                       console.log("adding: "+action.data);
                       console.log("Size: "+item.NEXTSTEPS.length);

                        let siz = item.NEXTSTEPS.length;
                       let obj = action.data;
                       obj.id = siz + 1;
                       console.log(obj);
                       item.NEXTSTEPS.push(obj);
                       console.log(item.NEXTSTEPS);
                   }
            });

            var a = {
                questions: [ ...state.questions ]
            };
            return a;



            case 'EDIT_NEXT_STEP' :
              console.log("Edit next steps");
              state.questions.forEach(function(item){
                     if(item.QUESTIONID === action.qid)
                     {
                         console.log("Editing/Replacing: ");
                         console.log(action.data);
                         console.log("Size: "+item.NEXTSTEPS.length);

                         var nid = action.nid;
                         var allnxsps = item.NEXTSTEPS;
                         var index;

                         for(var i=0; i<allnxsps.length; i++) {
                           if(allnxsps[i].id === parseInt(nid)) {
                             index = i;
                           }
                         }

                         item.NEXTSTEPS[index] = action.data;

                         console.log("New NS Obj :");
                         console.log(item.NEXTSTEPS[index]);
                     }
              });

              var a = {
                  questions: [ ...state.questions ]
              };
              return a;


              case 'CHANGE_STATUS' :
                console.log("Change status to Green....");
                state.questions.forEach(function(item){
                       if(item.QUESTIONID === action.qid)
                       {
                           console.log("Changing status: "+action.qid);
                           item.STATUS = "red";
                           console.log("Done...");
                       }
                });

                var a = {
                    questions: [ ...state.questions ]
                };
                return a;
*/
//################## OLD_WAY ###################


       	default:
            return state;
    }

}


// ajaxUtility(query) {
//   console.log("AJax call for ChangeStatusQuery.!!!!");
//   //var _this = this;
//   $.ajax({
//   type: "POST",/*method type*/
//   contentType: "application/graphql; charset=utf-8",
//   headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
//   url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",/*Target function that will be return result*/
//   data: query,/*parameter pass data is parameter name param is value */ //{"data":"' + param + '"}
//   dataType: "json",
//   success: function(data) {
//          console.log("GraphQL Books Output: ");
//          console.log(data);
//          //_this.setState({books:data});
//          alert("Success");
//   },
//   error: function(result) {
//       alert("Error");
//   }
//   });
//   console.log("done ajax request.. ChangeStatusQuery");
// }
