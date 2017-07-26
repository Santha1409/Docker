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


//################## FETCHING & FILLING STORE ####################

/*
function AjaxUtilityAPI(dispatch, queryToRun, forWhat) {
  console.log("## AjaxUtilityAPI Running ##");
  console.log("Query :");
  console.log(queryToRun);

  dispatch(fetching());

  $.ajax({
  type: "POST",
  contentType: "application/graphql; charset=utf-8",
  headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
  url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",
  data: queryToRun,
  dataType: "json",
  success: function(data) {
         console.log("GraphQL Output: "+forWhat);
         console.log(data);
         console.log("**!!!!! Filling STORE !!!!!**");
         dispatch(fillStore(data));
         //alert("Success");
  },
  error: function(result) {
      alert("Error");
  }
  });
  console.log("Ajax Request Done: "+forWhat);
}
*/


export const getNewChecks = (dispatch, query) => {
  console.log("getNewChecks Action Creator.");
  //AjaxUtilityAPI(dispatch, query, "FETCH_CHECKS__BOOK_FORM");
}

//################## FETCHING & FILLING STORE ####################








//################## GRAPHQL_CHANGE.##################
export const fetching = () => {
    console.log("Fetching data... Please Wait..!!! ");
    return {
        type: 'FETCHING'
    }
};


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


export const fillStore = (storedata) => {
    console.log("Filling Store..: ");
    return {
        type: 'FILL_STORE',
        data: storedata
    }
};

//----------
export const fetchingAddNotes = () => {
    console.log("Fetching data... AddNotes..Please Wait..!!! ");
    return {
        type: 'FETCHING_AN'
    }
};

export const fillStoreAddNotes = (storedata) => {
    console.log("Filling Store..AddNotes..: ");
    return {
        type: 'FILL_STORE_AN',
        data: storedata
    }
};
//-----------

//----------
export const fetchingAddNextSteps = () => {
    console.log("Fetching data... AddNextSteps..Please Wait..!!! ");
    return {
        type: 'FETCHING_ANS'
    }
};

export const fillStoreAddNextSteps = (storedata) => {
    console.log("Filling Store..AddNextSteps..: ");
    return {
        type: 'FILL_STORE_ANS',
        data: storedata
    }
};
//-----------

//----------
export const fetchingEditNextSteps = () => {
    console.log("Fetching data... EditNextSteps..Please Wait..!!! ");
    return {
        type: 'FETCHING_ENS'
    }
};

export const fillStoreEditNextSteps = (storedata) => {
    console.log("Filling Store..EditNextSteps..: ");
    return {
        type: 'FILL_STORE_ENS',
        data: storedata
    }
};
//-----------


//----------
export const fetchingChangeStatusChecks = () => {
    console.log("Fetching data... ChangeStatusChecks..Please Wait..!!! ");
    return {
        type: 'FETCHING_CSC'
    }
};

export const fillStoreChangeStatusChecks = (storedata) => {
    console.log("Filling Store..ChangeStatusChecks..: ");
    return {
        type: 'FILL_STORE_CSC',
        data: storedata
    }
};
//-----------

//----------
export const fetchingChangeStatusNS = () => {
    console.log("Fetching data... ChangeStatusNS..Please Wait..!!! ");
    return {
        type: 'FETCHING_CSNS'
    }
};

export const fillStoreChangeStatusNS = (storedata) => {
    console.log("Filling Store..ChangeStatusNS..: ");
    return {
        type: 'FILL_STORE_CSNS',
        data: storedata
    }
};
//-----------





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






export const addNextStepForQGQL = (cid, data) => {
    console.log("NextStep for Question : ", cid);
    console.log("data: "+data);
    return {
        type: 'ADD_NEXT_STEP_GQL',
        cid: cid,
        data: data
    }
};

export const editNextStepForQGQL = (cid, nid, data) => {
    console.log("Edit NextStep for Question : ", cid, nid);
    console.log("data: "+data);
    return {
        type: 'EDIT_NEXT_STEP_GQL',
        cid: cid,
        nid: nid,
        data: data
    }
};


