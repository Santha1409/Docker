import React from 'react';
//import Questions from './Questions';
import Questions2 from './Questions2';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getQuestions} from '../actions/index';
import {addQuestions} from '../actions/index';

class Book extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.backed1 = this.backed1.bind(this);
    this.result = "";

    this.state = {
      submit : false
    };
  }

  componentDidMount() {
  //  axios.get(`http://www.reddit.com/r/${this.props.subreddit}.json`)
  //    .then(res => {
  //      const posts = res.data.data.children.map(obj => obj.data);
  //      this.setState({ posts });
  //    });

    // this.result = this.props.getQuestions(1);
    // console.log(this.result);

    //this.setState
  }


  handleSubmit(e) {
    e.preventDefault();

    const formData = {};
    for (const field in this.refs) {
      formData[field] = this.refs[field].value;
    }

    this.setState( {submit : true} );
    console.log('-->', formData);


    //BUG1: this.props.getQuestions(1);
    //console.log("out: ", this.result);

    //Adds more questions to state.....*****
    this.props.addQuestions(1);
  }

  backed1(e) {
    this.setState( {submit : false} );
  }

  render() {

    var form = ( <Form1 onSubmit={this.handleSubmit}/> );

    //WORKING...var questions = ( <Questions backed={this.backed1} cols={this.state.cols} data={this.state.data} /> );
    //var questions2 = ( <Questions2 backed={this.backed1} res={this.state.obj} /> );
    var questions2 = ( <Questions2 backed={this.backed1} res={this.props.questions} /> );

    return (
        <div>
          <button onClick={this.props.backed} id="home" className="button arrow-back"> HOME </button>
          { this.state.submit ? questions2 : form }
        </div>
    );
  }
}


function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}

function matchDispatchToProps(dispatch){
    console.log("props dispatch");
    return bindActionCreators({getQuestions: getQuestions, addQuestions: addQuestions}, dispatch);
}


/* export default Book; */
export default connect(mapStateToProps, matchDispatchToProps)(Book);






class Form1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="stay-in-touch">
      <form onSubmit={this.props.onSubmit} className="stay-in-touch-form">

      <select ref="bookid">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <select ref="two">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <select ref="three">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>

      <input type="submit" value="Submit"/>

      </form>
      </div>
    );

  }
}
