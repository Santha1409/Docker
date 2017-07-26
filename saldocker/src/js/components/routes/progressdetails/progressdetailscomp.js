import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import styles from './intr.css';

class ProgressDetailsComp extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {

      //<Link to={"/viewreportcheck/"+this.props.qid} >

      return (
      <Link to={"/checkdetailPData/"+this.props.bookid+"/"+this.props.checkid} >


        <div className="list-group">
             <div className="row">
               <div className="col-sm-12 col-md-12 tchecs onHover">


        <div className="row">
          <div className="col-sm-6 col-md-4 tchec">
              <label>Status</label>
              <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.status} </strong> </p>

          </div>
          <div className="col-sm-5 col-md-7 tchecl">
            <label>Question</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.questiontext} </strong> </p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-4 tchec">
            <label>Question ID</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> {this.props.qid} </strong> </p>
          </div>
          <div className="col-sm-5 col-md-7 tchecl ">
            <label>Created by</label>
            <p style={{padding:" 0px 0px 10px 0px"}}><strong> null </strong> </p>
          </div>
        </div>


        </div>
       </div>
 </div>



      </Link>
      )
   }
}

export default ProgressDetailsComp;
