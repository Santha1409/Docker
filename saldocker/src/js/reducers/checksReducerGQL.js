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
      checks = state.data.checks;     //COMPLIANCE
      console.log("CHECKS FOUND.....!!!!!!!!");
      console.log(checks);
    }
    else {
      console.log("CHECKS NOT AVAILABLE NOW...!!!!!!!!");
    }


    switch (action.type) {

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


        //######### FILLING STORE ############
        case 'FILL_STORE' :
            console.log("Filling STORE....");
            console.log(state);

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

                state = {
                  ...state,               //COMPLIANCE  //.map undefined property...
                  data: action.data,
                  loadingCSNSteps: false
                }

                console.log(state);
                return state;
                break;






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





       	default:
            return state;
    }

}
