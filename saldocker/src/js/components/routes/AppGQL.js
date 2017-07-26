import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RouterApp from '../../components/RouterApp';
import $ from 'jquery';
//import {getChecks, fillStore} from '../../actions/index';    //OLD REDUCER
import styles from './appstyle.css';
import Rx from 'rxjs/Rx';
import RxUtility from '../../utilities/RxUtility';


var rxutility = new RxUtility();
console.log("RxUtility Is Created...");
rxutility.welcome();

class AppGQL extends React.Component {

  constructor(props) {
    super(props);
    //######### INITIALIZE UTILITY #########
    // this.rxutility = new RxUtility();
    // console.log("RxUtility Is Created...");
    // this.rxutility.welcome();
    //######### INITIALIZE UTILITY #########
    /*this.alertme = this.alertme.bind(this);
    this.state = {
      click : false
    };
    */
  }

 /*
  alertme(e){
    console.log("alertme");
    console.log(e);
    alert("clicked button 2");
  }
  */

  handleRedirect(e){
      e.preventDefault();
      console.log("backed..");
      //browserHistory.goBack(); //CHANGEDD
      //browserHistory.push("/profile");
      //browserHistory.push('/checksRoutes');   //PERFECT.import styles from './bookformstyle.css';
      $("#mainprofile").show();
      $("#bookform2").hide();
      $("#placeholder").hide();

      $("#incompleteChecks").show();     //COMPLIANCE
      $("#forceUpdate").click();         //COMPLIANCE
  }

  componentDidMount() {
    console.log("Did mount called.: AppGQL");

    /*
    console.log("Waiting for NOTIFICATION");
    let _this = this;
    rxutility.getObs().subscribe(function(x) {
      console.log("NOTIFICATION RECEIVED..!!!!!");
      console.log(x);
      //$("#routerORChecksBackButton").click();
      _this.completeChecks();
    });
    */

  }

  componentWillMount() {

  }

  // completeChecks(e) {
  //   e.preventDefault();
  //   $("#routerORChecksBackButton").click();
  // }

/*
  completeChecks() {
    console.log("completeChecks called : AppGQL");
//    $("#routerORChecksBackButton").click();
    let ele = $("#routerORChecksBackButton");
    ele.click();
    //this.forceUpdate();

    //this.refs["backbutton2"].click();
    //$('#backbutton2').trigger('click');
    //$('#backbutton2').click.bind(this);
    //$('#backbutton2').click();
    //this.refs["backbutton"].value = "GO BACK";
    //this.refs["backbutton"].style.display = "none";
    //$("#backbutton2").hide();
    this.setState({click: true});

    // $("#incompleteChecks").show();     //COMPLIANCE
    // $("#forceUpdate").click();

    //
    // var evt = new MouseEvent("click", {
    //   view: window,
    //   bubbles: true,
    //   cancelable: true,
    //   clientX: 20,
    //   // whatever properties you want to give it
    // }),
    // ele = document.getElementById("backbutton2");
    // ele.dispatchEvent(evt);
    //
  }
*/

/*
  componentDidUpdate() {
    // let _this = this;
    // rxutility.getObs().subscribe((x) => {
    //   console.log("NOTIFICATION RECEIVED..!!!!!");
    //   console.log(x);
    //   //$("#routerORChecksBackButton").click();
    //   $('#backbutton2').click();
    //   _this.completeChecks();
    // });


    if(this.state.click) {
      //$('#backbutton2').click();      //WORKS  PERFECT...
      $("#routerORChecksBackButton").click();
    }
    //$("#routerORChecksBackButton").click();
  }
*/

   render() {
      //$("#mainprofile").hide();
      //$("#placeholder").show();
      console.log("Renderng: AppGQL");

      //console.log(rxutility.setObs());     //SIMULATION WORKING...
      // if(rxutility.getObs() !== undefined) {
      // rxutility.getObs().subscribe(function(x) {
      //   console.log("From Observable");
      //   console.log(x);
      // });
      // }



      // if(this.state.click === true) {
      //     $("#routerORChecksBackButton").click();
      // }

      // console.log("Waiting for NOTIFICATION");
      // rxutility.getObs().subscribe(function(x) {
      //   console.log("NOTIFICATION RECEIVED..!!!!!");
      //   console.log(x);
      //   $("#routerORChecksBackButton").click();
      // });

      return (
      <div className="container">

      <div className="row">
      <div className="col-sm-12 col-md-11 col-lg-6">

          <div className="row backbutton">
            <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
              <span style={{fontSize:"1.5rem",color:"#333333"}}> COMPLIANCE </span>
              <button ref="backbutton" id="routerORChecksBackButton" onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
            </div>
          </div>


          <div className="mainnav">
            <ul>
             <li> <Link to="/checksRoutes/checksGQL">Checks</Link> </li>
             <li> <Link to="/checksRoutes/instr">Instructions</Link> </li>
             <li> <Link to="/checksRoutes/notes">Notes</Link> </li>
             <li> <Link to="/checksRoutes/details">Details</Link> </li>
            </ul>
          </div>


          <div>
              {this.props.children}
          </div>

      </div>
      </div>

      </div>
      )
   }
}

export default AppGQL;
//GRAPHQL_TEST_1    //PERFECT
/*
function matchDispatchToProps(dispatch){
    console.log("props dispatch");
    return bindActionCreators({fillStore: fillStore, getChecks: getChecks(dispatch)}, dispatch);
}
export default connect(null, matchDispatchToProps)(AppGQL); */




//
// <Link to="/checks">Checks</Link>
// <Link to="/instr">Instructions</Link>
// <Link to="/notes">Notes</Link>
// <Link to="/details">Details</Link>



/*
<button id="backbutton2" onClick={this.alertme}> Click me </button>

<div className="col-sm-12 col-md-11 col-lg-6">
  <button id="testing" onClick={this.completeChecks.bind(this)} className="btn btn-danger"> COMPLETE CHECKS from ROUTER</button>
</div> */
