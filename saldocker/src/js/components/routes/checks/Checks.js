import React from 'react';
import Check from './../check/Check';

import {connect} from 'react-redux';
import styles from './checks.css';

class Checks extends React.Component {

    constructor(props){
        super(props);
    }


   render() {
        //this.props.checks
        const checksNode = this.props.questions.questions.map((item) => {
            let color;
            if(item.STATUS == "TODO") { color = "blue";}
            else { color = item.STATUS;}

            return (
              <div className="col-sm-12 col-md-11 col-lg-6 tchecs">
                  <Check text={item.TEXT} status={item.STATUS} qid={item.QUESTIONID} color={color}/>
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
        questions: state.questions
    };
}


//export default Checks;
export default connect(mapStateToProps, null)(Checks);




//style={{border: "1px solid black", margin: "10px"}}

Checks.defaultProps = {
      checks :  [
      {
        "DISPLAYSEQ": "2",
        "QUESTIONID": "330013",
        "ROLE": "Manager",
        "FORM": "SL33 Daily Manager Check",
        "SECTION": "Weekly Checks",
        "TYPE": "OK",
        "TEXT": "All country of origin and date codes are correct and clearly displayed on loose produce",
        "STATUS": "TODO"
      },
      {
        "DISPLAYSEQ": "1",
        "QUESTIONID": "330015",
        "ROLE": "Manager",
        "FORM": "SL33 Daily Manager Check",
        "SECTION": "Weekly Checks",
        "TYPE": "OK",
        "TEXT": "A potential reductions report is produced and followed on a daily basis",
        "STATUS": "GREEN"
      },
      {
        "DISPLAYSEQ": "3",
        "QUESTIONID": "330013",
        "ROLE": "Manager",
        "FORM": "SL33 Daily Manager Check",
        "SECTION": "Weekly Checks",
        "TYPE": "OK",
        "TEXT": "All country of origin and date codes are correct and clearly displayed on loose produce",
        "STATUS": "TODO"
      },
      {
        "DISPLAYSEQ": "4",
        "QUESTIONID": "330015",
        "ROLE": "Manager",
        "FORM": "SL33 Daily Manager Check",
        "SECTION": "Weekly Checks",
        "TYPE": "OK",
        "TEXT": "A potential reductions report is produced and followed on a daily basis",
        "STATUS": "GREEN"
      }
      ]
 };




// <div className="col-md-12" style={{border: "1px solid black"}}>
//
// <div className="row">
//   <div className="col-md-10" style={{float: "left", margin: "2px"}}>
//       <p style={{color : color}}> {car.TEXT} </p>
//   </div>
//   <div className="col-md-1" style={{float: "left"}}>
//       <p style={{color : color}}> {car.STATUS} </p>
//       <p> {car.QUESTIONID} </p>
//   </div>
// </div>
//
// </div>
