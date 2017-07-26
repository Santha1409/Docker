import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {updateQuestions, changeStatusForQGQL, fetching, changeStatusForQGQL_Thunk} from '../../../actions/index';  //OLD REDUCER
import {changeStatusForQGQL_Thunk} from '../../../actions/checksActions';     //NEW REDUCER
import styles from './checkdetailstyle.css';
class CheckDetailGQL extends Component {

    handleRedirect(){
        //browserHistory.push('/checks'); //ORIGINAL
        browserHistory.push('/checksRoutes'); //CHANGEDD
        //browserHistory.goBack();   //ISSUES
    }

    handleUpdate(e) {
        console.log(e.target.value);
        //this.props.updateQuestions(e.target.value); //ORIGINAL

        //ORIGINAL_OLD
        //this.props.changeStatusForQGQL(e.target.value, this.props.dispatch);   //this.props.changeStatusForQGQL(e.target.value); //ORIGINAL

        //ORIGINAL
        //this.props.fetching();
        // this.props.dispatch({
        //     type: 'CHANGE_STATUS_GQL',
        //     cid: e.target.value,
        //     dispMethod: this.props.dispatch
        // });

        //THUNK
        this.props.changeStatusForQGQL_Thunk(e.target.value);

        //browserHistory.push('/checks');   //ORIGINAL
        //browserHistory.push('/checksRoutes');  //CHANGEDD  .. NOT WORKING.. CHECK WHY....
        //browserHistory.goBack();   //ISSUES
        //this.props.getNewChecks(this.props.dispatch, querychecks);   //WRONG TO PUT HERE... On response of above ajax call we have to call this.
    }


    componentWillReceiveProps(nextProps) {
      console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... CheckDetailGQL!!!!!");
      //************When we are about to receive new update from Props... Then it will be called.*************
      if(nextProps.processingCSChecks === false && this.props.processingCSChecks === true){          //ORIGINAL
        console.log("Rendering checksRoutes now... After Ajax Response..CheckDetailGQL");
        $("#mainprofile").hide();
        $("#bookform2").hide();
        //$("#incompleteChecks").hide();       //COMPLIANCE
        $("#placeholder").show();
        browserHistory.push('/checksRoutes');
      }

    }


    viewnstep(e) {
      this.refs["viewnstep"].click();
    }

