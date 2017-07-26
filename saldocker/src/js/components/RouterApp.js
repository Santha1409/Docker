   import React from 'react';
   import ReactDOM from 'react-dom';
   import Instr from './routes/instructions/Instr';
   import Checks from './routes/checks/Checks';
   import ChecksGQL from './routes/checks/ChecksGQL';
   import Details from './routes/details/Details';
   import App from './routes/App';
   import AppGQL from './routes/AppGQL';
   import Notes from './routes/notes/Notes';
   import {connect} from 'react-redux';
   import CheckDetail from './routes/checkDetail/CheckDetail';
   import CheckDetailGQL from './routes/checkDetail/CheckDetailGQL';
   import NSForm from './routes/nextstep/NSForm';
   import NSFormGQL from './routes/nextstep/NSFormGQL';
   import ProgressDetails from './routes/progressdetails/progressdetails';
   import ProgressDetailsGQL from './routes/progressdetails/progressdetailsGQL';
   import CheckDetailsPData from './routes/progressdetails/CheckDetailsPData';
   import ViewReportCheck from './routes/ViewReportCheck/ViewReportCheck';
   import Progress from './routes/progress/Progress';
   import ProgressGQL from './routes/progress/ProgressGQL';
   import Profile from './Profile';
   import { Router, Route, Link, browserHistory, IndexRoute, IndexRedirect, Redirect  } from 'react-router';
   import BrowseReviews from './routes/review/BrowseReviews';
   import ReviewDetails from './routes/review/ReviewDetails';
   import ReviewChecksGQL from './routes/review/ReviewChecksGQL';
   import ReviewCheckDetailGQL from './routes/review/ReviewCheckDetailGQL';


//import {HashRouter, Route} from 'react-router-dom';

class RouterApp extends React.Component {

    componentWillMount() {

    }


   render() {
     console.log("Rendering... RouterApp..");
     //console.log(this.props.query);

      return (

        <Router history = {browserHistory}>
         <Route path = "/" component = {Profile} data={this.props.query}>
            <Route path = "/checksRoutes" component = {AppGQL} >
               <IndexRoute component = {ChecksGQL} />           //<IndexRoute component = {ChecksGQL} />  ORIGINAL
               <Route path = "instr" component = {Instr} />
               <Route path = "checks" component = {Checks} />
               <Route path = "details" component = {Details} />
               <Route path = "notes" component = {Notes} />
               <Route path = "checksGQL" component = {ChecksGQL} />
            </Route>
            <Route path="/progress" component={ProgressGQL} />
            <Route path="checkdetail/:id" component={CheckDetailGQL} />
            <Route path="nextstep/:action/:qid/:nid" component={NSFormGQL}/>
            <Route path="progressdetails/:bid" component={ProgressDetailsGQL} />
            // <Route path="viewreportcheck/:nqid" component={ViewReportCheck} data={this.props.questions}/>
            <Route path="checkdetailPData/:bid/:cid" component={CheckDetailsPData} />
            <Route path="audits" component={BrowseReviews} />
            <Route path="reviewdetails/:bid/:rid" component={ReviewDetails}/>
            <Route path="reviewchecks" component={ReviewChecksGQL} />
            <Route path="reviewcheckdetail/:cid" component={ReviewCheckDetailGQL} />
          </Route>
        </Router>

      )
   }
}

//ORIGINAL
//<Route path="/progress" component={Progress} data={this.props.questions}/>
// <Route path="checkdetail/:id" component={CheckDetail} data={this.props.questions}/>
// <Route path="nextstep/:action/:qid/:nid" component={NSForm} data={this.props.questions}/>
// <Route path="progressdetails/:pid" component={ProgressDetails} data={this.props.questions}/>
// <Route path="viewreportcheck/:nqid" component={ViewReportCheck} data={this.props.questions}/>

//BEST SOLUTION.........
// <Router history = {browserHistory}>
//  <Redirect from="/" to="profile" />
//  <Route path = "/profile" component = {Profile} >
//     <Route path = "/checksRoutes" component = {App}>
//        <IndexRoute component = {Checks} />
//        <Route path = "instr" component = {Instr} />

      //<div>
  // <button onClick={this.props.backed} className="button arrow-back"> BACK to Main</button>
  //</div>
/*
function mapStateToProps(state) {
  console.log("Router.. STORE.");
  console.log(state);
  //console.log(state.questions.getStore);
    // return {   //WORKS WELL..ORIGINAL
    //     questions: state.questions.getStore.books.checks
    // };
    return {
        questions: state.questions.getStore.books.checks
    };
}
*/

export default RouterApp;
//export default connect(mapStateToProps, null)(RouterApp);






// <HashRouter>
//    <Route path = "/" component = {App}>
//       <Route path = "home" component = {Home} />
//       <Route path = "about" component = {About} />
//       <Route path = "contact" component = {Contact} />
//    </Route>
// </HashRouter>

//
// <Router history = {browserHistory}>
//    <Route path = "/" component = {App}>
//       <IndexRoute component = {Home} />
//       <Route path = "home" component = {Home} />
//       <Route path = "about" component = {About} />
//       <Route path = "contact" component = {Contact} />
//    </Route>
// </Router>

//BEST EXAMPLE......
// <Router history = {browserHistory}>
//     <Route path = "/" component = {App}>
//        <IndexRoute component = {Checks} />
//        <Route path = "instr" component = {Instr} />
//        <Route path = "checks" component = {Checks} />
//        <Route path = "details" component = {Details} />
//        <Route path = "notes" component = {Notes} />
//        <Route path="checkdetail/:id" component={CheckDetail} data={this.props.questions}/>
//        <Route path="nextstep/:action/:qid/:nid" component={NSForm} data={this.props.questions}/>
//     </Route>
// </Router>
