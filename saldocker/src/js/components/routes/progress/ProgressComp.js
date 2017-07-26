import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import styles from './progress.css';

class ProgressComp extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {

     console.log("Rendering: ProgressComp");
     console.log(this.props.checks);

     var checksLength = this.props.checks.length;
     var todoChecks = this.props.checks.filter(function(check) {
          if(check.status === "TODO")
              return check;
     });

     var answeredChecks = checksLength - todoChecks.length;


     //<Link to={"/progressdetails/"+this.props.qid} >  ORIGINAL

      return (
        <Link to={"/progressdetails/"+this.props.bookid} >

        <div className="row ppadding">
          <div className="col-md-6 tchec">
              <label>Books</label>
              <p style={{padding:"0px 0px 10px 0px"}}> <strong>{this.props.bookname}</strong> </p>

          </div>
          <div className="col-md-2 tchecl">
            <label>Checks</label>
                <p style={{padding:"0px 0px 10px 0px"}}>  <strong>{checksLength} </strong></p>
          </div>
          <div className="col-md-3 tchecl">
            <label>Answered</label>
              <p style={{padding:"0px 0px 10px 0px"}}> <strong> {answeredChecks}</strong> </p>
          </div>
        </div>

        <div className="row ppadding">
          <div className="col-md-6 tchec">
          <label>Form</label>
              <p style={{padding:"0px 0px 10px 0px"}}> <strong> {this.props.formname} </strong></p>

          </div>
          <div className="col-md-5 tchecl ">
              <label>% Complete</label>
              <div className="progress">
              <div style={{padding:"0px 0px 10px 0px"}} className="progress-bar progress-bar-success" role="progressbar" aria-valuenow='50' aria-valuemin='0' aria-valuemax='99' style={{width: '95%'}} >
            <strong>  100%</strong>
  </div>
</div>
          </div>
        </div>

        <div className="row ppadding">
          <div className="col-md-12 tchec">
          <label>Time</label>
            <p > {this.props.time} </p>

          </div>

        </div>



      </Link>
      )
   }
}

export default ProgressComp;
