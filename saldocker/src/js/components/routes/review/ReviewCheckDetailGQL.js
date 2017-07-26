import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {updateQuestions, changeStatusForQGQL, fetching, changeStatusForQGQL_Thunk} from '../../../actions/index';
//import styles from './checkdetailstyle.css';
class ReviewCheckDetailGQL extends Component {

    handleRedirect(){
        browserHistory.push('/reviewchecks');
        //browserHistory.push('/reviewcheckdetail/'+this.params); //CHANGEDD
        //browserHistory.goBack();   //ISSUES
    }


    viewnstep(e) {
      this.refs["viewnstep"].click();
    }

    render() {
        console.log("Rendering : CheckDetailGQL");

        const checkid = this.props.params.cid;
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

          )
        });


        return (
          <div className="container">

            <div className="row">
            <div className="col-sm-12 col-md-11 col-lg-6">




              <div className="row backbutton">
                <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
                  <span style={{fontSize:"1.5rem",color:"#333333"}}> View Report Check </span>
                  <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
                </div>
              </div>


              <ul className="mainnav">
                <li className="active"><a data-toggle="tab" href="#home">Details</a></li>
                <li><a data-toggle="tab" href="#menu1" ref="viewnstep">Next Steps</a></li>
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade in active" style={{clear: "left"}}>
                <div>
                    <h3>{check.TEXT}</h3>
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


function mapStateToProps(state) {
    console.log("CheckDetailGQL STORE...");
    console.log(state);
    return {
//        questions: state.questions.bookReview[0].review.checks   //OLD REDUCER

        questions: state.getSignOff.bookReview[0].review.checks  //NEW REDUCER
    };
}


//export default CheckDetail
export default connect(mapStateToProps, null)(ReviewCheckDetailGQL);
