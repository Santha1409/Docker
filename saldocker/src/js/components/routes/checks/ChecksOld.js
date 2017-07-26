import React from 'react';

class Checks extends React.Component {

    constructor(props){
        // Pass props to the parent component
        super(props);
        // Set initial state
        this.state = {
            // State needed
            cars: []
        };
    }

    componentDidMount(){
        // Static data
        const data = [
            {
                id: 1,
                name: 'Honda Accord Crosstour',
                year: '2010',
                model: 'CadetBlue'

            },
            {
                id: 2,
                name: 'Mercedes-Benz AMG GT Coupe',
                year: '2016',
                model: 'DarkSalmon'
            },
            {
                id: 3,
                name: 'BMW X6 SUV',
                year: '2016',
                model: 'CadetBlue'
            },
            {
                id: 4,
                name: 'Ford Edge SUV',
                year: '2016',
                model: 'DarkSalmon'
            },
            {
                id: 5,
                name: 'Dodge Viper Coupe',
                year: '2017',
                model: 'CadetBlue'
            }
        ];
        // Update state
        this.setState({cars: data});s
    }


   render() {

    const carNode = this.state.cars.map((car) => {

            return (
                 <div className="col-md-12">
                   <a
                       href="#"
                       className="list-group-item"
                       key={car.id}
                       style={{backgroundColor : car.model}} >

                       {car.name}

                   </a>
                 </div>
            )
        });



         return (
             <div>
                 <h4>Cars page</h4>
                 <div className="list-group">
                     {carNode}
                 </div>
             </div>
         );

   }
}

export default Checks;



Checks.defaultProps = { content: "note1" };










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
