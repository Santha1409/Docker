import React from 'react';
import $ from 'jquery';
import RouterApp from './RouterApp';

class Answer extends React.Component {

  constructor(props) {
    super(props);
    this.gotoHome = this.gotoHome.bind(this);
    this.gotoRouting = this.gotoRouting.bind(this);

    this.state = {
      rout: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  gotoRouting(e) {
    this.setState({rout : true});
  }

  gotoHome(e) {
    //console.log(this.refs);
    $('#home').click();
  }

  render() {

    var form = ( <Form1 backed={this.props.backed} qno={this.props.qno} gotoHome={this.gotoHome} gotoRouting={this.gotoRouting} /> );
    var routing = ( <RouterApp /> );

    return (
        <div>
          { this.state.rout ? routing : form  }
        </div>
    );
  }
}

export default Answer;



class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <button onClick={this.props.backed} className="button arrow-back"> BACK </button>

        <h3> Question No: {this.props.qno} </h3>
        <button value="Home" onClick={this.props.gotoHome} className="btn">Press if Green  </button>
        <button type="Accept" onClick={this.props.gotoRouting} className="btn">Add Next Step</button>
        <button value="Home" onClick={this.props.gotoHome} className="btn">Not Applicable</button>
        <button className="btn"> View Next Steps </button>
      </div>
    );

  }
}
