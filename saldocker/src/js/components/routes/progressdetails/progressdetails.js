import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateQuestions} from '../../../actions/index';
import ProgressDetailsComp from './progressdetailscomp';

class ProgressDetails extends Component {

    handleRedirect(){
        browserHistory.push('/progress');
    }

    handleUpdate(e) {
        console.log(e.target.value);
        this.props.updateQuestions(e.target.value);
        browserHistory.push('/progress');
    }

    viewnstep(e) {
      this.refs["viewnstep"].click();
    }

    render() {

        const checks = this.props.route.data;
        const id = this.props.params.pid;

        // Filter check with ID
        const foundcheck = checks.questions.filter(check => {
            if(check.QUESTIONID == id) {
                return check;
            }
        });

        const check = foundcheck[0];

        //<p> {item.id} </p>
        // const res = check.NEXTSTEPS.map( (item) => {
        //   return (
        //     <Link to={"/nextstep/edit/"+check.QUESTIONID+"/"+item.id} >
        //       <div style={{border: "1px solid grey", margin:"10px"}} className="col-md-6">
        //         <p> Opened: {item.date} </p>
        //         <p> Assinged: {item.assigned} </p>
        //         <p> Initials: {item.initials} </p>
        //         <p> Next Step: {item.snextstep}</p>
        //         <p> Notes: {item.notes} </p>
        //       </div>
        //     </Link>
        //   )
        // });


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



        // const checksNode = check.questions.map((item) => {
        //   //let bookstring;
        //   //bookstring=item.FORM;
        //   //let book =bookstring.substring(0,4);
        //     return (
        //
        //       <div>
        //         <div className="row">
        //           <div className="col-sm-12 tchecs">
        //           <ProgressDetailsComp status={item.STATUS} questiontext={item.TEXT} questionid={item.QUESTIONID}  />
        //           </div>
        //         </div>
        //       </div>
        //
        //     )
        //
        //
        // });

        return (

          <div className="row">
           <div className="col-md-12">

            <div className="container">
              <button onClick={this.handleRedirect.bind(this)} className="button arrow-back"> BACK </button>
              <h2>About Check...!!!!</h2>
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Details</a></li>
                <li><a data-toggle="tab" href="#menu1" ref="viewnstep">References</a></li>
              </ul>

              <div className="tab-content">


                <div id="home" className="tab-pane fade in active">
                <div>

                <div>
                  <div className="list-group">
                       <div className="row">
                         <div className="col-sm-6 tchecs">
                          <ProgressDetailsComp qid={check.QUESTIONID} status={check.STATUS} questiontext={check.TEXT} questionid={check.QUESTIONID}  />
                          </div>
                        </div>
                    </div>
                    </div>


                </div>
                </div>

                <div id="menu1" className="tab-pane fade row">
                <div className="row">
                  <div className="col-md-12">
                   {res}
                  </div>
                </div>
                </div>

              </div>

            </div>

            </div>
            </div>
        );
    }
}


function matchDispatchToProps(dispatch){
    console.log("props dispatch");
    return bindActionCreators({updateQuestions: updateQuestions}, dispatch);
}



//export default CheckDetail
export default connect(null, matchDispatchToProps)(ProgressDetails);

ProgressDetails.defaultProps = {

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
