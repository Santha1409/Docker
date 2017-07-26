import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//import {getNewChecks, getNewChecks_Thunk, fetching, fetchBooks, fetchBooksDone} from '../actions/index';    //OLD REDUCER
//import {getComplianceMutationChecks_Thunk} from '../actions/index';
import {fetchBooks, fetchBooksDone} from '../actions/signOffActions';         //NEW REDUCER
import {getNewChecks_Thunk, fetching, getComplianceMutationChecks_Thunk} from '../actions/checksActions';

import RouterApp from './RouterApp';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import $ from 'jquery';
import styles from './bookformstyle.css';

import QueryGenerator from '../utilities/QueryGenerator';
import Utility from '../utilities/Utility';

class Bookform extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    /* this.ajaxUtilityTest = this.ajaxUtilityTest.bind(this); //ORIGINAL */
    this.reset = this.reset.bind(this);

    this.state = {
      books : "",
      bookId: "",
      forms : "",
      formId: "",
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
    console.log("Component Will Mount");

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


  handleChange(e) {
    //alert(e.target.value);
    this.setState({bookId:e.target.value});
    console.log("handleChange");


    this.setState({loading: true});
    var queryforms2 = this.queryGenerator.getFormsQuery(e.target.value);    //THUNK
    let _this = this;
    this.utility.ajaxUtilityPromise(queryforms2,"FETCH_FORMS_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"
      _this.setState({forms: data});
      _this.setState({loading: false});

    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });

  }


  handleChange2(e) {
    //alert(e.target.value);
    this.setState({formId:e.target.value});
  }


  reset(e){
    console.log("REsetting...");
    this.setState({
      books : "",
      bookId: "",
      forms : "",
      formId: "",
      submit: false,
      query: ""
    });

    this.setState({loading: true});
    var querybooks2 = this.queryGenerator.getBooksQuery();    //THUNK
    let _this = this;
    this.utility.ajaxUtilityPromise(querybooks2,"FETCH_BOOKS_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"
      _this.setState({books: data});
      _this.setState({loading: false});

    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    // const formData = {};
    // for (const field in this.refs) {
    //   formData[field] = this.refs[field].value;
    // }
    // console.log('-->', formData
    this.setState({submit: true});
    //$("#bookform").hide();    //PERFECT

    var bookid = this.refs["book"].value;
    var formid = this.refs["form"].value;
    console.log("Book and Form values..");
    console.log(bookid);
    console.log(formid);


    //ORIGINAL
//    this.props.getNewChecks(this.props.dispatch, querychecks);

    //THUNK
//    this.props.getNewChecks_Thunk(bookid, formid);    //NO COMPLIANCE
  this.props.getComplianceMutationChecks_Thunk(bookid, formid);   //COMPLIANCE


    //this.props.fetched();   //MAKE IT WORK..
    //console.log("called checks.");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... Bookform!!!!!");
    //************When we are about to receive new update from Props... Then it will be called.*************

    // console.log(this.props.fetchingg);
    // console.log(nextProps);
    // console.log(nextProps.fetchingg);

/*  console.log(location.pathname);
  if(location.pathname !== "/")
  { */
    //if(!this.props.fetchingg){
    if(nextProps.fetchingg === false && this.props.fetchingg === true){          //ORIGINAL
    //if(nextProps.fetchingg != this.props.fetchingg){    //COMPLIANCE
      console.log("Rendering checksRoutes now... After Ajax Response..NEW");
      $("#mainprofile").hide();
      $("#bookform2").hide();
      //$("#incompleteChecks").hide();       //COMPLIANCE
      $("#placeholder").show();
      browserHistory.push('/checksRoutes');
    }
  /*}
  else {
    // $("#mainprofile").hide();
    // $("#bookform2").show();
    // $("#placeholder").hide();
     $("#incompleteChecks").hide();
  }
  */

  }

  // shouldComponentUpdate() {
  //   console.log("Before componentWillUpdate.... shouldComponentUpdate.... Bookform!!!!!");
  // }

  componentWillUpdate() {           //Very Important Life cycle Method..
    console.log("Before Render.... componentWillUpdate.... Bookform!!!!!");
  }

  render() {
          console.log("Rendering : Bookform");
          console.log(this.props.fetchingg);


          //###### Redirecting.........AFter Loading.....
          // console.log(this.props.fetchingg);
          //
          // if(!this.props.fetchingg){
          //   console.log("Rendering checksRoutes now... After Ajax Response..NEW");
          //   $("#mainprofile").hide();
          //   $("#bookform2").hide();
          //   $("#placeholder").show();
          //   browserHistory.push('/checksRoutes');
          // }
          //###### Redirecting.........AFter Loading.....


          var routerconfigure = ( <RouterApp query={this.state.query}/> );
          var formhide = (<p> </p>);

          //console.log(this.state.books.data);
          //console.log(this.state.books.data.getStore);
          //BOOKS
          var booksElement;
          if(this.state.books.data !== undefined) {
           booksElement = this.state.books.data.getStore.booksByTimePeriod.map(function(book) {
              return (
                      <option value={book.bookInfo.bookId}> {book.bookInfo.bookName} </option>
              )
            });
          }
          else {
             <select ref="book" value={this.state.value} onChange={this.handleChange} >
               <option value="one">one</option>
               <option value="two">two</option>
               <option value="three">three</option>
             </select>
          }

          //FORMS
          var formsElement;
          if(this.state.forms.data !== undefined) {
           formsElement = this.state.forms.data.getStore.books[0].bookInfo.forms.map(function(form) {
              return (
                      <option value={form}> {form} </option>
              )
            });
          }
          else {
             <select ref="form" onChange={this.handleChange} >
               <option value="one">one</option>
               <option value="two">two</option>
             </select>
           }

        //defaultValue={this.state.bookValue}

        //BEFORE.. bookform navigation....
        //{this.state.submit ? routerconfigure : formhide}

        var loading = null;
        if(this.state.loading) {
          loading = (
            <div className="alert alert-danger">
                Loading <strong>Data!</strong> Please Wait... !!!!!!
            </div>
          );
        }

    var loadingChecks = null;
    if(this.props.fetchingg) {
      loadingChecks = (
        <div className="alert alert-danger">
            Loading <strong>Checks!</strong> Please Wait... !!!!!!
        </div>
      );
    }

    // var storeloading = null;
    // if(this.props.fetching) {
    //   storeloading = (
    //     <div className="alert alert-danger">
    //         <strong>STORE Loading!</strong> Please Wait... !!!!!!
    //     </div>
    //   );
    // }


    return (
        <div className="row">
        <div className="col-sm-12">

          {loading}
          {loadingChecks}

          <div id="bookform" className="col-sm-12 stay-in-touch noborder">
          <div className="col-sm-12 col-md-6">
          <form onSubmit={this.handleSubmit} className="stay-in-touch-form" style={{padding:"0px 0px 0px 0px"}}>
            <h3> NEW CHECK </h3>
            <label>Book:</label>
            <select ref="book" value={this.state.bookId} onChange={this.handleChange} >
              <option selected disabled>--Select Book--</option>
              {booksElement}
            </select>
            <p> </p>

            <label>Form:</label>
            <select ref="form" value={this.state.formId} onChange={this.handleChange2} >
              <option selected disabled>--Select Form--</option>
              {formsElement}
            </select>
            <p> </p>

            <div onClick={this.handleSubmit}>
              <input type="submit" value="START CHECKS" onClick99={this.handleSubmit}/>
            </div>
              <input type="reset" value="RESET" id="reset" onClick={this.reset} style={{display:"none"}}/>
          </form>
          </div>
          </div>


        </div>
        </div>
    );
  }

}

