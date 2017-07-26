import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
//import {getInCompleteChecks_Thunk, getChecksByComplianceID_Thunk} from '../actions/index';   //OLD REDUCER
import {getChecksByComplianceID_Thunk} from '../actions/checksActions';   //NEW REDUCER
import {getInCompleteChecks_Thunk} from '../actions/signOffActions';   //NEW REDUCER

import QueryGenerator from '../utilities/QueryGenerator';
import Utility from '../utilities/Utility';
import styles from './profilestyle.css';

class IncompleteChecks extends React.Component {

  constructor(props) {
    super(props);

    //######### INITIALIZE UTILITY #########
    this.utility = new Utility();
    console.log("Utility Is Created...");
    this.utility.welcome();

    this.queryGenerator = new QueryGenerator();
    console.log("QueryGenerator Utility Is Created...");
    this.queryGenerator.welcome();
    //######### INITIALIZE UTILITY #########

    this.setState({
      incompleteChecks: "",
      loading : false
    });
  }

  loadData(){
    console.log("Loading Data: IncompleteChecks");
    this.setState({loading: true});
    var checksByComplianceIDQuery = this.queryGenerator.getChecksByComplianceIDQuery(complianceid);
    this.utility.ajaxUtilityPromise(checksByComplianceIDQuery,"CHECKS_COMPLIANCEID_THUNK").then(function(data) {
      console.log("Success Callback");
      console.log(data); // "Stuff worked!"
      this.setState({incompleteChecks: data.data.getStore.compliance});
      this.setState({loading: false});

    }, function(err) {
      console.log("Error Callback");
      console.log(err); // Error: "It broke"
    });
  }

  componentWillMount() {
    console.log("Component Will Mount: IncompleteChecks");
    console.log(this.props);
    this.props.getInCompleteChecks_Thunk();
    //this.loadData();
  }


  forceUpdateHandler(){
      console.log("ForceUpdate : IncompleteChecks");
      this.props.getInCompleteChecks_Thunk();
      //this.forceUpdate();
      //this.loadData();
  }


  getChecksByComplianceIdToUpdateStore(e, complianceId) {
    e.preventDefault();
    console.log("Updating Checks to Store... : "+complianceId);
    this.props.getChecksByComplianceID_Thunk(complianceId);
  }



  componentWillReceiveProps(nextProps) {
    console.log("Before shouldComponentUpdate.... componentWillReceiveProps.... IncompleteChecks!!!!!");
    //************When we are about to receive new update from Props... Then it will be called.*************

    console.log(nextProps.fetchingg);
    console.log(this.props.fetchingg);

    //DIDNT WORK.
    //console.log(this.props);
    //console.log("Current ROUTE path : "+this.props.location);
    //console.log("Current ROUTE path : "+this.props.location.pathname);

    //WORKED
  /*  console.log(location.pathname);
    if(location.pathname !== "/checksRoutes")
    {*/
      if(nextProps.fetchingg === false && this.props.fetchingg === true){    //ORIGINAL
      //if(nextProps.fetchingg != this.props.fetchingg){    //COMPLIANCE
        console.log("Rendering checksRoutes now... After Ajax Response..NEW");
        $("#mainprofile").hide();
        $("#bookform2").hide();
        $("#incompleteChecks").hide();       //COMPLIANCE
        $("#placeholder").show();
        browserHistory.push('/checksRoutes');
      }
    /*}
    else {
      $("#mainprofile").show();
      $("#bookform2").hide();
      $("#placeholder").hide();
      $("#incompleteChecks").show();
    } */

  }


  render() {
    console.log("Renderng: IncompleteChecks");
    console.log(this.props.fetchingg);

    var loading = null;
    if(this.props.fetchinggInChecks) {
      loading = (
        <div className="alert alert-danger">
            Loading <strong>IncompleteChecks!</strong> Please Wait... !!!!!!
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

    let noOfIncompleteChecks = this.props.incompleteChecks.length;
    let incompleteChecksEle = this.props.incompleteChecks.map((incheck) => {
        return (
                  <div onClick={this.getChecksByComplianceIdToUpdateStore.bind(this, event, incheck.complianceId)}>

                      <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">


                          <div className="row incmpChecksdiv onHover">
                            <div className="col-sm-5 col-md-5">
                              <label> Date Created: </label>
                              <p style={{padding:" 0px 0px 10px 0px"}}><strong> 21 Jun 12:00</strong> </p>
                              <label> Book: </label>
                              <p style={{padding:" 0px 0px 10px 0px"}}><strong> SL33</strong> </p>
                            </div>
                            <div className="col-sm-5 col-md-5">
                              <label> Hour: </label>
                              <p style={{padding:" 0px 0px 10px 0px"}}><strong> null</strong> </p>
                              <label> Form: </label>
                              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {incheck.form}</strong> </p>
                            </div>
                          </div>


                        </div>
                      </div>

                  </div>
        );
    });


    return (
      <div className="row">
        <div className="col-sm-12">
          <h5> INCOMPLETE CHECKS </h5>
          <p> IncompleteChecks Page ==> Total NoOfIncompleteChecks : {noOfIncompleteChecks}</p>
          <button id="forceUpdate" onClick= {this.forceUpdateHandler.bind(this)} style={{display: "none"}} >FORCE UPDATE</button>
          {loading}
          {loadingChecks}
          {incompleteChecksEle}
        </div>
      </div>
    );
  }

}



function matchDispatchToProps(dispatch){
    console.log("props dispatch : IncompleteChecks");
    console.log(dispatch);
    return bindActionCreators({ getInCompleteChecks_Thunk: getInCompleteChecks_Thunk, getChecksByComplianceID_Thunk: getChecksByComplianceID_Thunk}, dispatch);
}

function mapStateToProps(state) {
  console.log("IncompleteChecks STORE...");
  console.log(state);
  return {
      // incompleteChecks: state.questions.incompleteChecks,          //OLD REDUCER
      // fetchinggInChecks: state.questions.loadingIncompleteChecks,
      // fetchingg: state.questions.loadingData

      incompleteChecks: state.getSignOff.incompleteChecks,
      fetchinggInChecks: state.getSignOff.loadingIncompleteChecks,
      fetchingg: state.getChecks.loadingData
  };
}

//export default IncompleteChecks;
export default connect(mapStateToProps, matchDispatchToProps)(IncompleteChecks);




// <Link to="/checksRoutes">
// </Link>