export const changeStatusForQGQL = (cid, dispatch) => {
    console.log("Change Status for Question : ", cid, dispatch);
    return {
        type: 'CHANGE_STATUS_GQL',
        cid: cid,
        dispMethod: dispatch
    }
};

export const changeStatusNextStepGQL = (cid, nid) => {
    console.log("Change Status of NextStep : ", cid, nid);
    return {
        type: 'CHANGE_STATUS_NS_GQL',
        cid: cid,
        nid: nid
    }
};

//################## GRAPHQL_CHANGE.##################



//########################WITH THUNK #########################
//THUNK Action Creator.....

//##0
export const getNewChecks_Thunk = (bookid, formid) => {
  console.log("getNewChecks Action Creator.  THUNK");

  return (dispatch, getState) => {

    try {
        dispatch(fetching());
    }
    catch(err) {
        console.log("Error is: ");
        console.log(err);
    }

    var checksquery = queryGenerator.getChecksQuery(bookid, formid);
    utility.ajaxUtilityPromise(checksquery,"FETCH_CHECKS__BOOK_FORM_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"
      console.log("**!!!!! Filling STORE !!!!!**");
      dispatch(fillStore(data));

    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });

  };

}



//##01
export const getComplianceMutationChecks_Thunk = (bookid, formid) => {
  console.log("getComplianceMutationChecks_Thunk Action Creator.  THUNK");

  return (dispatch, getState) => {

    try {
        dispatch(fetching());
    }
    catch(err) {
        console.log("Error is: ");
        console.log(err);
    }

    var complianceMutationChecksQuery = queryGenerator.getComplianceMutationChecksQuery(bookid, formid);
    utility.ajaxUtilityPromise(complianceMutationChecksQuery,"COMPLIANCE_MUTATION_CHECKS_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"

      console.log("**!!!!! Filling STORE !!!!!**");
      dispatch(fillStore(data.data.processComplianceEvent));

      //---------------------------------------------------------------
/*    let complianceId = data.data.processComplianceEvent.complianceId;
      console.log(complianceId);

      var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceid);
      utility.ajaxUtilityPromise(checksByComplianceIDQuery, "CHECKS_COMPLIANCEID_THUNK").then(function(response) {
        console.log("Success");
        console.log(response);
        dispatch(fillStore(response));
      }, function(error){
        console.log("Error");
        console.log(error);
      }) */
      //---------------------------------------------------------------



    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });

  };

}



//##02
export const getChecksByComplianceID_Thunk = (complianceid) => {
  console.log("getChecksByComplianceID_Thunk Action Creator.  THUNK");

  return (dispatch, getState) => {

    try {
        dispatch(fetching());
    }
    catch(err) {
        console.log("Error is: ");
        console.log(err);
    }

    //let complianceId = getState().data.complianceId;
    //console.log(complianceId);

    var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceid);
    utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"
      console.log("**!!!!! Filling STORE !!!!!**");
      dispatch(fillStore(data.data.getStore.compliance));

    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });

  };

}



