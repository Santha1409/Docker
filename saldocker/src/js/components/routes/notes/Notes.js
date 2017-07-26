import React from 'react';
import styles from './notes.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import {addNotes_Thunk} from '../../../actions/index';    //OLD REDUCER
import {addNotes_Thunk} from '../../../actions/checksActions';    //NEW REDUCER

class Notes extends React.Component {

   constructor(props) {
     super(props);
   }

   addNote(e){
     e.preventDefault();
     console.log("Notes: addNote");
     let note = this.refs["note"].value;
     console.log(note);
     this.props.addNotes_Thunk(note);
   }

   render() {
      console.log("Renderng: Notes");

      var loading = null;
    //  if(this.props.fetchingg) {
    if(this.props.processingAN) {
        loading = (
          <div className="alert alert-danger">
              <strong>Processing!</strong> Please Wait... !!!!!!
          </div>
        );
      }


      let notesEle = this.props.notes.map((note) => {
          return (


              <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12 notesShadow onHover">
                  <p> Note </p>
                  <p style={{padding:" 0px 0px 10px 0px"}}><strong> {note.value} </strong> </p>
                </div>
              </div>

          );
      });

      return (
        <div className="row">
        <div className="col-sm-12 col-md-11 col-lg-11">

            {loading}

            <div className="row">
            <div className="col-sm-9 col-md-11 col-lg-6">

                <form onSubmit={this.addNote.bind(this)}>
                 <div className="form-group">
                   <p> </p>
                   <input type="text" ref="note" className="form-control" id="note" placeholder="Enter note" name="note" />
                   <button type="submit" className="btn btn-default">Add Note</button>
                 </div>
                </form>

                {notesEle}

            </div>
            </div>

        </div>
        </div>
      )
   }
}


function matchDispatchToProps(dispatch){
    console.log("props dispatch : Notes");
    console.log(dispatch);
    return bindActionCreators({ addNotes_Thunk: addNotes_Thunk}, dispatch);
}

function mapStateToProps(state) {
  console.log("Notes STORE...");
  console.log(state);
  return {
/*      notes: state.questions.data.notes,                      //COMPLIANCE   //OLD REDUCER
//      fetchingg: state.questions.loadingData,
      processingAN: state.questions.loadingANChecks */

            notes: state.getChecks.data.notes,                      //NEW REDUCER
            processingAN: state.getChecks.loadingANChecks
  };
}

//export default Notes;
export default connect(mapStateToProps, matchDispatchToProps)(Notes);






//style={{border: "1px solid black", margin: "10px"}}

Notes.defaultProps = { content: "note1" };



/*
<div className="col-sm-12 col-md-11 col-lg-6 tnote">

<div className="row">
 <div className="col-sm-12 col-md-12">
    <p> Note </p>
    <p> {this.props.content}</p>
 </div>
</div>

</div>
*/


/*
<div className="container">

  <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add Note</button>

  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog modal-sm">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Modal Header</h4>
        </div>
        <div className="modal-body">
          <p>This is a small modal.</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</div>

</div>
*/
