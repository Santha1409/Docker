import React from 'react';
import {connect} from 'react-redux';
//import Check from './../check/Check';
//import styles from './checks.css';
import Review from './Review';

class Reviews extends React.Component {

    constructor(props){
        super(props);
    }


   render() {
        //this.props.checks
        console.log("Rendering: Reviews");
        console.log("BookID : "+ this.props.bookid);
        const book = this.props.questions.filter((item) => {
          console.log("iterating");
            if(item.bookInfo.bookId === this.props.bookid) {
              console.log("Book matched");
              return item;
            }
        });

        console.log(book)
        let checksNode = book[0].reviewsBetweenDates.map((item) => {
          console.log(item);
          console.log(item.reviewInfo);
          let one = item.reviewInfo;
          console.log(one.reviewTime);
            return (
              <div className="col-sm-12 col-md-11 col-lg-11 tchecs">
                  <Review reviewid={item.reviewInfo.reviewId} bookid={book[0].bookInfo.bookId} year={one.reviewTime.year} week={one.reviewTime.week}  period={one.reviewTime.period} day={one.reviewTime.day} reviewed={item.signOffs.reviewSignOffTime} />
              </div>
            )
        });

        return (
            <div>
                <div className="list-group">
                    {checksNode}
                </div>
            </div>
        );

   }
}


function mapStateToProps(state) {
    return {
//        questions: state.questions.reviews    //OLD REDUCER

          questions: state.getSignOff.reviews    //NEW REDUCER
    };
}


//export default Checks;
export default connect(mapStateToProps, null)(Reviews);
