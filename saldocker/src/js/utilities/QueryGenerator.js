import obj2arg from 'graphql-obj2arg';

export default class QueryGenerator {
    // constructor(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }

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
      console.log("Welcome To QueryGenerator Utility.!!!!!!!!!");
    }


    getBooksQuery() {
      console.log("QueryGenerator: GetBooksQuery");

      let querybooks = `
      query
                     {
                        getStore(storeId:"2055")
                                    {
                                                   storeId,storeName
                                    booksByTimePeriod(timePeriod:{year:2017,period:4}) {
                                                   bookInfo {
                   bookId,bookName
                   }
                   }
                   }
                   }

      `;

      return querybooks;
    }



    getFormsQuery(bookid) {
      console.log("QueryGenerator: GetFormsQuery");

      let queryforms = `
      query
                 {
                    getStore(storeId:"2055")
                                {
                                               storeId,storeName
                                books(bookId:"`+bookid+`" ) {
                                               bookInfo {
               bookId, forms
               }
               }
               }
               }
      `;

      return queryforms;
    }



    getChecksQuery(bookid, formid) {
      console.log("QueryGenerator: GetChecksQuery");
      var querychecks = `
      query
      	{
      	   getStore(storeId:"2055")
      		{
      			storeId,storeName
      		books(bookId:"`+bookid+`") {
      			bookInfo {
                   bookId,bookName,forms
                   },
                   checksByTimePeriod(timePeriod:{year:2017,week:17,day:1},formName : "`+formid+`")
      			{
      				checkInfo {
                        checkId,
                        checkType,
                        checkTime
                        {
                            year,
                            week,
                            day,
                            dateTime

                        },
                        question { questionId,	value }
                      },
      				status,
      				modifiedBy{	userId },
      				nextSteps{

                              nextStepId,
      						description {value	},
      						assignedTo{	userId	},

      				initials,
      				status,
      				notes{
      						 value
      						}
      					}


      			}

                  }


          }
        }
      `;

      return querychecks;
    }





    getAddNextStepQuery(getState, cid, data){
      console.log("QueryGenerator: GetAddNextStepQuery");
      var state = getState();
      //var checks = state.questions.data.getStore.books[0].checksByTimePeriod;         //ORIGINAL

//      var checks = state.questions.data.checks;        //COMPLIANCE   //OLD REDUCER
      var checks = state.getChecks.data.checks;        //NEW REDUCER

      var nextsps;
      checks.forEach(function(item){
             if(item.checkInfo.checkId === cid)
             {
                 console.log("adding: "+data);
                 console.log("Size: "+item.nextSteps.length);

                 let siz = item.nextSteps.length;
                 let obj = data;
                 console.log(obj);
                 item.nextSteps.push(obj);
                 nextsps = item.nextSteps;
                 console.log(item.nextSteps);
             }
      });

      var addnextstepquery = `
      mutation {
    processCheckEvent (storeId: "2055", checkId:"`+cid+`", newCheckEvent: {
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

      console.log(addnextstepquery);
      return addnextstepquery;
    }




    getEditNextStepQuery(getState, cid, nid, data) {
      console.log("QueryGenerator: GetEditNextStepQuery");
      var state = getState();
      //var checks = state.questions.data.getStore.books[0].checksByTimePeriod;         //ORIGINAL

      //      var checks = state.questions.data.checks;        //COMPLIANCE   //OLD REDUCER
            var checks = state.getChecks.data.checks;        //NEW REDUCER

      var extstatus;
      var nextsps;
      checks.forEach(function(item){
             if(item.checkInfo.checkId === cid)
             {
                 console.log("Editing/Replacing: ");
                 console.log(data);
                 console.log("Size: "+item.nextSteps.length);

                 //var nid = action.nid;
                 var allnxsps = item.nextSteps;
                 var index;

                 for(var i=0; i<allnxsps.length; i++) {
                   if(allnxsps[i].nextStepId === nid) {
                     index = i;
                   }
                 }

                 item.nextSteps[index] = data;

                 nextsps = item.nextSteps;
                 extstatus = item.status;

                 console.log("New NS Obj :");
                 console.log(item.nextSteps[index]);
             }
      });

      var editnextstepquery = `
      mutation {

    processCheckEvent (storeId: "2055", checkId:"`+cid+`", newCheckEvent: {
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

    console.log(editnextstepquery);
    return editnextstepquery;
    }




    getChangeStatusNSQuery(getState, cid, nid) {
      console.log("QueryGenerator: GetChangeStatusNSQuery");
      var state = getState();
      //var checks = state.questions.data.getStore.books[0].checksByTimePeriod;         //ORIGINAL

      //      var checks = state.questions.data.checks;        //COMPLIANCE   //OLD REDUCER
            var checks = state.getChecks.data.checks;        //NEW REDUCER

      var nextsps;
      checks.forEach(function(item){
             console.log("check");
             if(item.checkInfo.checkId === cid)
             {
               console.log("Changing status: "+cid);

               //var nid = action.nid;
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
  processCheckEvent (storeId: "2055", checkId:"`+cid+`", newCheckEvent: {
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

    console.log(changestatusNSquery);
    return changestatusNSquery;
    }





    getChangeStatusQuery(getState, cid) {
        console.log("QueryGenerator: GetChangeStatusQuery");
        var state = getState();
        //var checks = state.questions.data.getStore.books[0].checksByTimePeriod;         //ORIGINAL

        //      var checks = state.questions.data.checks;        //COMPLIANCE   //OLD REDUCER
              var checks = state.getChecks.data.checks;        //NEW REDUCER

        var nextsps;
        checks.forEach(function(item){
               console.log("check");
               if(item.checkInfo.checkId === cid)
               {
                   console.log("Changing status: "+cid);
                   item.status = "green";
                   console.log(item.nextSteps);
                   nextsps = item.nextSteps;
                   console.log("Done...");
               }
        });

        var changestatusquery = `
      mutation {
      processCheckEvent (storeId: "2055", checkId:"`+cid+`", newCheckEvent: {
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

        console.log(changestatusquery);
        return changestatusquery;
    }




//############## STORE COMPLIANCE QUERIES ################

getComplianceMutationChecksQuery(bookid, formid) {
    console.log("QueryGenerator: GetComplianceMutationQuery");

    var complianceMutationChecksQuery = `

    mutation {

processComplianceEvent (storeId:"2055",
newComplianceEvent : {
eventTime: "2017-06-19T10:15:30+05:30",
eventType: "NEWSTORECOMPLIANCE",

status:"Incomplete",
bookId:"`+bookid+`",
form:"`+formid+`",
           notes:
           [
                          { value:"note VN",valueType:"text NH"},
                          { value:"note SN",valueType:"text NH"}
           ]

})


{complianceId, status, bookId, form, notes{value, valueType}, checks {

checkInfo{
 checkId,
 checkType,
 checkTime{
year, week, day, dateTime},
 question{
questionId, value},
 availableNextSteps{description {value}}
},

status,
modifiedBy{userId},
nextSteps{
 nextStepId,
 description {value},
 assignedTo {userId},
 initials,
 status,
 notes{value}
}
}}

}

    `;



    return complianceMutationChecksQuery;
}


getChecksByComplianceIDQuery(complianceid) {
    console.log("QueryGenerator: GetChecksByComplianceIDQuery");

    var checksByComplianceIDQuery = `


query
{
   getStore(storeId:"2055")
  {
    compliance(complianceId: "`+complianceid+`")
    {
      complianceId, bookId, form, hour, status,
      notes{value, valueType},
      checks {

checkInfo{
   checkId,
   checkType,
   checkTime{
  year, week, day, dateTime},
   question{
  questionId, value},
   availableNextSteps{description {value}}
},

status,
modifiedBy{userId},
nextSteps{
   nextStepId,
   description {value},
   assignedTo {userId},
   initials,
   status,
   notes{value}
}
}
    }
    }
}


    `;



    return checksByComplianceIDQuery;
}



getAddNotesQuery(getState, data) {
  console.log("QueryGenerator: GetAddNotesQuery");
  var state = getState();
  //var checks = state.questions.data.getStore.books[0].checksByTimePeriod;         //ORIGINAL

  //let notes = state.questions.data.notes;        //COMPLIANCE  //OLD REDUCER
  //let complianceid = state.questions.data.complianceId;
  //let extstatus = state.questions.data.status;
  //let bookid = state.questions.data.bookId;
  //let formid = state.questions.data.form;

    let notes = state.getChecks.data.notes;        //NEW REDUCER
    let complianceid = state.getChecks.data.complianceId;
    let extstatus = state.getChecks.data.status;
    let bookid = state.getChecks.data.bookId;
    let formid = state.getChecks.data.form;

  let note =   {  value: data,
                  valueType: "text"
               };
  notes.push(note);
  console.log("Notes is:");
  console.log(JSON.stringify(notes));



  var addNotesQuery = `
  mutation {

    processComplianceEvent (
         storeId:"2055",complianceId:"`+complianceid+`",
    newComplianceEvent : {
      eventTime: "2017-06-13T10:15:30+05:30",
      eventType: "STORECOMPLIANCECHANGED",

      status:"`+extstatus+`",
      bookId:"`+bookid+`",
      form:"`+formid+`",
      notes: [${obj2arg(notes, { noOuterBraces: true })}]
    })
         {complianceId}
  }
`;

console.log(addNotesQuery);
return addNotesQuery;
}



getCompleteChecksQuery(getState) {
  console.log("QueryGenerator: GetCompleteChecksQuery");
  var state = getState();
  //var checks = state.questions.data.getStore.books[0].checksByTimePeriod;         //ORIGINAL

/*  let notes = state.questions.data.notes;        //COMPLIANCE   //OLD REDUCER
  let complianceid = state.questions.data.complianceId;
  let bookid = state.questions.data.bookId;
  let formid = state.questions.data.form; */

  let notes = state.getChecks.data.notes;        //NEW REDUCER
  let complianceid = state.getChecks.data.complianceId;
  let bookid = state.getChecks.data.bookId;
  let formid = state.getChecks.data.form;

  var completeChecksQuery = `
  mutation {

    processComplianceEvent (
         storeId:"2055",complianceId:"`+complianceid+`",
    newComplianceEvent : {
      eventTime: "2017-06-13T10:15:30+05:30",
      eventType: "STORECOMPLIANCECHANGED",

      status:"Completed",
      bookId:"`+bookid+`",
      form:"`+formid+`",
      notes: [${obj2arg(notes, { noOuterBraces: true })}]
    })
         {complianceId}
  }
`;

console.log(completeChecksQuery);
return completeChecksQuery;
}




getInCompleteChecksQuery() {
  console.log("QueryGenerator: GetInCompleteChecksQuery");

  var InCompleteChecksQuery = `
  query
	{
	   getStore(storeId:"2055")
		{
			complianceByDate(localDate:"2017-06-19", status: "Incomplete")
			{
				complianceId,
        bookId,
        form,
        hour,
        status
			}
		}
}
`;

console.log(InCompleteChecksQuery);
return InCompleteChecksQuery;
}



getProgressDataQuery() {
  console.log("QueryGenerator: GetProgressDataQuery");

  var ProgressDataQuery = `
  query
               {
                  getStore(storeId:"2055")
                              {
                                             storeId,storeName
                              books {
                                             bookInfo {
             bookId,bookName,forms
             },
             checksByTimePeriod(timePeriod:{year:2017,period:4,week:17,day:3})
                                             {
                                                            checkInfo {
                  checkId,
                  question { questionId,  value }
                },
                                                            status,
                                                            nextSteps{

                        nextStepId,
                                                                                          description {value             },
                                                                                          assignedTo{        userId    },
                                                            initials,
                                                            status,
                                                            notes{
                                                                                          value
                                                                                          }
                                                                           }
                                             }

            }


    }
  }

`;

console.log(ProgressDataQuery);
return ProgressDataQuery;
}



getReviewsQuery(role) {
  let reviewsQuery = `
  query
{
   getStore(storeId:"2055")
  {
    storeId,storeName
  booksByTimePeriod(timePeriod:{year:2017,period:4}) {
    bookInfo {
           bookId,bookName,forms
           },
           reviewsBetweenDates(startDate:"2017-06-19",endDate:"2017-07-05",reviewerRole:"`+role+`") {

             reviewInfo {
             reviewId,
             reviewTime{
               year,period,week,day
             }
             },
             signOffs { reviewSignOffTime }

           }
          }
         }
      }
  `;

  console.log(reviewsQuery);
  return reviewsQuery;
}


getBookReviewQuery(bookid, reviewid) {

  let bookreviewQuery = `
  query
{
   getStore(storeId:"2055")
  {
    storeId,storeName
  books(bookId:"`+bookid+`") {
    bookInfo {
           bookId,bookName,forms
           },
           review(id:"`+reviewid+`") {

             reviewInfo {
               reviewId,
               reviewTime{
	               dateTime, year,period,week,day
               }
             } ,
             status,
             signOffs {
              reviewerRole, reviewNotes {value}, reviewer {userId} , reviewSignOffTime
             },


             checks{

                  checkInfo {
                    checkId,
                    checkType,
                    checkTime
                    {
                      year,
                      week,
                      day,
                      dateTime

                    },
                    question { questionId,  value }
                  },
                  status,
                  modifiedBy{ userId },
                  nextSteps{
                    nextStepId,
                    description {value},
                    assignedTo {userId},
                    initials,
                    status,
                    notes {value}
                  }

              }




           }
          }
         }
      }

  `;

  console.log(bookreviewQuery);
  return bookreviewQuery;
}









getSignOffQuery(reviewid, user, role) {

  let signOffQuery = `
  mutation {

    processStoreReviewSignOffEvent (storeId: "2055", reviewId:"`+reviewid+`", newReviewEvent: {
      eventTime: "2017-05-31T10:15:30+05:30",
      eventType: "STOREREVIEWSIGNOFF",
      signOff:
      {
        reviewNotes:[
            {
              value: "Completed",
              valueType: "text"
            }
        ],
        reviewer:{
         userId:"`+user+`"
        },
        reviewerRole:"`+role+`"
    }

    })
    { reviewInfo{reviewId}}
  }

  `;

  console.log(signOffQuery);
  return signOffQuery;
}




//############## STORE COMPLIANCE QUERIES ################

}
