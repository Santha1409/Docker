import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {getBookReview_Thunk, getSignOff_Thunk} from '../../../actions/index';     //OLD REDUCER
import {getBookReview_Thunk, getSignOff_Thunk} from '../../../actions/signOffActions';     //NEW REDUCER
import QueryGenerator from '../../../utilities/QueryGenerator';
import Utility from '../../../utilities/Utility';

class ReviewDetails extends React.Component {

   constructor(props) {
     super(props);
     this.state = {
       role: ""
     };
   }


   componentWillMount() {
     console.log("Component Will Mount: ReviewDetails");
     this.props.getBookReview_Thunk(this.props.params.bid, this.props.params.rid);
   }


   handleRedirect(){
       browserHistory.push('/audits');
   }

  //  handleChange(e) {
  //    let role = this.refs["reviewerrole"].value;
  //    let note = this.refs["signoffnote"].value;
  //    console.log("Role : ", role, note);
  //  }

   signOff(e, reviewId) {
     e.preventDefault();
     let role = this.refs["reviewerrole"].value;
     let note = this.refs["signoffnote"].value;
     let reviewid = this.props.params.rid;
     let user = "User VNH";
     console.log("Role : ", role, note, reviewid, user);
     this.props.getSignOff_Thunk(reviewid, user, role);
   }



   componentWillReceiveProps(nextProps) {
     console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... ReviewDetails!!!!!");
      // this.setState({
      //   done: false
      // });
     console.log(this.props);
     //************When we are about to receive new update from Props... Then it will be called.*************
     console.log(nextProps.signingOff);
     console.log(this.props.signingOff);

      if(nextProps.signingOff === false && this.props.signingOff === true){    //ORIGINAL
       //if(nextProps.completingChecks != this.props.completingChecks){    //COMPLIANCE
         //if(nextProps.completingChecks === false) {
         console.log("Rendering BrowseReviews now... After Ajax Response..NEW");

         //this.setState({done: true});

         // Rx.Observable.of(1,2,3)
         //this.rxutility.setObs();

         //console.log("NOTIFYING....");
         //rxutility.setObs();                //WORKS PERFECTLY.

         browserHistory.push("/audits");

         //}
       //}
     }

   }


   toggleSignForm(e) {
      e.preventDefault();
      if(this.refs["signoffform"].style.display === "none") {
          this.refs["signoffform"].style.display = "block";
      }
      else {
          this.refs["signoffform"].style.display = "none";
      }
      //$("#signoffform").show();
   }


