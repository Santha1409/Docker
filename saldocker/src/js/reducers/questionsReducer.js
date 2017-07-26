import initialState2 from "./store";
import initialState2GQL from "./storeGQL";


export default function (state = initialState2GQL, action) {

    switch (action.type) {

        case 'GET_QUESTIONS' :
          /* return state.questions */
          /* BUG1: return state */
          return state;
          break;


        case 'ADD_QUESTIONS' :
          /* return state.questions */
          /* BUG1: return state */
          var a = {
             questions: [ ...state.questions,
               action.data
            ]
          };
          return a;
          break;


          case 'UPDATE_QUESTIONS' :
            //console.log("Update Questions reducer...");
            state.questions.forEach(function(item){
                     //console.log(item.QUESTIONID, action.payload);
                     if(item.QUESTIONID === action.payload)
                     {
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
                       //item.NEXTSTEPS.push(action.data);
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

                         item.NEXTSTEPS[index] = action.data; //updating old object with new object.

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


       	default:
            return state;
    }

}