//##1
export const changeStatusForQGQL_Thunk = (cid) => {
    console.log("Change Status for Question THUNK : ", cid);

    return (dispatch, getState) => {
      console.log("dispatch and getState");
      console.log(dispatch);
      console.log(getState());

      try {
          dispatch(fetchingChangeStatusChecks());
      }
      catch(err) {
          console.log("Error is: ");
          console.log(err);
      }


      console.log("Calling AjaxUtilityPromise......");
      //var changestatusquery = generateQuery(getState, cid);
      var changestatusquery = queryGenerator.getChangeStatusQuery(getState, cid);
      //AjaxUtilityPromise(changestatusquery,"CHANGE_STATUS_GQL_THUNK").then(function(result) {
      utility.ajaxUtilityPromise(changestatusquery,"CHANGE_STATUS_GQL_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

        //----------------ORIGINAL-----------------
        /*let bookid = getState().questions.data.getStore.books[0].bookInfo.bookId;
        let formid = getState().questions.data.getStore.books[0].bookInfo.forms[0];

        //var checksquery = generateQueryChecks(bookid, formid);
        var checksquery = queryGenerator.getChecksQuery(bookid, formid);
        //AjaxUtilityPromise(checksquery, "CHECKS_QUERY").then(function(response) {
        utility.ajaxUtilityPromise(checksquery, "CHECKS_QUERY_THUNK").then(function(response) {
          console.log("Success");
          console.log(response);
          dispatch(fillStore(response));
        }, function(error){
          console.log("Error");
          console.log(error);
        }) */
        //----------------ORIGINAL-----------------

        //----------------COMPLIANCE-----------------
        //let complianceId = getState().questions.data.complianceId;     //OLD REDUCER
        let complianceId = getState().getChecks.data.complianceId;      //NEW REDUCER
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStoreChangeStatusChecks(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        });
        //----------------COMPLIANCE-----------------


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };

};



//##2
export const addNextStepForQGQL_thunk = (cid, data) => {
    console.log("Add NextStep for Question THUNK: ", cid);
    console.log("data: "+data);

    return (dispatch, getState) => {

      try {
          dispatch(fetchingAddNextSteps());
      }
      catch(err) {
          console.log("Error is: ");
          console.log(err);
      }


      var addnextstepquery = queryGenerator.getAddNextStepQuery(getState, cid, data);
      utility.ajaxUtilityPromise(addnextstepquery,"ADD_NEXT_STEP_GQL_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

        //----------------ORIGINAL-----------------
        /*let bookid = getState().questions.data.getStore.books[0].bookInfo.bookId;
        let formid = getState().questions.data.getStore.books[0].bookInfo.forms[0];

        var checksquery = queryGenerator.getChecksQuery(bookid, formid);
        utility.ajaxUtilityPromise(checksquery, "CHECKS_QUERY_THUNK").then(function(response) {
          console.log("Success");
          console.log(response);
          dispatch(fillStore(response));
        }, function(error){
          console.log("Error");
          console.log(error);
        }) */
        //----------------ORIGINAL-----------------

        //----------------COMPLIANCE-----------------
//        let complianceId = getState().questions.data.complianceId;       //OLD REDUCER
        let complianceId = getState().getChecks.data.complianceId;       //NEW REDUCER
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStoreAddNextSteps(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        });
        //----------------COMPLIANCE-----------------

      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };

};



//##3
export const editNextStepForQGQL_Thunk = (cid, nid, data) => {
    console.log("Edit NextStep for Question THUNK : ", cid, nid);
    console.log("data: "+data);

    return (dispatch, getState) => {

      try {
          dispatch(fetchingEditNextSteps());
      }
      catch(err) {
          console.log("Error is: ");
          console.log(err);
      }


      var editnextstepquery = queryGenerator.getEditNextStepQuery(getState, cid, nid, data);
      utility.ajaxUtilityPromise(editnextstepquery,"EDIT_NEXT_STEP_GQL_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

        //----------------ORIGINAL-----------------
        /*let bookid = getState().questions.data.getStore.books[0].bookInfo.bookId;
        let formid = getState().questions.data.getStore.books[0].bookInfo.forms[0];

        var checksquery = queryGenerator.getChecksQuery(bookid, formid);
        utility.ajaxUtilityPromise(checksquery, "CHECKS_QUERY_THUNK").then(function(response) {
          console.log("Success");
          console.log(response);
          dispatch(fillStore(response));
        }, function(error){
          console.log("Error");
          console.log(error);
        }) */
        //----------------ORIGINAL-----------------

        //----------------COMPLIANCE-----------------
//        let complianceId = getState().questions.data.complianceId;    //OLD REDUCER
        let complianceId = getState().getChecks.data.complianceId;    //NEW REDUCER
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStoreEditNextSteps(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        });
        //----------------COMPLIANCE-----------------

      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };

};


