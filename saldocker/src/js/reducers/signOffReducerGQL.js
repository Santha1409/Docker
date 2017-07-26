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


            //######### FILLING BOOKS ############
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



              //######### SIGN_OFF_DATA ############
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


          //######### FILLING REVIEW_DATA ############
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












       	default:
            return state;
    }

}
