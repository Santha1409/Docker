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
export const fetching = () => {
    console.log("Fetching data... Please Wait..!!! ");
    return {
        type: 'FETCHING'
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
      var changestatusquery = queryGenerator.getChangeStatusQuery(getState, cid);
      utility.ajaxUtilityPromise(changestatusquery,"CHANGE_STATUS_GQL_THUNK").then(function(result) {
        console.log("Success Callback");
        console.log(result); // "Stuff worked!"

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
//########################WITH THUNK #########################
