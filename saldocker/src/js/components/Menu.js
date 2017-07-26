import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
      <div className="col-sm-12">

      <p> </p>

      <div className="row buttonAlign">
         <div className="col-sm-6 col-md-6">
         <div onClick={this.props.onSubmit}>
            <button type="button" className="btn buttonwidth"  value="gotobooks" onClick99={this.handleSubmit}>Todays check</button>
         </div>
         </div>
         <div className="col-sm-6 col-md-6" >
            <button type="button" className="btn buttonwidth " style={{float:"right"}} value="graphs" onClick={this.handleSubmit}>Close</button>
         </div>
      </div>

      <div className="row buttonAlign" >
         <div className="col-sm-6 col-md-6">
           <div onClick={this.props.onProgress}>
            <Link to="/progress">
              <button type="button" className="btn buttonwidth"  value="gotobooks" onClick99={this.props.onSubmit}>Todays progress</button>
            </Link>
           </div>
         </div>
         <div onClick={this.props.onAudit}>
          <Link to="/audits">
            <div className="col-sm-6 col-md-6" >
              <button type="button" className="btn buttonwidth" style={{float:"right"}} value="home" onClick99={this.props.onSignOut}>Sign off</button>
            </div>
          </Link>
        </div>
      </div>


      <div className="row buttonAlign">
         <div className="col-sm-6 col-md-6">
           <button type="button" className="btn buttonwidth"  value="checkprogress" onClick={this.handleSubmit}> History</button>
         </div>

        <div className="col-sm-6 col-md-6" >
          <button type="button" className="btn buttonwidth" style={{float:"right"}} value="home" onClick={this.handleSubmit}>Audits</button>
        </div>

      </div>


      </div>
      </div>
    );

  }
}

export default Menu;
// <div className="col-md-6">
// <div onClick={this.props.onSubmit}>
// <Link to="/checksRoutes">
//  <button type="button" className="btn buttonwidth"  value="gotobooks" onClick99={this.handleSubmit}>Todays check</button>
// </Link>
// </div>
// </div>


//this.props.onProgress  //correct.