    render() {
        console.log("Rendering : CheckDetailGQL");

        const checkid = this.props.params.id;
        // Filter check with ID
        console.log("Check Details....GQL... CheckId: "+checkid);
        //console.log(this.props.questions);
        const foundcheck = this.props.questions.filter(check => {
            if(check.checkInfo.checkId == checkid) {
                return check;
            }
        });

        const check = foundcheck[0];
        console.log(check);
        const res = check.nextSteps.map( (item) => {
          var ln = item.notes.length;
          return (
            <Link to={"/nextstep/edit/"+check.checkInfo.checkId+"/"+item.nextStepId} >
              <div  className="col-sm-12 col-md-11 col-lg-12 nextStepShadow onHover">
                <div className="row">
                  <div className="col-sm-6 col-md-5">
                  <p style={{padding:"0px 0px 5px 0px"}}>Opened:<strong> {item.status}</strong> </p>
                  </div>
                  <div className="col-sm-6 col-md-5" >
                  <p style={{padding:"0px 0px 5px 0px"}}>Status:<strong> {item.status}</strong> </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-5">
                     <p style={{padding:"0px 0px 5px 0px"}}>Assinged:<strong> {item.assignedTo.userId}</strong> </p>
                  </div>
                  <div className="col-sm-6 col-md-5">
                    <p style={{padding:"0px 0px 5px 0px"}}> Initials:<strong> {item.initials}</strong> </p>
                  </div>
                </div>
                <p style={{padding:"0px 0px 5px 0px"}}> Next Step: <strong>{item.nextStepId}</strong></p>
                <p style={{padding:"0px 0px 5px 0px"}}> Notes: <strong> {item.notes[ln-1].value}</strong> </p>
              </div>
            </Link>
          )
        });

        //############### Loading #########
        /*  console.log("Loadng????");
        console.log(this.props);
        console.log(this.props.fetchingg);
        console.log(this.props.questions);
        console.log("done..."); */
        var loading = null;
        //if(this.props.fetchingg) {
        if(this.props.processingCSChecks) {
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


              {loading }

              <div className="row backbutton">
                <div className="col-sm-12 col-md-11 col-lg-6" style={{width: "100%" }}>
                  <span style={{fontSize:"1.5rem",color:"#333333"}}> {this.props.formname} </span>
                  <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
                </div>
              </div>



              <ul className="mainnav">
                <li className="active"><a data-toggle="tab" href="#home">Details</a></li>
                <li><a data-toggle="tab" href="#menu1" ref="viewnstep">Next Steps</a></li>
              </ul>



              <div className="tab-content">

                <div id="home" className="tab-pane fade in active" style={{clear: "left"}}>
                    <h3>{check.TEXT}</h3>
                    <h4>{check.checkInfo.question.value} </h4>

                    <div className="row buttonAlign">
                    <div className="col-sm-11 col-md-11 col-lg-6">
                        <div onClick={this.handleUpdate.bind(this)}>
                            <button value={check.checkInfo.checkId} onClick999={this.handleUpdate.bind(this)} className="btn">Press if Green  </button>
                        </div>
                    </div>
                    </div>

                    <div className="row buttonAlign">
                      <div className="col-sm-5 col-md-5">
                        <Link to={"/nextstep/add/"+check.checkInfo.checkId+"/"+0} >
                            <button type="Accept" onClick={this.props.gotoRouting} className="btn">Add Next Step</button>
                        </Link>
                      </div>
                      <div className="col-sm-5 col-md-5">
                        <button className="btn"  onClick={this.viewnstep.bind(this)}>
                          View Next Steps
                        </button>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                           <li><strong>ROLE</strong>: Test User</li>
                           <li><strong>FORM</strong>: SL78 Daily Trolley Check</li>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                            <li><strong>SECTION</strong>: Test</li>
                            <li><strong>STATUS</strong>: {check.status}</li>
                        </ul>
                      </div>
                    </div>
                </div>


                <div id="menu1" className="tab-pane fade row" style={{clear: "left"}}>
                      {res}
                </div>

              </div>




        </div>
        </div>
        </div>

        );
    }
}

  function matchDispatchToProps(dispatch){
      console.log("props dispatch : CheckDetailGQL");
      console.log(dispatch);
      //return bindActionCreators({updateQuestions: updateQuestions, changeStatusForQGQL: changeStatusForQGQL, dispatch: dispatch, fetching: fetching, changeStatusForQGQL_Thunk: changeStatusForQGQL_Thunk}, dispatch);   //OLD REDUCER
      return bindActionCreators({dispatch: dispatch, changeStatusForQGQL_Thunk: changeStatusForQGQL_Thunk}, dispatch);   //NEW REDUCER
   }

  // function matchDispatchToProps(dispatch){
  //     console.log("props dispatch : CheckDetailGQL");
  //     console.log(dispatch);
  //     return { changeStatusForQGQL_Thunk };
  // }

  // function matchDispatchToProps(dispatch){
  //     console.log("props dispatch : CheckDetailGQL");
  //     console.log(dispatch);
  //     return { changeStatusForQGQL_Thunk };
  // }

function mapStateToProps(state) {
    console.log("CheckDetailGQL STORE...");
    console.log(state);
    return {
        // questions: state.questions.data.checks,                      //COMPLIANCE
        // formname: state.questions.data.form,                    //OLD REDUCER
        // processingCSChecks : state.questions.loadingCSChecks


        questions: state.getChecks.data.checks,                      //NEW REDUCER
        formname: state.getChecks.data.form,
        processingCSChecks : state.getChecks.loadingCSChecks
    };
}

// return {state.getStore.books[0].checksByFormAndTimePeriod
//            questions: state.questions.getStore.books[0].checksByFormAndTimePeriod  //NEW-0
//     questions: state.questions.getStore.books[0].checks  //ORIGINAL //OLDWAY ORIGINAL
// };

//export default CheckDetail
export default connect(mapStateToProps, matchDispatchToProps)(CheckDetailGQL);



//<button value={check.checkInfo.checkId} onClick={this.handleUpdate.bind(this)} className="btn">Press if Green  </button>




//<button value="Home" onClick={this.props.gotoHome} className="btn">Not Applicable</button>

/*
<Link to={"/nextstep/edit/"+check.checkInfo.checkId+"/"+item.nextStepId} >
  <div  className="col-sm-12 col-md-11 col-lg-12 nextStepShadow">
    <p> Opened: {item.status} </p>
    <p> Assinged: {item.assignedTo.userId} </p>
    <p> Initials: {item.initials} </p>
    <p> Next Step: {item.nextStepId}</p>
    <p> Notes: {item.notes[ln-1].value} </p>
  </div>
</Link> */
