import React from 'react';
//import Book from './Book';
import Book2 from './Book2';
import RouterApp from './RouterApp';


class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backed = this.backed.bind(this);

    this.state = {click : false};
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState( {click : true} );
  }

  backed(e) {
    this.setState( {click : false} );
  }

  render() {
    var myst = { width:100, marginBottom:5 };
    var form = (  <Form1 onSubmit={this.handleSubmit}/> );
    var book = ( <Book2 backed={this.backed} /> );
    var router = ( <RouterApp /> );  //  { this.state.click ? book : form }
    return (
        <div style={{height: "400px"}}>
          { this.state.click ? router : form }
        </div>
    );
  }
}

export default Profile;




class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row">
         <div class="col-sm-6">
            <h4>Store Menu</h4>
         </div>
         <div class="col-sm-6" >
            <input type="button" className="btn" name="addnew" value="New" />
            <button type="button1" className="btn"  value="gotobooks" onClick={this.props.onSubmit}>Go To Books</button>
            <button type="button2" className="btn"  value="checkprogress" onClick={this.handleSubmit}>Check Progress</button>
            <button type="button3" className="btn"  value="graphs" onClick={this.handleSubmit}>Graphs</button>
            <button type="button4" className="btn"  value="home" onClick={this.handleSubmit}>Home</button>
         </div>
      </div>
    );

  }
}