   render() {
      console.log("Rendering: ReviewDetails");
      console.log(this.props.params.bid, this.props.params.rid);
      console.log(this.props.books)


      //LOADING
      var loadingBookReview = null;
       if(this.props.loadingBookReview) {
        loadingBookReview = (
          <div className="alert alert-danger">
              Loading <strong>Book Review!</strong> Please Wait... !!!!!!
          </div>
        );
      }

      //PROCESSING
      var signingOff = null;
       if(this.props.signingOff) {
        signingOff = (
          <div className="alert alert-danger">
              <strong>Signing Off!</strong> Please Wait... !!!!!!
          </div>
        );
      }

    if(this.props.books[0] !== undefined)
    {
      let bookid = this.props.books[0].bookInfo.bookId;
      let bookname = this.props.books[0].bookInfo.bookName;
      let bookforms = this.props.books[0].bookInfo.forms;
      let reviewchecks = this.props.books[0].review.checks;
      let reviewstatus = this.props.books[0].review.status;
      let week = this.props.books[0].review.reviewInfo.reviewTime.week;
      let day = this.props.books[0].review.reviewInfo.reviewTime.day;
      let rdateTime = this.props.books[0].review.reviewInfo.reviewTime.dateTime;

      let signofflen = this.props.books[0].review.signOffs.length;

      /*
      let reviewerrole = "";
      let revieweruserid = "";
      let reviewersignofftime = "";
      if(this.props.books[0].review.signOffs[signofflen - 1] !== undefined) {
        let reviewerrole = this.props.books[0].review.signOffs[signofflen - 1].reviewerRole;
        let revieweruserid = this.props.books[0].review.signOffs[signofflen - 1].reviewer.userId;
        let reviewersignofftime = this.props.books[0].review.signOffs[signofflen - 1].reviewSignOffTime;
      }
      */


      let reviewerrole = this.props.books[0].review.signOffs[signofflen - 1].reviewerRole;
      let revieweruserid = this.props.books[0].review.signOffs[signofflen - 1].reviewer.userId;
      let reviewersignofftime = this.props.books[0].review.signOffs[signofflen - 1].reviewSignOffTime;

      let reviewnote = "reviewed";//this.props.books[0].review.signOffs[signofflen - 1].reviewNotes.value;


      let checklen = reviewchecks.length;
      console.log("CheckLen : ", checklen);

      console.log("Missing Checks");
      let missedChecks = reviewchecks.filter( (item) => {
          console.log(item);
          return item.status === "TODO";
      });
      let misschecklen = missedChecks.length;
      console.log("MissedCheckLen :", misschecklen);


      console.log("Green Checks");
      let greenChecks = reviewchecks.filter( (item) => {
          return item.status === "Green";
      });
      let greenchecklen = greenChecks.length;
      console.log("GreenCheckLen :", greenchecklen);


      console.log("Red Checks");
      let redChecks = reviewchecks.filter( (item) => {
          return item.status === "red";
      });
      let redchecklen = redChecks.length;
      console.log("RedCheckLen :", redchecklen);



      let bookformchecks;
      bookformchecks = bookforms.map(form => {
        return (
        <div className="row onHover">
          <div className="col-sm-12 col-md-11 col-lg-12">

          <div className="row">
          <div className="col-md-6 tchec">
              <label>Week</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {week} </strong> </p>
              <label>Book</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {bookid} </strong> </p>
          </div>
          <div className="col-md-5 tchecl">
            <label>Day</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {day} </strong> </p>
            <label>Form</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {form} </strong> </p>
          </div>
          </div>

          <div className="row">
            <div className="col-lg-2 col-sm-2 col-md-2">
              <label>Checks</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {checklen} </strong> </p>
            </div>
            <div className="col-lg-2 col-sm-2 col-md-2">
              <label>Missed</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {misschecklen} </strong> </p>
            </div>
            <div className="col-lg-2 col-sm-2 col-md-2">
              <label>Green</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {greenchecklen} </strong> </p>
            </div>
            <div className="col-lg-2 col-sm-2 col-md-2">
              <label>Red</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {redchecklen} </strong> </p>
            </div>
            <div className="col-lg-2 col-sm-2 col-md-2">
              <label>Answered</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> 0 </strong> </p>
            </div>
          </div>

          </div>
        </div>
      );
      });

      return (
      <div className="container">

        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-6">

        {loadingBookReview}
        {signingOff}

        <div className="row backbutton">
          <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
            <span style={{fontSize:"1.5rem",color:"#333333"}}> View Review Signoff </span>
            <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
          </div>
        </div>


        <div className="row">
          <div className="col-md-6 tchec">
            <label>Review Date Time</label>
            <p style={{padding: "-5px 0 0 0"}}> <strong> {rdateTime} </strong>  </p>
          </div>
          <div className="col-md-5 tchecl">
            <label>Reviewed</label>
            <p style={{padding: "-5px 0 0 0"}}> <strong> {reviewersignofftime} </strong> </p>
          </div>
        </div>






        <Link to={"/reviewchecks/"} >
          <div className="list-group">
           <div className="row">
            <div className="col-sm-12 col-md-11 col-lg-12 tchecs">
                  {bookformchecks}
            </div>
           </div>
          </div>
        </Link>


         <p> Select role to sign off that all checks have been completed and Next Steps recorded for Red’s  </p>
         <p> </p>

        <div className="row" style={{border: "1px groove #A9A9A9", padding: "10px 0 0 10px", margin: "-10px 0 10px 4px"}}>
          <div className="col-md-4 tchec">
              <label>Review Role</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {reviewerrole} </strong> </p>
              <label>Review Name</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {revieweruserid} </strong> </p>
              <label>Review Note</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {reviewnote} </strong> </p>
          </div>
          <div className="col-md-7 tchecl">
            <label>Review Status</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {reviewstatus} </strong> </p>
            <label>Review SignOffTime</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {reviewersignofftime} </strong> </p>
          </div>
        </div>





        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-12">

          <button className="btn" onClick={this.toggleSignForm.bind(this)}> Sign Off Here....</button>

          <div id="signoffform" ref="signoffform" className="stay-in-touch noborder" style={{display: "none"}}>
          <form className="stay-in-touch-form">
              <p><label>Role:</label></p>
              <select ref="reviewerrole" value={this.state.role}>
                <option selected disabled>--Select Role--</option>
                <option value="Team Manager"> Team Manager</option>
                <option value="Lead Manager" disabled> Lead Manager</option>
                <option value="Store Manager" disabled> Store Manager</option>
              </select>
              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-11">
                    <p><label>Enter Sign Off Note:</label></p>
                    <input ref="signoffnote" type="text" name="note" placeholder="Enter signoff note" />
                </div>
              </div>
              <button style={{margin : "10px 5px 5px 0"}} className="btn" onClick={this.signOff.bind(this)}>Sign Off </button>
          </form>
          </div>

        </div>
        </div>

      </div>
      </div>
      </div>

    );

    } else {
      console.log("No Book Review AVAILABLE yet.")
      console.log("Loading data Please Wait...!!!!!");
      return (<p style={{color: "#a94442"}}> No data available yet. Loading data Please Wait...!!!!!</p>);
    }



   }

}

//export default ReviewDetails;


function mapStateToProps(state) {
    return {
        // loadingBookReview: state.questions.loadingBookReview,       //OLD REDUCER
        // books: state.questions.bookReview,
        // signingOff: state.questions.signOffStart

        loadingBookReview: state.getSignOff.loadingBookReview,       //NEW REDUCER
        books: state.getSignOff.bookReview,
        signingOff: state.getSignOff.signOffStart
    };
}


function matchDispatchToProps(dispatch){
    console.log("props dispatch :BrowseReviews");
    return bindActionCreators({ getBookReview_Thunk: getBookReview_Thunk, getSignOff_Thunk: getSignOff_Thunk, dispatch: dispatch}, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(ReviewDetails);



//          <select ref="reviewerrole" value={this.state.role} onChange={this.handleChange} >