export const changeStatusNextStepGQL_Thunk = (cid, nid) => {
    console.log("Change Status of NextStep THUNK: ", cid, nid);

    return (dispatch, getState) => {

      try {
          dispatch(fetchingChangeStatusNS());
      }
      catch(err) {
          console.log("Error is: ");
          console.log(err);
      }


      var changestatusNSquery = queryGenerator.getChangeStatusNSQuery(getState, cid, nid);
      utility.ajaxUtilityPromise(changestatusNSquery,"CHANGE_STATUS_NS_GQL_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

        //----------------ORIGINAL-----------------
        /*let bookid = getState().questions.data.getStore.books[0].bookInfo.bookId;
        let formid = getState().questions.data.getStore.books[0].bookInfo.forms[0];

        var checksquery = queryGenerator.getChecksQuery(bookid, formid);
        utility.ajaxUtilityPromise(checksquery, "CHECKS_QUERY_THUNK").then(function(response) {
          console.log("Success");
          console.log(response);
          dispatch(fillStore(response));
        }, function(error){
          console.log("Error");
          console.log(error);
        }) */
        //----------------ORIGINAL-----------------

        //----------------COMPLIANCE-----------------
//        let complianceId = getState().questions.data.complianceId;        //OLD REDUCER
        let complianceId = getState().getChecks.data.complianceId;        //NEW REDUCER
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStoreChangeStatusNS(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        });
        //----------------COMPLIANCE-----------------


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};





export const addNotes_Thunk = (note) => {
    console.log("Add Notes THUNK: ", note);

    return (dispatch, getState) => {

      try {
          dispatch(fetchingAddNotes());
      }
      catch(err) {
          console.log("Error is: ");
          console.log(err);
      }


      var addNotesQuery = queryGenerator.getAddNotesQuery(getState, note);
      utility.ajaxUtilityPromise(addNotesQuery,"ADD_NOTES_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

        //----------------COMPLIANCE-----------------
//        let complianceId = getState().questions.data.complianceId;      //OLD REDUCER
        let complianceId = getState().getChecks.data.complianceId;      //NEW REDUCER
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStoreAddNotes(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        });
        //----------------COMPLIANCE-----------------


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};



export const completeChecks_Thunk = () => {
    console.log("Complete Checks THUNK: ");

    return (dispatch, getState) => {

      try {
          dispatch(completingChecks());
      }
      catch(err) {
          console.log("Error is: ");
          console.log(err);
      }


      var completeChecksQuery = queryGenerator.getCompleteChecksQuery(getState);
      utility.ajaxUtilityPromise(completeChecksQuery,"COMPLETE_CHECKS_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

        //----------------COMPLIANCE-----------------
//        let complianceId = getState().questions.data.complianceId;        //OLD REDUCER
        let complianceId = getState().getChecks.data.complianceId;        //NEW REDUCER
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(completedChecks(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        });
        //----------------COMPLIANCE-----------------


      }, function(err) {
        console.log("Error Callback");
        console.log(err); // Error: "It broke"
      });

    };


};




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

        //----------------COMPLIANCE-----------------
        /*let complianceId = getState().questions.data.complianceId;
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStore(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        }); */
        //----------------COMPLIANCE-----------------


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

        //----------------COMPLIANCE-----------------
        /*let complianceId = getState().questions.data.complianceId;
        console.log(complianceId);

        var checksByComplianceIDQuery = queryGenerator.getChecksByComplianceIDQuery(complianceId);
        utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
          console.log("Success Callback");
          console.log(data); // "Stuff worked!"
          console.log("**!!!!! Filling STORE !!!!!**");
          dispatch(fillStore(data.data.getStore.compliance));

        }, function(err) {
          console.log("Error Callback");
          console.log(err); // Error: "It broke"
        }); */
        //----------------COMPLIANCE-----------------


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








//TEMP.. WITH THUNK ###########################
// function AjaxUtilityPromise(queryToRun, forWhat) {
//   console.log("## AjaxUtilityPromise Running ##");
//   console.log("Query :");
//   console.log(queryToRun);
//
//   var prom = new Promise(function(resolve, reject) {
//
//     //------------------------------------------
//     $.ajax({
//     type: "POST",/*method type*/
//     contentType: "application/graphql; charset=utf-8",
//     headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
//     url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",/*Target function that will be return result*/
//     data: queryToRun,/*parameter pass data is parameter name param is value */ //{"data":"' + param + '"}
//     dataType: "json",
//     success: function(data) {
//            console.log("GraphQL Promise Output: "+forWhat);
//            console.log(data);
//            console.log("**!!!!! Filling STORE !!!!!**");
//            //dispatch(fillStore(data));
//            alert("Success");
//            resolve(data);
//     },
//     error: function(error) {
//         alert("Error");
//         reject(error);
//     }
//     });
//     console.log("Ajax Request Done: "+forWhat);
//     //------------------------------------------
//
//   });
//
//     return prom;
// }

//
// function generateQuery(getState, cid) {
//   console.log("GenerateQuery");
//   var state = getState();
//   var checks = state.questions.data.getStore.books[0].checksByTimePeriod
//
//   var nextsps;
//   checks.forEach(function(item){
//          console.log("check");
//          if(item.checkInfo.checkId === cid)
//          {
//              console.log("Changing status: "+cid);
//              item.status = "green";
//              console.log(item.nextSteps);
//              nextsps = item.nextSteps;
//              console.log("Done...");
//          }
//   });
//
//   var changestatusquery = `
// mutation {
// processCheckEvent (storeId: "2055", checkId:"`+cid+`", newCheckEvent: {
// eventTime: "2017-06-25T10:15:30+05:30",
// eventType: "STORECHECKCHANGED",
// status:"Green",
// modifiedBy:{
//           userId:"Test User 1"
// },
// nextSteps:
// [${obj2arg(nextsps, { noOuterBraces: true })}]
// })
//    {checkInfo{checkId}, status}
// }
// `;
//
//   console.log(changestatusquery);
//   return changestatusquery;
//
// }


// function generateQueryChecks(bookid, formid) {
//
//   var querychecks = `
//   query
//   	{
//   	   getStore(storeId:"2055")
//   		{
//   			storeId,storeName
//   		books(bookId:"`+bookid+`") {
//   			bookInfo {
//                bookId,bookName,forms
//                },
//                checksByTimePeriod(timePeriod:{year:2017,week:17,day:1},formName : "`+formid+`")
//   			{
//   				checkInfo {
//                     checkId,
//                     checkType,
//                     checkTime
//                     {
//                         year,
//                         week,
//                         day,
//                         dateTime
//
//                     },
//                     question { questionId,	value }
//                   },
//   				status,
//   				modifiedBy{	userId },
//   				nextSteps{
//
//                           nextStepId,
//   						description {value	},
//   						assignedTo{	userId	},
//
//   				initials,
//   				status,
//   				notes{
//   						 value
//   						}
//   					}
//
//
//   			}
//
//               }
//
//
//       }
//     }
//   `;
//
//   return querychecks;
// }
//TEMP.. WITH THUNK ###########################




//################### DUMMY DATA ####################

// let query2 = `
// query {
// getStore(storeId:"2055")
//        {
//                       storeId,storeName
//                       books(bookId:"2017 P1 SL78 Trolley Collection Vehicles") {
//                                      bookId,
//                                      checks
//                                      {
//                                                     checkId,
//                                                     checkType,
//                                                     checkTime{
//                                                                    year,
//                                                                    week,
//                                                                    day,
//                                                                    hour
//                                                     },
//                                                     question {
//                                                                    questionId,
//                                                                    value
//                                                     }
//                                                     latestEvent{
//                                                                    eventId,
//                                                                    eventType,
//                                                                    status,
//                                                                    modifiedBy{
//                                                                                   userId
//                                                                    },
//                                                                    nextSteps{
//                                                                                   nextStepId,
//                                                                                   description {
//                                                                                                  value
//
//                                                                                   },
//                                                                                   assignedTo{
//                                                                                                  userId
//                                                                                                  },
//
//                                                                                   initials,
//                                                                                   status,
//                                                                                   notes{
//                                                                                   value
//                                                                                   }
//                                                                    }
//                                                     }
//                                      }
//                       }
//        }
// }
// `;
//
//
// //1st_WAY
// function fetchChecks(dispatch) {
//   console.log("Fetching inside Action Creator");
//   console.log(dispatch);
//   $.ajax({
//   type: "POST",
//   contentType: "application/graphql; charset=utf-8",
//   headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
//   url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",
//   data: query2,
//   dataType: "json",
//   success: function(data) {
//          console.log("GraphQL ajax output: ");
//          console.log(data);
//          console.log("dispatching response to fill store..!!!!!");
//          dispatch(fillStore(data));
//          alert("Success");
//   },
//   error: function(result) {
//       alert("Error");
//   }
//   });
//   console.log("done ajax request");
// }


// export const getChecks = (dispatch) => {
//   console.log("getChecks Action Creator.");
//   //fetchChecks(dispatch);  //ORIGINAL........
// }

//################### DUMMY DATA ####################







//######### WITHOUT_GRAPHQL #########
export const getQuestions = (bookid) => {
    console.log("Get Questions for Book_Id: ", bookid);
    return {
        type: 'GET_QUESTIONS',
        payload: bookid
    }
};

export const updateQuestions = (qid) => {
    console.log("Update Questions for Book_Id: ", qid);
    return {
        type: 'UPDATE_QUESTIONS',
        payload: qid
    }
};

export const addNextStepForQ = (qid, data) => {
    console.log("NextStep for Question : ", qid);
    console.log("data: "+data);
    return {
        type: 'ADD_NEXT_STEP',
        qid: qid,
        data: data
    }
};

export const editNextStepForQ = (qid, nid, data) => {
    console.log("Edit NextStep for Question : ", qid, nid);
    console.log("data: "+data);
    return {
        type: 'EDIT_NEXT_STEP',
        qid: qid,
        nid: nid,
        data: data
    }
};

export const changeStatusForQ = (qid) => {
    console.log("Change Status for Question : ", qid);
    return {
        type: 'CHANGE_STATUS',
        qid: qid
    }
};
//######### WITHOUT_GRAPHQL #########





//######### TEMP ##########
export const addQuestions = (bookid) => {
    console.log("Add Questions for Book_Id: ", bookid);
    return {
        type: 'ADD_QUESTIONS',
        payload: bookid,
        data:        {
                        "qno" : 5,
                        "answers" : [
                          "answer 1",
                          "answer 2",
                          "answer 3",
                          "answer 4"
                        ]
                      }
    }
};


export const addItem = (item) => {
    console.log("Add item: ", item.brand);
    return {
        type: 'ADD_ITEM',
        payload: item
    }
};

export const removeItem = (index) => {
    console.log("Delete item with index: ", index);
    return {
        type: 'DELETE_ITEM',
        payload: index
    }
};
//######### TEMP ##########



// export const setQuery = (dispatch) => {
//   console.log("Setting query.");
//   //console.log(q);
//   //query = q;
//   var qqq = `
//
// query {
//    getStore(storeId:"2055")
//        {
//              storeId,storeName,
//              books (bookId:"2017 P1 SL78 Trolley Collection Vehicles") {
//             	bookName, forms,
//                     checksByFormAndTimePeriod(formName:"SL78 Daily Trolley Check",timePeriod:{year:2017,period:4,week:16})
//                     {
//                            checkId, question { questionId,value},
//                            latestEvent{
//                                  status, nextSteps{nextStepId, assignedTo{userId},initials,status,notes{value}, description{value}}
//                            }
//                     }
//              }
//        }
// }
//
//   `;
//   fetchChecks2(dispatch, qqq);
//   //console.log(query);
//   console.log("query Set...done");
// }
