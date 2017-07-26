import React, { Component } from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateQuestions} from '../../../actions/index';
import styles from './checkdetailstyle.css';
class CheckDetail extends Component {

    handleRedirect(){
        //browserHistory.push('/checks'); //ORIGINAL
        browserHistory.push('/checksRoutes'); //CHANGEDD
        //browserHistory.goBack();   //ISSUES
    }

    handleUpdate(e) {
        console.log(e.target.value);
        this.props.updateQuestions(e.target.value);
        //browserHistory.push('/checks');   //ORIGINAL
        browserHistory.push('/checksRoutes');  //CHANGEDD
        //browserHistory.goBack();   //ISSUES
    }

    viewnstep(e) {
      this.refs["viewnstep"].click();
    }

    render() {

        const checks = this.props.route.data;
        const id = this.props.params.id;

        // Filter check with ID
        const foundcheck = checks.questions.filter(check => {
            if(check.QUESTIONID == id) {
                return check;
            }
        });

        const check = foundcheck[0];

        //<p> {item.id} </p>
        const res = check.NEXTSTEPS.map( (item) => {
          return (
            <Link to={"/nextstep/edit/"+check.QUESTIONID+"/"+item.id} >
              <div style={{border: "1px solid grey", margin:"10px"}} className="col-md-6">
                <p> Opened: {item.date} </p>
                <p> Assinged: {item.assigned} </p>
                <p> Initials: {item.initials} </p>
                <p> Next Step: {item.snextstep}</p>
                <p> Notes: {item.notes} </p>
              </div>
            </Link>
          )
        });

        return (

      <div className="col-sm-12 col-md-11 col-lg-6 ">
            <div className="row">
              <div className="col-md-12">


              <button onClick={this.handleRedirect.bind(this)} className="button arrow-back"> BACK </button>
              <h2>About Check...!!!!</h2>
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#home">Details</a></li>
                <li><a data-toggle="tab" href="#menu1" ref="viewnstep">Next Steps</a></li>
              </ul>

              <div className="tab-content">


                <div id="home" className="tab-pane fade in active">
                <div>
                    <h3>{check.TEXT}</h3>



                    <div className="row buttonAlign">
                    <div className="col-sm-11 col-md-11 col-lg-6">
                      <button value={check.QUESTIONID} onClick={this.handleUpdate.bind(this)} className="btn">Press if Green  </button>
                    </div>
                    </div>

                    <div className="row buttonAlign">
                      <div className="col-sm-5 col-md-5">
                      <Link to={"/nextstep/add/"+check.QUESTIONID+"/"+0} >
                          <button type="Accept" onClick={this.props.gotoRouting} className="btn">Add Next Step</button>
                      </Link>

                      </div>
                      <div className="col-sm-5 col-md-5">
                      <button className="btn"  onClick={this.viewnstep.bind(this)}>
                        View Next Steps
                      </button>

                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6 col-md-6">
                      <ul>
                         <li><strong>ROLE</strong>: {check.ROLE}</li>
                         <li><strong>FORM</strong>: {check.FORM}</li>
                      </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                            <ul>
                               <li><strong>SECTION</strong>: {check.SECTION}</li>
                               <li><strong>STATUS</strong>: {check.STATUS}</li>
                           </ul>
                        </div>
                    </div>

                </div>
                </div>

                <div id="menu1" className="tab-pane fade row">
                    {res}
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
export default connect(null, matchDispatchToProps)(CheckDetail);




//<button value="Home" onClick={this.props.gotoHome} className="btn">Not Applicable</button>
