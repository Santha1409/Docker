import React from 'react';
import CheckGQL from './CheckGQL';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
//import styles from './checks.css';
import $ from 'jquery';

class ReviewChecksGQL extends React.Component {

    constructor(props){
        super(props);
    }



    handleRedirect(){
        browserHistory.push('/reviewdetails/'+ this.props.bookid + "/"+ this.props.reviewid);
        //browserHistory.goBack();
    }

   render() {

     console.log("Renderng: ReviewChecksGQL");

        const checksNode = this.props.questions.map((item) => {
            let color;
            let status = "";
            console.log("Checks GQL");
            console.log(item);


              if(item.status == "TODO") {
                color = "blue";
                status = "missed";
              }
              else
                { return;}




            return (
              <div className="col-sm-12 col-md-11 col-lg-12 tchecs onHover">
                  <CheckGQL text={item.checkInfo.question.value} status={status} qid={item.checkInfo.question.questionId} color={color} checkid={item.checkInfo.checkId}/>
              </div>
            )
        });

        return (
          <div className="container">

            <div className="row">
            <div className="col-sm-12 col-md-11 col-lg-6">

                <div className="row backbutton">
                  <div className="col-sm-12 col-md-12 col-lg-6" style={{width: "100%" }}>
                    <span style={{fontSize:"1.5rem",color:"#333333"}}> View Report Signoff </span>
                    <button onClick={this.handleRedirect.bind(this)} className="button arrow-back" style={{float: "right"}}> BACK </button>
                  </div>
                </div>

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
    console.log("ChecksGQL STORE...");
    console.log(state);

    return {
        // bookid: state.questions.bookReview[0].bookInfo.bookId,        //OLD REDUCER
        // reviewid: state.questions.bookReview[0].review.reviewInfo.reviewId,
        // questions: state.questions.bookReview[0].review.checks

        bookid: state.getSignOff.bookReview[0].bookInfo.bookId,        //NEW REDUCER
        reviewid: state.getSignOff.bookReview[0].review.reviewInfo.reviewId,
        questions: state.getSignOff.bookReview[0].review.checks
    };
}


//export default Checks;
export default connect(mapStateToProps, null)(ReviewChecksGQL);
