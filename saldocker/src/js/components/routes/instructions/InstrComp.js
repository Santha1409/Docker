import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import styles from './intr.css';

class InstrComp extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {

      return (
        <Link to={"/progressdetails/"+this.props.qid} >

        <div className="row">
          <div className="col-md-6 tchec">
              <label>Books</label>
              <p> {this.props.book} </p>

          </div>
          <div className="col-md-2 tchecl">
            <label>Checks</label>
              <p > {this.props.checks1} </p>
          </div>
          <div className="col-md-3 tchecl">
            <label>Answered</label>
              <p > {this.props.answered} </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 tchec">
          <label>Form</label>
            <p > {this.props.form} </p>

          </div>
          <div className="col-md-5 tchecl ">
              <label>% Complete</label>
              <div className="progress">
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow='50' aria-valuemin='0' aria-valuemax='99' style={{width: '95%'}} >
              100%
  </div>
</div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 tchec">
          <label>Time</label>
            <p > {this.props.time} </p>

          </div>

        </div>



      </Link>
      )
   }
}

export default InstrComp;
