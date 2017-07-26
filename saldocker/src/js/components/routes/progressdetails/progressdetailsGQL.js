import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {updateQuestions} from '../../../actions/index';
import ProgressDetailsComp from './progressdetailscomp';

class ProgressDetailsGQL extends Component {

    handleRedirect(){
        browserHistory.push('/progress');
    }

    // handleUpdate(e) {
    //     e.preventDefault();
    //     console.log(e.target.value);
    //     browserHistory.push('/progress');
    // }

    viewnstep(e) {
      this.refs["viewnstep"].click();
    }

    render() {

        //const checks = this.props.route.data;
        const bookid = this.props.params.bid;

        // Filter check with ID
        const foundbook = this.props.progressData.filter(book => {
            if(book.bookInfo.bookId === bookid) {
                return book;
            }
        });

        const book = foundbook[0];


        let temp = [];
        let data = this.props.details;

        for(var i in data){
          temp.push({key:i, value: data[i]});
        }


        var res = temp.map((item) => {
          return (
          <div className="test col-md-3 col-sm-3 col-xs-3 tdet">
            <h5> {item.key} </h5>
            <p> {item.value} </p>
          </div>
        )
        });

        const bookchecks = book.checksByTimePeriod.map(function(check) {
            return (
              <ProgressDetailsComp qid={check.checkInfo.question.questionId} status={check.status} questiontext={check.checkInfo.question.value} bookid={book.bookInfo.bookId} checkid={check.checkInfo.checkId}  />
            );
        });


        return (

        <div className="container">

          <div className="row">
           <div className="col-sm-12 col-md-11 col-lg-6">


               <div className="row backbutton">
                 <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
                   <span style={{fontSize:"1.5rem",color:"#333333"}}> {book.bookInfo.bookName} </span>
                   <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
                 </div>
               </div>

              <p> </p>
              <ul className="mainnav">
                <li className="active"><a data-toggle="tab" href="#home">Details</a></li>
                <li><a data-toggle="tab" href="#menu1" ref="viewnstep">References</a></li>
              </ul>

              <div className="tab-content">
                <div id="home" className="tab-pane fade in active" style={{clear: "left"}}>
                <div className="col-sm-12 col-md-12">
                  {bookchecks}
                </div>
                </div>

                <div id="menu1" className="tab-pane fade row" style={{clear: "left"}}>
                  <div className="col-sm-12 col-md-12">
                   {res}
                  </div>
                </div>
              </div>



            </div>
            </div>

          </div>
        );
    }
}


// function matchDispatchToProps(dispatch){
//     console.log("props dispatch");
//     return bindActionCreators({updateQuestions: updateQuestions}, dispatch);
// }

function mapStateToProps(state) {
    console.log("ProgressDetailsGQL STORE...");
    console.log(state);
    return {
//      progressData: state.questions.progressData           //COMPLIANCE   //OLD REDUCER

      progressData: state.getSignOff.progressData           //NEW REDUCER
    };
}

//export default CheckDetail
export default connect(mapStateToProps, null)(ProgressDetailsGQL);

ProgressDetailsGQL.defaultProps = {

    details :  {
      "Date Created": "08 May 2017 14:12",
      "Created": "08 May 2017 14:12",
      "Created By": "9999.Pramod",
      "Compliance Date": "08 May 2017 00:00",
      "User Role": "Manager",
      "Owner": "9999.pramod",
      "Draft": "true",
      "IP Address": "94.125.20.102:63924",
      "Training": "No",
      "Period": "3",
      "Week": "11",
      "Day": "1",
      "Hour": "",
      "New Actions": "No",
      "Store1": "TAAP",
      "Book1": "SL33 Produce",
      "Form1": "SL33 Daily Produce Check",
      "Compliance Time": "0"
  },

  details1 : [
    {  title: "dc",  content: "8th may 2017" },
    {  title: "crd",  content: "8th may 2017"},
    {  title: "crdby", content: "vinod"},
    {  title: "cd", content: "8th may 2017"},
    {  title: "user", content: "manager"},
    {  title: "owner", content: "vinod"},
    {  title: "two", content: "true"},
    {  title: "ipaddr", content: "1.2.3.4"},
    {  title: "trng", content: "No"},
    {  title: "passed", content: 3},
    {  title: "week", content: 11},
    {  title: "hour", content: 12},
    {  title: "day", content: 1},
    {  title: "actions", content: "no"},
    {  title: "store", content: "one"},
    {  title: "block", content: "two"},
    {  title: "floor", content: "3"},
    {  title: "compltime", content: 5}
]

}
