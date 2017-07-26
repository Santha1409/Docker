import React from 'react';
import ReactDOM from 'react-dom';
import styles from './progress.css';
import ProgressComp from './ProgressComp';
import {connect} from 'react-redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
//import {getProgressData_Thunk} from '../../../actions/index';    //OLD REDUCER
import {getProgressData_Thunk} from '../../../actions/signOffActions';    //NEW REDUCER

class ProgressGQL extends React.Component {
  constructor(props){
      super(props);
  }

  componentWillMount() {
    console.log("Component Will Mount: ProgressGQL");
    console.log(this.props);
    this.props.getProgressData_Thunk();
    //this.loadData();
  }


  handleRedirect(){
      //browserHistory.goBack();
      //browserHistory.push("/profile");
      $("#mainprofile").show();
      $("#placeholder").hide();
      //browserHistory.push('/checksRoutes');   //PERFECT.

      $("#incompleteChecks").show();     //COMPLIANCE
      $("#forceUpdate").click();         //COMPLIANCE
  }

  render() {
    console.log("Renderng... ProgressGQL.");
    //$("#mainprofile").hide();
    //$("#placeholder").show();
    console.log(this.props.questions);
    console.log(this.props.progressData);

    var loading = null;
    if(this.props.fetchinggProgressData) {
      loading = (
        <div className="alert alert-danger">
            Loading <strong>ProgressData!</strong> Please Wait... !!!!!!
        </div>
      );
    }

      // const checksNode = this.props.questions.map((item) => {
      //     return (
      //       <div>
      //         <div className="row">
      //             <div className="col-sm-12 col-md-11 col-lg-6 progressBox">
      //           <ProgressComp qid={item.checkInfo.question.questionId} checkid={item.checkInfo.checkId} bookname={this.props.bookname} formname={this.props.formname}/>
      //           </div>
      //         </div>
      //       </div>
      //     )
      // });

      const checksNode = this.props.progressData.map((item) => {
              return (

                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 progressBox onHover">
                    <ProgressComp bookid={item.bookInfo.bookId} bookname={item.bookInfo.bookName} formname={item.bookInfo.forms[0]} checks={item.checksByTimePeriod}/>
                    </div>
                  </div>

              )
          });


      return (
        <div className="container">

          <div className="row">
          <div className="col-sm-12 col-md-11 col-lg-6">

              <div className="row backbutton">
                <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
                  <span style={{fontSize:"1.5rem",color:"#333333"}}> Todays Progress </span>
                  <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
                </div>
              </div>

              {loading}

              <div className="list-group">
                  {checksNode}
              </div>

          </div>
          </div>

        </div>
      );

 }

}

function mapStateToProps(state) {
    console.log("ProgressGQL STORE...");
    return {
        //bookname: state.questions.data.getStore.books[0].bookInfo.bookName,   //ORIGINAL
        //formname: state.questions.data.getStore.books[0].bookInfo.forms[0],   //ORIGINAL
        //questions: state.questions.data.getStore.books[0].checksByTimePeriod   //ORIGINAL
        // questions: state.questions.data.checks,           //COMPLIANCE
        // bookname: state.questions.data.bookId,
        // formname: state.questions.data.form

        // progressData: state.questions.progressData,         //OLD REDUCER
        // fetchinggProgressData: state.questions.loadingProgressData

        progressData: state.getSignOff.progressData,           //NEW REDUCER
        fetchinggProgressData: state.getSignOff.loadingProgressData

    };
}

// return {
//     questions: state.questions.getStore.books[0].checks  //ORIGINAL  //OLD WAY ORIGINAL
// };

function matchDispatchToProps(dispatch){
    console.log("props dispatch : ProgressGQL");
    console.log(dispatch);
    return bindActionCreators({ getProgressData_Thunk: getProgressData_Thunk}, dispatch);
}


//export default Checks;
//export default connect(mapStateToProps, null)(ProgressGQL);
export default connect(mapStateToProps, matchDispatchToProps)(ProgressGQL);




//style={{border: "1px solid black", margin: "10px"}}

ProgressGQL.defaultProps = {
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
