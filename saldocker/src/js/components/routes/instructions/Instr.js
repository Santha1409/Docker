import React from 'react';
import styles from './intr.css';
import InstrComp from './InstrComp';
import {connect} from 'react-redux';

class Instr extends React.Component {
  constructor(props){
      super(props);
  }

 render() {
      return (
        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-12">

            <p> User Instructions </p>
            <p>Instructions for completing the Produce checks</p>
            <p>• Checks must be completed between 8am and 10am by a member of staff trained to complete this Safe and Legal record.</p>
            <p>• If any equipment or maintenance issues occur during the day, please report the issue and record as a next step.</p>
            <p>• Each check must be scored either “G” for green, or “R” for red. Any check that is not applicable to your store please score as NA.</p>
            <p>• Make sure a next step is recorded for all checks scored Red.</p>
            <p>• There are Team Manager’s checks each day which can be completed at any time during the day. This gives the Manager the opportunity to check the quality of completion.</p>
            <p>• Every day, the Fruit & Veg Manager must check the quality of rotation in 2 random mods. The results must be recorded as described in the example page.</p>
            <p>• In the absence of the Team Manager, another Team Manager or the Lead Manager can complete the Daily Manager’s and rotation checks.</p>
            <p>• Plan to check a minimum of 2 mods for each product group each period.</p>
            <p>•	At the end of each day and week the checks are reviewed and signed by the Team Manager</p>
            <p>• At the end of each week, the checks are reviewed and signed by the Lead Manager.</p>
            <p>•	At the end of the period the checks are reviewed and signed by the Compliance Manager</p>
            <p>• At the end of each period the Store Manager will review any unresolved next steps.</p>
            <p>• Any products found out of code on the shop floor must be recorded when found in the ‘Out of Code’ section which is at the end of each week.</p>

        </div>
        </div>


      );
 }

}

export default Instr;
