import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CheckDetailsPData extends Component {

    handleRedirect(){
        browserHistory.push('/progressdetails/'+this.props.params.bid); //CHANGEDD
        //browserHistory.goBack();   //ISSUES
    }


    render() {
        console.log("Rendering : CheckDetailsPData");

        const bookid = this.props.params.bid;
        console.log(bookid);
        const foundbook = this.props.progressData.filter(book => {
            if(book.bookInfo.bookId === bookid) {
                return book;
            }
        });
        const book = foundbook[0];
        console.log(book);

        const checkid = this.props.params.cid;
        console.log(checkid);
        const foundcheck = book.checksByTimePeriod.filter(check => {
            if(check.checkInfo.checkId === checkid) {
                return check;
            }
        });
        const check = foundcheck[0];
        console.log(check);


        const res = check.nextSteps.map( (item) => {
          var ln = item.notes.length;
          return (
              <div  className="col-sm-12 col-md-11 col-lg-12 nextStepShadow onHover">

                <p style={{padding:" 0px 0px 10px 0px"}}> Opened: <strong>{item.status}</strong> </p>
                <p style={{padding:" 0px 0px 10px 0px"}}> Assinged: <strong>{item.assignedTo.userId}</strong> </p>
                <p style={{padding:" 0px 0px 10px 0px"}}> Initials: <strong>{item.initials}</strong> </p>
                <p style={{padding:" 0px 0px 10px 0px"}}> Next Step: <strong>{item.nextStepId}</strong> </p>
                <p style={{padding:" 0px 0px 10px 0px"}}> Notes: <strong>{item.notes[ln-1].value}</strong>  </p>
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

                  <div>
                    {res}
                  </div>

          </div>
          </div>

        </div>
        );
    }
}


function mapStateToProps(state) {
    console.log("CheckDetailsPData STORE...");
    console.log(state);
    return {
//        progressData: state.questions.progressData   //OLD REDUCER

          progressData: state.getSignOff.progressData   //NEW REDUCER
    };
}


//export default CheckDetailsPData
export default connect(mapStateToProps, null)(CheckDetailsPData);
