import React from 'react';
import Answer from './Answer';

class Questions extends React.Component {

  constructor(props) {
    super(props);

    this.backed = this.backed.bind(this);
    this.getAnswers = this.getAnswers.bind(this);

    this.state = {val : 0};
  }


  backed(e) {
    this.setState( {val: false} );
  }

  getAnswers(qno) {
     console.log("qno: ", qno);
     this.setState( {val: qno} );
  }

  render() {

       var table = (
          <Table1 backed={this.props.backed} res={this.props.res} getAnswers={this.getAnswers} />
       );

       var answer = ( <Answer backed={this.backed} qno={this.state.val} qqno={this.props.res}/> );

       return (
         <div>
           { this.state.val ? answer : table }
         </div>
       );
  }


}

export default Questions;




class TableRow extends React.Component {

  constructor(props) {
    super(props);
  }

  sendQno(qno) {
    console.log(qno);
    this.props.fetchAnswers(qno);
  }

  render() {
    const {data} = this.props;

    /*BUG1: const row = data.map((data0) => */
    const row = data.questions.map((data0) =>
      <tr>
        <td key={data0.qno} onClick={this.sendQno.bind(this, data0.qno)} > {data0.qno} </td>
      </tr>
    );

    return (
      <span>{row}</span>
    );
  }

}



class Table1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <button onClick={this.props.backed} className="button arrow-back"> BACK </button>
        <table>
          <TableRow data={this.props.res} fetchAnswers={this.props.getAnswers} />
        </table>
      </div>
    );

  }
}



/* <tr>
  <td key={data0.qno} href="#"> {data0.qno} </td>
  <td key={data.name}>{data.name}</td>
  <td key={data.id}>{data.id}</td>
  <td key={data.price}>{data.price}</td>
</tr> */
