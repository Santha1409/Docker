
import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';
import RouterApp from './RouterApp';
import Bookform from './Bookform';
import {connect} from 'react-redux';
import styles from './logincss.css';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backed = this.backed.bind(this);
    this.state = {
      submit : false
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.setState({submit : true});
    //console.log('-->', formData);
  }

  backed(e) {
    console.log("Back to main.......");
    e.preventDefault();
    this.setState({submit : true});
    //this.state.submit = true;

    //WRONG WAY to do this...
    //React.unmountComponentAtNode(document.getElementById('strong'));
    //ReactDOM.render(<RouterApp backed={this.backed} questions={this.props.questions}/> , document.getElementById('strong'));   //WORKS... BUT VALID ERROR......
    //ReactDOM.render(<Login /> , document.getElementById('root')); //WORKS VALID ERROR.....
    //ReactDOM.render(<Profile/> , document.getElementById('strong')); //VALID ERROR.
    //ReactDOM.render(<Profile store={this.props.store}/> , document.getElementById('strong'));   //PERFECT... but links outside error..
    //ReactDOM.render(<RouterApp backed={this.backed} store={this.props.store}/> , document.getElementById('strong'));
  }

  render() {
    console.log("renderering router again...!!!!");
      var form = ( <Form1 onSubmit={this.handleSubmit}/> );
      //var profile = ( <Profile /> ); ORIGINAL
      //var routerconfigure = ( <RouterApp /> ); //WORKING ORIGINAL
      var routerconfigure = ( <RouterApp backed={this.backed} /> );

      //Book/Form
      //var bookform = ( <Bookform /> );
      //{ this.state.submit ? bookform : form }

      //{ this.state.submit ? routerconfigure : form }  ORIGINAL...

    return (
        <div>
          <div id="strong">
              { this.state.submit ? routerconfigure : form }
          </div>
        </div>
    );
  }

}

export default Login;
// function mapStateToProps(state) {
//     return {
//         questions: state.questions
//     };
// }
// export default connect(mapStateToProps, null)(Login);


//<h1> MENU - TESCO - STORE </h1>

class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
<div class="utility_bar" >
       <div class="container container-0">
          <div class="col-sm-12">
             &nbsp;
          </div>
       </div>
    </div>
    <main role="main"  className="nopadbottom">
 <div className="container">

<div className="col-sm-12" style={{margin: "auto"}}>
  <div className="row" style={{padding:"40px 0px 20px 0px"}} >
    <div className="col-sm-12 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4 signin_shadow" >
    <div className="row" style={{margin:"0px -11px 0px 40px"}} >
      <div className="col-xs-12 col-sm-12 col-md-offset-2 col-md-10" >
        <div className="col-xs-12 col-sm-12 bluedivsignin" >
<h4 className="signin_mobile" style={{color:"white"}} >Sign in</h4>
</div>
</div>
</div>
<div className="row">
<div className="col-xs-12 col-sm-12 stay-in-touch" >


<div className="col-xs-12 col-sm-12 stay-in-touch-form"  >
<form className="stay-in-touch-form" onSubmit={this.props.onSubmit}>
<div className="row"><p>
<div className="col-xs-12 col-sm-12"><label >User Name</label></div>
<div className="col-xs-12 col-sm-12"><input ref="username" type="text" name="username" /></div></p>
</div>
<div className="row"><p>
<div className="col-xs-12 col-sm-12"><label >Password</label></div></p>
<p><div className="col-xs-12 col-sm-12"><input ref="password" type="password" name="password" /></div></p>
</div>

<div className="row">


<div className="col-sm-12">
  <p><input  type="submit" value="Submit" /></p>
</div>

</div>

</form>

</div>

</div>

</div>
</div>
</div>

</div>
</div>
</main>
</div>
    );

  }
}





// <div className="stay-in-touch">
//   <form className="stay-in-touch-form" onSubmit={this.props.onSubmit}>
//     <input ref="username"  type='text' name="username"/>
//     <input ref="password"  type='password' name="password"/>
//     <input type="submit" value="Submit"/>
//   </form>
// </div>
