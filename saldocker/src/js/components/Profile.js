import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
//import Book from './Book';
import Login from './Login';
//import Book2 from './Book2';
import Bookform from './Bookform';
import Menu from './Menu';
import IncompleteChecks from './IncompleteChecks';
import RouterApp from './RouterApp';
import styles from './profilestyle.css';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
//import {getChecks, fillStore, setQuery} from '../actions/index';   //OLD REDUCER
import Progress from './routes/progress/Progress';
import $ from 'jquery';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.handleSignOut = this.handleSignOut.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleProgress = this.handleProgress.bind(this);
    this.backed = this.backed.bind(this);

    this.state = {click : false, progressbar: false, count:0};
    //this.count = 0;
  }

  handleSignOut(e) {
    console.log("Signing Out...BYE...");
      e.preventDefault();
      window.location.href = "http://localhost:3000";
  }

  handleSubmit(e) {
    console.log("ON Submit..");
    this.setState( {click : true} );
    $("#mainprofile").hide();
    $("#bookform2").show();
    //this.setState({count: this.count++ });
    $("#reset").click();
    //$("#placeholder").hide();  //WAS WORKING....
    //$("#placeholder").show();  //PERFECT.
    $("#placeholder").hide();

    $("#incompleteChecks").hide();       //COMPLIANCE
  }

  fetched(e) {
    console.log("fetched");
    //this.setState( {click : true} );
    $("#mainprofile").hide();
    $("#bookform2").hide();
    $("#placeholder").show();
  }

  handleProgress(e) {
    console.log("show progressbar");
    this.setState( {progressbar : true} );
    $("#mainprofile").hide();
    $("#bookform2").hide();
    $("#placeholder").show();

    $("#incompleteChecks").hide();       //COMPLIANCE
    browserHistory.push('/progress');
  }

  handleAudit(e) {
    console.log("show Audit");
    this.setState( {progressbar : true} );
    $("#mainprofile").hide();
    $("#bookform2").hide();
    $("#placeholder").show();

    $("#incompleteChecks").hide();       //COMPLIANCE
    browserHistory.push('/audits');
  }

  backed(e) {
    this.setState( {click : false} );
  }



  componentWillUpdate() {           //Very Important Life cycle Method..
    console.log("Before Render....!!!!!");
  }

  componentDidMount() {
    console.log("Did mount.. Profile");
    $("#bookform2").hide();
    $("#placeholder").hide();
  }

  render() {
    console.log("Rendering... Profile");
    //console.log(this.props.route.data);  //WORKS

    //this.props.getChecks;  //GRAPHQL QUERY EXECUTION.

    var loadingBooks = null;
    if(this.props.fetchingBooks) {
      loadingBooks = (
        <div className="alert alert-danger">
            Loading <strong>Books!</strong> Please Wait... !!!!!!
        </div>
      );
    }

    //this.count = this.count + 1;
    var myst = { width:100, marginBottom:5 };

    var menu = (  <Menu onSubmit={this.handleSubmit} onProgress={this.handleProgress} onSignOut={this.handleSignOut} onAudit={this.handleAudit.bind(this)}/> );
    var bookform = ( <Bookform fetched={this.fetched} changed={this.state.click}/> );
    var formhide = (<p> </p>);
    var incompleteChecks = ( <IncompleteChecks />);

    // var loading = null;
    // if(this.props.fetchingg) {
    //   loading = (
    //     <div className="alert alert-danger">
    //         <strong>Loading!</strong> Please Wait... !!!!!!
    //     </div>
    //   );
    // }

    return (

        <div className="container">
            {loadingBooks}
           <div id="mainprofile">
            { menu }
           </div>
           <div id="bookform2">
            { bookform }
           </div>
           <div id="incompleteChecks" >
            { incompleteChecks }
           </div>
           <div id="placeholder">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-6">
            { this.props.children }
              </div>
            </div>
           </div>
        </div>

    );
  }
}

// <div style={{height: "400px"}}>
//   { ele }
//   { this.props.children }
// </div>

// <div style={{height: "400px"}}>
//    { ele }
//    <div id="placeholder">
//    { this.props.children }
//    </div>
// </div>

//  { this.state.click ? this.props.children : form}


//GRAPHQL QUERY EXECUTION.

// function matchDispatchToProps(dispatch){
//     console.log("props dispatch");
//     return bindActionCreators({getChecks: getChecks(dispatch)}, dispatch);
// }
//
// export default connect(null, matchDispatchToProps)(Profile);


//export default Profile;
function mapStateToProps(state) {
    console.log("state props Profile");
    console.log(state);

    return {
        //fetchingBooks: state.questions.loadingBooks          //OLD REDUCER

        fetchingBooks: state.getSignOff.loadingBooks
    };
}

export default connect(mapStateToProps, null)(Profile);


//ORIGINAL
// <div style={{height: "400px"}}>
//   { this.state.click ? router : form }
//   { this.state.progressbar ? progressbar : form}
// </div>



//ORIGINAL
// <div className="container">
//    {loading}
//    <div id="mainprofile">
//     { menu }
//    </div>
//    <div id="bookform2">
//     { bookform }
//    </div>
