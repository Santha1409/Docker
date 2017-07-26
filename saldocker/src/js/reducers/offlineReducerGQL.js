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
    //utility.ajaxUtilityAPITemp(changestatusquery, "CHANGE_STATUS_CHECK", action.dispMethod);

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



       	default:
            return state;
    }

}
