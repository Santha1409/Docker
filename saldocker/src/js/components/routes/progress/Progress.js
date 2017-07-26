import React from 'react';
import ReactDOM from 'react-dom';
import styles from './progress.css';
import ProgressComp from './ProgressComp';
import {connect} from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import $ from 'jquery';

class Progress extends React.Component {
  constructor(props){
      super(props);
  }

  handleRedirect(){
//      browserHistory.goBack();
      //browserHistory.push("/profile");
      //browserHistory.push("/");
  }

  render() {
      console.log("in progress");
      //this.props.checks
      //$("#mainprofile").hide();
      //$("#placeholder").show();

      const checksNode = this.props.progress.map((item) => {
        //let bookstring;
        //bookstring=item.FORM;
        //let book =bookstring.substring(0,4);
          return (

            <div>
              <div className="row">
                <div className="col-sm-6 tchecs">
                <ProgressComp qid={item.QUESTIONID} book={item.BOOKS} checks1={item.CHECKS1} answered={item.ANSWERED} form={item.FORM} time={item.TIME} />
                </div>
              </div>
            </div>

          )


      });

      return (
          <div>
              <button onClick={this.handleRedirect.bind(this)} className="button arrow-back"> BACK </button>

              <div className="list-group">
                  {checksNode}
              </div>
          </div>
      );

 }

}
function mapStateToProps(state) {
    return {
        questions: state.questions
    };
}


//export default Checks;
export default connect(mapStateToProps, null)(Progress);




//style={{border: "1px solid black", margin: "10px"}}

Progress.defaultProps = {
      progress :  [
      {
        "BOOKS": "SL33",
        "ANSWERED": "3",
        "CHECKS1": "2",
        "FORM": "SL33 Daily Manager Check",
        "TIME": "null",
        "QUESTIONID": "330011"

      },
      {
        "BOOKS": "SL34",
        "ANSWERED": "2",
        "CHECKS1": "2",
        "FORM": "SL34 Daily Manager Check",
        "TIME": "null",
        "QUESTIONID": "330014"

      },
      {
        "BOOKS": "SL35",
        "ANSWERED": "4",
        "CHECKS1": "2",
        "FORM": "SL35 Daily Manager Check",
        "TIME": "null",
        "QUESTIONID": "330016"

      },
      {
        "BOOKS": "SL36",
        "ANSWERED": "3",
        "CHECKS1": "2",
        "FORM": "SL36 Daily Manager Check",
        "TIME": "null",
        "QUESTIONID": "330017"
      }
      ]
 };
