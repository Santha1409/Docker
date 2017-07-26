import obj2arg from 'graphql-obj2arg';
import QueryGenerator from '../utilities/QueryGenerator';
import Utility from '../utilities/Utility';





//######### INITIALIZE UTILITY #########
var utility = new Utility();
console.log("Utility Is Created...");
utility.welcome();

var queryGenerator = new QueryGenerator();
console.log("QueryGenerator Utility Is Created...");
queryGenerator.welcome();
//######### INITIALIZE UTILITY #########




//################## GRAPHQL_CHANGE.##################


//FETCH BOOKS
export const fetchBooks = () => {
    console.log("Fetching Books... Please Wait..!!! ");
    return {
        type: 'FETCH_START'
    }
};

export const fetchBooksDone = () => {
    console.log("Fetched data... DONE...!!! ");
    return {
        type: 'FETCH_DONE'
    }
};



//INCOMPLETE CHECKS
export const fetchIncompleteChecks = () => {
    console.log("Fetching IncompleteChecks... Please Wait..!!! ");
    return {
        type: 'FETCH_INCOMPLETE_CHECKS_START'
    }
};


export const fillInCompleteChecksStore = (incompleteChecksdata) => {
    console.log("Filling Store..: ");
    return {
        type: 'FILL_INCOMPLETE_CHECKS',
        data: incompleteChecksdata
    }
};


//PROGRESS DATA
export const fetchProgressData = () => {
    console.log("Fetching ProgressData... Please Wait..!!! ");
    return {
        type: 'FETCH_PROGRESS_DATA_START'
    }
};


export const fillProgressDataToStore = (progressData) => {
    console.log("Filling Store with ProgressData..: ");
    return {
        type: 'FILL_PROGRESS_DATA',
        data: progressData
    }
};



//FETCH REVIEWS
export const fetchReviewsData = () => {
    console.log("Fetching Reviews... Please Wait..!!! ");
    return {
        type: 'FETCH_REVIEWS_START'
    }
};
export const fetchReviewsDone = () => {
    console.log("Fetched Reviews... DONE...!!! ");
    return {
        type: 'FETCH_REVIEWS_DONE'
    }
};
export const fillReviewsDataToStore = (reviewsData) => {
    console.log("Filling Store with Reviews Data..: ");
    return {
        type: 'FILL_REVIEWS_DATA',
        data: reviewsData
    }
};



//FETCH BOOK_REVIEW
export const fetchBookReviewData = () => {
    console.log("Fetching Book Review... Please Wait..!!! ");
    return {
        type: 'FETCH_BOOK_REVIEW_START'
    }
};
// export const fetchBookReviewDone = () => {
//     console.log("Fetched Book Review... DONE...!!! ");
//     return {
//         type: 'FETCH_BOOK_REVIEW_DONE'
//     }
// };
export const fillBookReviewDataToStore = (bookreviewData) => {
    console.log("Filling Store with Book Review Data..: ");
    return {
        type: 'FILL_BOOK_REVIEW_DATA',
        data: bookreviewData
    }
};


//SIGN OFFs
export const signOffStart = () => {
    console.log("SignOff Review Data Start..: ");
    return {
        type: 'SIGN_OFF_START'
    }
};

export const signOffDone = () => {
    console.log("SignOff Review Data Stop..: ");
    return {
        type: 'SIGN_OFF_STOP'
    }
};


//COMPLETE CHECKS
export const completingChecks = () => {
    console.log("Completing CHECKS Start..: ");
    return {
        type: 'COMPLETE_CHECKS_START'
    }
};

export const completedChecks = () => {
    console.log("Completing CHECKS Stop..: ");
    return {
        type: 'COMPLETE_CHECKS_STOP'
    }
};
//################## GRAPHQL_CHANGE.##################



//########################WITH THUNK #########################
//THUNK Action Creator.....
export const getInCompleteChecks_Thunk = () => {
    console.log("Get InComplete Checks THUNK: ");

    return (dispatch, getState) => {

       try {
           dispatch(fetchIncompleteChecks());
       }
       catch(err) {
           console.log("Error is: ");
           console.log(err);
       }


      var InCompleteChecksQuery = queryGenerator.getInCompleteChecksQuery();
      utility.ajaxUtilityPromise(InCompleteChecksQuery,"INCOMPLETE_CHECKS_THUNK").then(function(response) {
        console.log("Success Callback");
        console.log(response); // "Stuff worked!"
        console.log("**!!!!! Filling INCOMPLETE-CHECKS !!!!!**");
        dispatch(fillInCompleteChecksStore(response.data.getStore.complianceByDate));

      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};





export const getProgressData_Thunk = () => {
    console.log("Get ProgressData THUNK: ");

    return (dispatch, getState) => {

       try {
           dispatch(fetchProgressData());
       }
       catch(err) {
           console.log("Error is: ");
           console.log(err);
       }


      var ProgressDataQuery = queryGenerator.getProgressDataQuery();
      utility.ajaxUtilityPromise(ProgressDataQuery,"PROGRESS_DATA_THUNK").then(function(response) {
        console.log("Success Callback");
        console.log(response); // "Stuff worked!"
        console.log("**!!!!! Filling PROGRESS_DATA !!!!!**");
        dispatch(fillProgressDataToStore(response.data.getStore.books));

      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};




export const getReviews_Thunk = (role) => {
    console.log("Get Reviews THUNK: Role - "+role );

    return (dispatch, getState) => {

       try {
           dispatch(fetchReviewsData());
       }
       catch(err) {
           console.log("Error is: ");
           console.log(err);
       }


      var reviewsQuery = queryGenerator.getReviewsQuery(role);
      utility.ajaxUtilityPromise(reviewsQuery,"REVIEWS_THUNK").then(function(response) {
        console.log("Success Callback");
        console.log(response); // "Stuff worked!"
        console.log("**!!!!! Filling REVIEWS_DATA !!!!!**");
        dispatch(fillReviewsDataToStore(response.data.getStore.booksByTimePeriod));


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};


export const getBookReview_Thunk = (bookid, reviewid) => {
    console.log("Get Review of BOOK. THUNK: ");

    return (dispatch, getState) => {

       try {
           dispatch(fetchBookReviewData());
       }
       catch(err) {
           console.log("Error is: ");
           console.log(err);
       }


      var bookreviewQuery = queryGenerator.getBookReviewQuery(bookid, reviewid);
      utility.ajaxUtilityPromise(bookreviewQuery,"BOOK_REVIEW_THUNK").then(function(response) {
        console.log("Success Callback");
        console.log(response); // "Stuff worked!"
        console.log("**!!!!! Filling BOOK_REVIEW_DATA !!!!!**");
        dispatch(fillBookReviewDataToStore(response.data.getStore.books));


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};




export const getSignOff_Thunk = (reviewid, user, role) => {
    console.log("Get SignOff. THUNK: ");

    return (dispatch, getState) => {

       try {
           dispatch(signOffStart());
       }
       catch(err) {
           console.log("Error is: ");
           console.log(err);
       }


      var signOffQuery = queryGenerator.getSignOffQuery(reviewid, user, role);
      utility.ajaxUtilityPromise(signOffQuery,"SIGNOFF_REVIEW_THUNK").then(function(response) {
        console.log("Success Callback");
        console.log(response); // "Stuff worked!"
        console.log("**!!!!! Filling BOOK_REVIEW_DATA !!!!!**");
        dispatch(signOffDone(response));


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};
//########################WITH THUNK #########################
