import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//import {addNextStepForQ, editNextStepForQ, changeStatusForQ} from '../../../actions/index';
//import {addNextStepForQGQL, editNextStepForQGQL, changeStatusForQGQL, changeStatusNextStepGQL} from '../../../actions/index';

//import {addNextStepForQGQL_thunk, editNextStepForQGQL_Thunk, changeStatusForQGQL_Thunk, changeStatusNextStepGQL_Thunk} from '../../../actions/index';  //OLD REDUCER
import {addNextStepForQGQL_thunk, editNextStepForQGQL_Thunk, changeStatusForQGQL_Thunk, changeStatusNextStepGQL_Thunk} from '../../../actions/checksActions';     //NEW REDUCER

import styles from './nsformstyle.css';

class NSFormGQL extends React.Component {

  constructor(props) {
    super(props);
    this.nsobj = null;
    this.state = {
        description:"",
        assignedTo: "",
        initials: "",
        status:"",
        notes: "",
        date: "",
        snextstep: ""
    };
  }

  initializeVariables() {
    console.log("...Initialize Variables...NSForm");

    let action = this.props.params.action;
    let cid = this.props.params.qid;
    let nid = this.props.params.nid;
    var obj;

    if(action === "add")
    {
      console.log("ADD action is triggered.. RETURN");
      return;
    }
    else {
      console.log("EDIT action is triggered.. MODIFY");
      console.log("CDM fetch existing record: "+cid+"-"+nid);
    this.props.questions.forEach(function(item){
           if(item.checkInfo.checkId === cid)
           {
             console.log("Cid Matched..");
             console.log(item.nextSteps.length);
             obj =  item.nextSteps.filter((ele) => {
                        console.log("Nid matched..");
                        console.log(ele.nextStepId, nid);
                        //return (ele.id === parseInt(nid));//ORIGINAL
                        return (ele.nextStepId === nid);
                    });
              console.log(obj);
           }
    });

    this.nsobj = obj;
    var ln = this.nsobj[0].notes.length;
    console.log("EDIT: Found Object..");
    console.log(this.nsobj);
     this.setState({
       description:this.nsobj[0].description.value,
       assignedTo: this.nsobj[0].assignedTo.userId,
       initials: this.nsobj[0].initials,
       status:this.nsobj[0].status,
       notes: this.nsobj[0].notes[ln-1].value,
       date: this.nsobj[0].date,
       snextstep: this.nsobj[0].snextstep
     });

    console.log("new Obj");
    console.log(this.nsobj);
    }
  }


  componentWillMount() {
    console.log("will mount.............");
    this.initializeVariables();
  }

  componentDidMount() {
    console.log("Did mount.............");
    this.initializeVariables();
  }


  handleRedirect(e){
      //browserHistory.push('/checks');
      //browserHistory.goBack();
      e.preventDefault();                 //V.V.V.V.V.Important....
                              //ISSUE... It was Bubbling this event and causing form submission..... INVALID...
                              //SOLUTION:  Add e.preventDefault(); to prevent this method/event from event bubbling.......

      console.log("Redirected NSForm...!!!");
      const action = this.props.params.action;
      const cid = this.props.params.qid;
      const nid = this.props.params.nid;
      if(action === "edit"){
        console.log("Changing Staus of NextStep now... Closing NextStep.");

        //ORIGINAL
//        this.props.changeStatusNextStepGQL(cid, nid);

        //THUNK
        this.props.changeStatusNextStepGQL_Thunk(cid, nid);

      }else {
        console.log("Just ReDirecting.......");
      }

      //browserHistory.push('/checkdetail/'+this.props.params.qid);   //NEW processing....
  }



  handleRedirectCancel() {
    console.log("Cancel Form Filling...");
    browserHistory.push('/checkdetail/'+this.props.params.qid);
  }



  componentWillReceiveProps(nextProps) {
    console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... NSFormGQL!!!!!");
    var checkdetailpath = "/checkdetail/" + this.props.params.qid;
    //************When we are about to receive new update from Props... Then it will be called.*************
    if(nextProps.processingAddNS === false && this.props.processingAddNS === true ||
       nextProps.processingEditNS === false && this.props.processingEditNS === true ||
       nextProps.processingCSNSteps === false && this.props.processingCSNSteps === true ){          //ORIGINAL
      console.log("Rendering CheckDetails now... After Ajax Response..NSFormGQL");
      $("#mainprofile").hide();
      $("#bookform2").hide();
      //$("#incompleteChecks").hide();       //COMPLIANCE
      $("#placeholder").show();
      browserHistory.push(checkdetailpath);
    }

  }