//export default Bookform;

function mapStateToProps(state) {
    console.log("state props Bookform");
    console.log(state);

    return {
        //fetchingg: state.questions.loadingData       //OLD REDUCER

        fetchingg: state.getChecks.loadingData
    };
}

function matchDispatchToProps(dispatch){
    console.log("props dispatch Bookform");
    //return bindActionCreators({getNewChecks: getNewChecks, getNewChecks_Thunk: getNewChecks_Thunk, getComplianceMutationChecks_Thunk: getComplianceMutationChecks_Thunk, fetching: fetching, fetchBooks: fetchBooks, fetchBooksDone: fetchBooksDone, dispatch: dispatch}, dispatch);   //OLD REDUCER
    return bindActionCreators({getNewChecks_Thunk: getNewChecks_Thunk, getComplianceMutationChecks_Thunk: getComplianceMutationChecks_Thunk, fetching: fetching, fetchBooks: fetchBooks, fetchBooksDone: fetchBooksDone, dispatch: dispatch}, dispatch);      //NEW REDUCER
}

export default connect(mapStateToProps, matchDispatchToProps)(Bookform);




// <input type="submit" value="START CHECKS"/>
// </form>
// </div>
// </div>
//
// //{this.state.submit ? routerconfigure : formhide}
//
// </div>
