import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';


class CheckGQL extends React.Component {

   constructor(props) {
     super(props);
   }

   render() {

      return (
        <Link to={"/reviewcheckdetail/"+this.props.checkid} >

        <div className="row">
          <div className="col-sm-10  col-md-10">
              <p style={{color : this.props.color}}> {this.props.text} </p>
          </div>
          <div className="col-sm-1 col-md-1">
              <p style={{color : this.props.color}}> {this.props.status} </p>
              <p style={{color : this.props.color}}> {this.props.qid} </p>
          </div>
        </div>

        </Link>
      )
   }
}

export default CheckGQL;

//style={{float: "left", margin: "2px"}}
//style={{float: "left"}}
