import React from 'react';
import styles from './details.css';

class Details extends React.Component {

    constructor(props) {
      super(props);
    }



    render() {

      let temp = [];
      let data = this.props.details;

      for(var i in data){
        temp.push({key:i, value: data[i]});
      }


      var res = temp.map((item) => {
        return (
        <div className="col-md-6 col-sm-6 col-xs-12 tdet">
          <label> {item.key} </label>
        <p style={{padding:" 0px 0px 10px 0px"}}><strong>  {item.value}</strong> </p>
        </div>
      )
      });

      return (
        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-11 detailsMargin">

         <div className="row">
            {res}
         </div>

         </div>
        </div>
      )
   }

}

export default Details;

//style={{float: "left"}}

Details.defaultProps = {

    details :  {
      "Date Created": "08 May 2017 14:12",
      "Created": "08 May 2017 14:12",
      "Created By": "9999.Pramod",
      "Compliance Date": "08 May 2017 00:00",
      "User Role": "Manager",
      "Owner": "9999.pramod",
      "Draft": "true",
      "IP Address": "94.125.20.102:63924",
      "Training": "No",
      "Period": "3",
      "Week": "11",
      "Day": "1",
      "Hour": "",
      "New Actions": "No",
      "Store1": "TAAP",
      "Book1": "SL33 Produce",
      "Form1": "SL33 Daily Produce Check",
      "Compliance Time": "0"
  },

  details1 : [
    {  title: "dc",  content: "8th may 2017" },
    {  title: "crd",  content: "8th may 2017"},
    {  title: "crdby", content: "vinod"},
    {  title: "cd", content: "8th may 2017"},
    {  title: "user", content: "manager"},
    {  title: "owner", content: "vinod"},
    {  title: "two", content: "true"},
    {  title: "ipaddr", content: "1.2.3.4"},
    {  title: "trng", content: "No"},
    {  title: "passed", content: 3},
    {  title: "week", content: 11},
    {  title: "hour", content: 12},
    {  title: "day", content: 1},
    {  title: "actions", content: "no"},
    {  title: "store", content: "one"},
    {  title: "block", content: "two"},
    {  title: "floor", content: "3"},
    {  title: "compltime", content: 5}
]

}




// const carNode = this.state.details.map((car) => {
//         return (
//           <div>
//             <h3> {car.title} </h3>
//             <p> {car.content} </p>
//           </div>
//         )
//     });
//
//
//  return (
//     <div>
//        { carNode }
//     </div>
//  )
// }