  formChanged(event) {
    console.log("Form Changed.");
    let action = this.props.params.action;

    if(action === "add") {
      console.log("ADD action is triggered.. RETURN");

      this.setState({
        description:this.refs["description"].value,
        notes: this.refs["notes"].value,
        assignedTo: this.refs["assigned"].value,
        initials: this.refs["initials"].value,
        status: this.refs["status"].value,
        snextstep: this.refs["snextstep"].value
      });

    }
    else if(action === "edit") {
      console.log("EDIT action is triggered.. MODIFY");
      const field = event.target.name;

      //ORIGINAL
      //this.nsobj[0][field] = event.target.value;   //ORIGINAL

      //GRAPHQL
      var len = this.nsobj[0].notes.length;

      if(field === "notes"){
        this.nsobj[0].notes[len-1] = {value: event.target.value};
      }
      else if(field === "assignedTo"){
        this.nsobj[0][field].userId = event.target.value;
      }
      else if(field === "description") {
        this.nsobj[0][field].value = event.target.value;
      }
      else {
        this.nsobj[0][field] = event.target.value;
      }

      this.setState({
        description:this.nsobj[0].description.value,
        assignedTo: this.nsobj[0].assignedTo.userId,
        initials: this.nsobj[0].initials,
        status:this.nsobj[0].status,
        notes: this.nsobj[0].notes[len-1].value,
        date: this.nsobj[0].date,
        snextstep: this.nsobj[0].snextstep
      });

      console.log("Edited object");
      console.log(this.nsobj[0]);
    }
    else
    console.log("NOTHING");
  }


  handleSubmit(e) {
    e.preventDefault();

    const action = this.props.params.action;
    const cid = this.props.params.qid;
    const nid = this.props.params.nid;

    //Getting Number of NextSteps Already Present...
    var noofns;
    this.props.questions.forEach(function(item){
           if(item.checkInfo.checkId === cid)
           {
             console.log("Cid Matched..");
             noofns =  item.nextSteps.length;
           }
    });
    var nss = noofns+1;

    let formData;
    if(action === "add")
    {
         console.log("Add action.. Forming Object..");
         formData = {};

         //GRAPHQL CHANGE
         formData =  {
               nextStepId: "02a12d6a-f5fe-4f91-ba5zxcvzxcSS"+nss,
               description: {
                            value: this.refs["description"].value,
                            valueType:"text"
               },
               assignedTo: {
                  userId: this.refs["assignedTo"].value
               },
               initials: this.refs["initials"].value,
               status: "open",
               notes: [
                         { value: this.refs["notes"].value,
                           valueType:"text"
                         }
                      ]

          }
    }
    else if(action === "edit")
    {
       console.log("Edit action.. Forming Object..");
       formData = {};
       formData = this.nsobj[0];
       console.log(this.nsobj[0]);
       //formData.checkId = this.nsobj[0].checkId; //ORIGINAL
    }
    else
       console.log("No action specified...");

    //ORIGINAL
//    for(const field in this.refs) {
//      formData[field] = this.refs[field].value;
//    }
//   formData["date"] = "24 May 2017 15:45";   //formData["date"] = new Date();



  //EXAMPLE NEXT_STEP SHOULD BE...
  // {
  //      nextStepId: "02a12d6a-f5fe-4f91-ba50-029a7a6b1dsads",
  //      description: {
  //                   value:"Order new sand via Click2 Order",
  //                   valueType:"text"
  //      },
  //      assignedTo: {
  //         userId:"testUserId"
  //      },
  //      initials:"DV",
  //      status:"Closed"
  //      notes:[
  //                          { value:"note1",valueType:"text"},
  //                          { value:"note2",valueType:"text"}
  //            ]
  //
  //   }


    if(action === "add")
    {
      console.log("Add action called..");
      console.log(formData);
      //ORIGINAL
//      this.props.addNextStepForQGQL(cid, formData);
//      this.props.changeStatusForQGQL(cid);        //ITS NOT WORKING.. TRY TO REMOVE.

      //THUNK
      this.props.addNextStepForQGQL_thunk(cid, formData);
      //this.props.changeStatusForQGQL(cid);  //NO USE.
    }
    else if(action === "edit")
    {
      console.log("Edit action called..");
      console.log(formData);
      //ORIGINAL
//      this.props.editNextStepForQGQL(cid, nid, formData);

      //THUNK
      this.props.editNextStepForQGQL_Thunk(cid, nid, formData);
    }
    else
      console.log("NO Action Mentioned...");

      //browserHistory.goBack();   //ORIGINAL
      //this.handleRedirect();
  }


