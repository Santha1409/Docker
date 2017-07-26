import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


class Review extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {

      //<Link to={"/viewreportcheck/"+this.props.qid} >

      return (
      <Link to={"/reviewdetails/"+this.props.bookid+"/"+this.props.reviewid} >

        <div className="row">
          <div className="col-md-2 tchecl">
            <label>Year</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.year} </strong> </p>
          </div>
          <div className="col-md-2 tchec">
              <label>Week</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.week} </strong> </p>
          </div>
          <div className="col-md-2 tchec">
              <label>Period</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.period} </strong> </p>
          </div>
          <div className="col-md-2 tchec">
              <label>Day</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.day} </strong> </p>
          </div>
          <div className="col-md-2 tchec">
              <label>Reviewed</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.reviewed} </strong> </p>
          </div>
        </div>

      </Link>
      )
   }
}

export default Review;
