import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//import {getReviews_Thunk, fetchBooks, fetchBooksDone} from '../../../actions/index';    //OLD REDUCER
import {getReviews_Thunk, fetchBooks, fetchBooksDone} from '../../../actions/signOffActions';    //NEW REDUCER
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import $ from 'jquery';
import Reviews from './Reviews';
import styles from './reviewstyle.css';
//import styles from './bookformstyle.css';

import QueryGenerator from '../../../utilities/QueryGenerator';
import Utility from '../../../utilities/Utility';

class BrowseReviews extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books : "",
      bookId: "",
      submit: false,
      query: "",
      loading: false
    };

    //######### INITIALIZE UTILITY #########
    this.utility = new Utility();
    console.log("Utility Is Created...");
    this.utility.welcome();

    this.queryGenerator = new QueryGenerator();
    console.log("QueryGenerator Utility Is Created...");
    this.queryGenerator.welcome();
    //######### INITIALIZE UTILITY #########

  }

  componentWillMount() {
    console.log("Component Will Mount: BrowseReviews");

    //FETCH ALL REVIEWS
    //this.props.getReviews_Thunk();    //ORIGINAL

    //FETCH BOOKS
    this.props.fetchBooks(); //THUNK
    var querybooks2 = this.queryGenerator.getBooksQuery();    //THUNK
    let _this = this;
    this.utility.ajaxUtilityPromise(querybooks2,"FETCH_BOOKS_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"
      _this.props.fetchBooksDone();
      _this.setState({books: data});

    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });

  }


  handleRoleChange(e) {
    console.log("handleRoleChange : BrowseReviews");
    this.setState({role: e.target.value});
    //FETCH ALL REVIEWS
    this.props.getReviews_Thunk(e.target.value);
  }


  handleChange(e) {
    //alert(e.target.value);
    this.setState({bookId:e.target.value});
    console.log("handleChange");
  }


  handleRedirect(){
      //browserHistory.goBack();
      //browserHistory.push("/profile");
      $("#mainprofile").show();
      $("#placeholder").hide();
      //browserHistory.push('/checksRoutes');   //PERFECT.

      $("#incompleteChecks").show();     //COMPLIANCE
      //$("#forceUpdate").click();         //COMPLIANCE
  }


  handleSubmit(e) {
    e.preventDefault();

    this.setState({submit: true});

    var fromdate = this.refs["fromdate"].value;
    var todate = this.refs["todate"].value;

    var bookid = this.refs["book"].value;
    var formid = this.refs["form"].value;
    console.log("fromDate, toDate, and BookId values..");
    console.log(fromdate, todate, bookid);

  }


  render() {

    //LOADING
    var loading = null;
     if(this.props.loadingReviews) {        //this.props.fetchingg ||
      loading = (
        <div className="alert alert-danger">
            Loading <strong>Reviews!</strong> Please Wait... !!!!!!
        </div>
      );
    }

    var reviews;
    if(this.state.bookId !== "") {
      reviews = (<Reviews bookid={this.state.bookId}/>);
    }

    //BOOKS
    var booksElement;
    if(this.state.books.data !== undefined) {
     booksElement = this.state.books.data.getStore.booksByTimePeriod.map(function(book) {
        return (
                <option value={book.bookInfo.bookId}> {book.bookInfo.bookName} </option>
        )
      });
    }

    return (
      <div className="container">

        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-6">



          <div className="row backbutton">
            <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
              <span style={{fontSize:"1.5rem",color:"#333333"}}> Browser Reviewer Actions </span>
              <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
            </div>
          </div>

          {loading}


                    <div className="col-sm-12 col-md-12 col-lg-12 stay-in-touch noborder ">
                    <form onSubmit={this.handleSubmit.bind(this)} className="formpadding stay-in-touch-form ">
                    <div className="row">
                      <div className="col-sm-6 col-md-6 col-lg-6 form-group">
                        <label for="usr">Date From:</label>
                        <input ref="fromdate" type="date" className="form-control" id="usr"/>
                      </div>
                      <div className="col-sm-6 col-md-6 col-lg-6 form-group">
                        <label for="pwd">Date To:</label>
                        <input ref="todate" type="date" className="form-control" id="pwd"/>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12 form-group">
                        <label for="role">Role:</label>
                        <select ref="reviewerrole" value={this.state.role} style={{width:"100%"}} onChange={this.handleRoleChange.bind(this)}>
                          <option selected disabled>--Select Role--</option>
                          <option value="Team Manager">Team Manager</option>
                          <option value="Lead Manager" disabled>Lead Manager</option>
                          <option value="Store Manager" disabled>Store Manager</option>
                        </select>
                      </div>

                      </div>
                      <div className="row">
                      <div className="col-sm-12 col-md-12 col-lg-12 form-group">
                        <label for="book">Book:</label>
                        <select ref="book" value={this.state.bookId} style={{width:"100%"}} onChange={this.handleChange.bind(this)} >
                          <option selected disabled>--Select Book--</option>
                          {booksElement}
                        </select>
                      </div>
                      </div>

                    </form>
                    </div>

          {reviews}


        </div>
        </div>
        </div>
    );

  }
}

//export default BrowseReviews;


function mapStateToProps(state) {
    console.log("state props :BrowseReviews");
    console.log(state);

    return {
        //fetchingg: state.questions.loadingBooks,
/*        reviews: state.questions.reviews,           //OLD REDUCER
        loadingReviews: state.questions.loadingReviews */

        reviews: state.getSignOff.reviews,            //NEW REDUCER
        loadingReviews: state.getSignOff.loadingReviews
    };
}

function matchDispatchToProps(dispatch){
    console.log("props dispatch :BrowseReviews");
    return bindActionCreators({ fetchBooks: fetchBooks, fetchBooksDone: fetchBooksDone, getReviews_Thunk: getReviews_Thunk, dispatch: dispatch}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BrowseReviews);