  render() {

    var checkdetailpath = "/checkdetail/" + this.props.params.qid;

    //############### Loading #########
    var loading = null;
    //if(this.props.fetchingg) {
    if(this.props.processingAddNS) {
      loading = (
        <div className="alert alert-danger">
            <strong>Processing!</strong> Please Wait... !!!!!!
        </div>
      );
    }

    if(this.props.processingCSNSteps) {
      loading = (
        <div className="alert alert-danger">
            <strong>Processing!</strong> Please Wait... !!!!!!
        </div>
      );
    }

    if(this.props.processingEditNS) {
      loading = (
        <div className="alert alert-danger">
            <strong>Processing!</strong> Please Wait... !!!!!!
        </div>
      );
    }
    //############### Loading #########

    return (

      <div className="container">

        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-6">


            {loading}

        <div className="stay-in-touch noborder">
          <form className="stay-in-touch-form">


          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
              <span style={{fontSize:"1.5rem",color:"#333333"}}> EDIT NEXT STEP </span>
            </div>
          </div>

            <p> </p>
            <p> </p>

            <div className="row">
              <div className="col-md-6">
                <p><label>Next Step Opened:</label> {this.state.date} </p>
                <p><label>Status:</label> {this.state.status} </p>
              </div>
              <div className="col-md-6">
                <button type="button1" style={{float:"right"}} className="btn" onClick={this.handleRedirect.bind(this)}>Close next step</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                  <select id="snextstep" name="snextstep" ref="snextstep" value={this.state.snextstep} onChange={this.formChanged.bind(this)} disabled>
                      <option value="" default>--Select Next Steps--</option>
                      <option value="FreqUsed">Frequently Used</option>
                      <option value="BankOffice">Back Office</option>
                      <option value="SRM">SRM</option>
                      <option value="Security">Security</option>
                  </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                  <p><label>Description</label></p>
                  <input ref="description" type="text" name="description" placeholder="Enter text" value={this.state.description} onChange={this.formChanged.bind(this)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                  <p><label>Notes</label></p>
                  <input ref="notes" type="text" name="notes" placeholder="Enter text" value={this.state.notes} onChange={this.formChanged.bind(this)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <p><label >Assigned</label></p>
                <input ref="assignedTo" type="text" name="assignedTo" placeholder="Enter text" value={this.state.assignedTo} onChange={this.formChanged.bind(this)}/>
              </div>
              <div className="col-md-6 col-lg-6">
                <p><label >Initials</label></p>
                <input ref="initials" type="text" name="initials" placeholder="Enter text" value={this.state.initials} onChange={this.formChanged.bind(this)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-2">
                <div onClick={this.handleSubmit.bind(this)} style={{display: "inline"}}>
                    {/* <Link to={checkdetailpath}> */}
                      <p><input type="submit" name="addsubmited" value="Save" onClick99={this.handleSubmit.bind(this)} /></p>
                    {/*</Link> */}
                </div>
              </div>
              <div className="col-sm-2">
                <p><input name="reset" type="reset" value="Cancel" onClick={this.handleRedirectCancel.bind(this)}/></p>
              </div>
            </div>

          </form>
        </div>


    </div>
    </div>
    </div>
    );

  }
}


function matchDispatchToProps(dispatch){
    console.log("NSFormGQL props dispatch");
    //return bindActionCreators({addNextStepForQ: addNextStepForQ, editNextStepForQ: editNextStepForQ, changeStatusForQ: changeStatusForQ, addNextStepForQGQL:addNextStepForQGQL, editNextStepForQGQL:editNextStepForQGQL, changeStatusForQGQL:changeStatusForQGQL, changeStatusNextStepGQL:changeStatusNextStepGQL, addNextStepForQGQL_thunk: addNextStepForQGQL_thunk, editNextStepForQGQL_Thunk: editNextStepForQGQL_Thunk, changeStatusNextStepGQL_Thunk: changeStatusNextStepGQL_Thunk}, dispatch);
    return bindActionCreators({addNextStepForQGQL_thunk: addNextStepForQGQL_thunk, editNextStepForQGQL_Thunk: editNextStepForQGQL_Thunk, changeStatusNextStepGQL_Thunk: changeStatusNextStepGQL_Thunk}, dispatch);
}

function mapStateToProps(state) {
    console.log("NSFormGQL STORE...");
    console.log(state);
    return {
/*        questions: state.questions.data.checks,           //COMPLIANCE   //OLD REDUCER
        //fetchingg: state.questions.loadingData,
        processingAddNS: state.questions.loadingAddNS,
        processingEditNS: state.questions.loadingEditNS,
        processingCSNSteps: state.questions.loadingCSNSteps */

        questions: state.getChecks.data.checks,           //NEW REDUCER
        processingAddNS: state.getChecks.loadingAddNS,
        processingEditNS: state.getChecks.loadingEditNS,
        processingCSNSteps: state.getChecks.loadingCSNSteps
    };
}

//export default NSForm
export default connect(mapStateToProps, matchDispatchToProps)(NSFormGQL);

//questions: state.questions.getStore.books[0].checksByFormAndTimePeriod  //NEW-0


                  //<input type="submit" name="addsubmited" value="Save" onClick={this.handleSubmit.bind(this)}/>

// Notes: <input ref="notes"  type='text' name="notes" value={this.nsobj[0].notes} onChange={this.formChanged.bind(this)}/>
// Assigned: <input ref="assigned"  type='text' name="assigned" value={this.nsobj[0].assigned} onChange={this.formChanged.bind(this)}/>
// Initials: <input ref="initials"  type='text' name="initials" value={this.nsobj[0].initials} onChange={this.formChanged.bind(this)}/>
