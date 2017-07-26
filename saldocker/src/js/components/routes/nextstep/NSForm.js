import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addNextStepForQ, editNextStepForQ, changeStatusForQ} from '../../../actions/index';
import styles from './nsformstyle.css';

class NSForm extends React.Component {

  constructor(props) {
    super(props);
    this.nsobj = null;
    this.state = {
        notes: "",
        assigned: "",
        initials: "",
        date: "",
        snextstep: ""
    };
  }

  componentWillMount() {
    console.log("will mount.............");
    console.log("NSForm CDM");
    console.log("route data: ")
    console.log(this.props.route.data);

    let routedata = this.props.route.data;
    let action = this.props.params.action;
    let qid = this.props.params.qid;
    let nid = this.props.params.nid;
    var obj;

    if(action === "add")
    {
      console.log("ADD action is triggered.. RETURN");
      return;
    }
    else {
      console.log("EDIT action is triggered.. MODIFY");
      console.log("CDM fetch existing record: "+qid+"-"+nid);
    routedata.questions.forEach(function(item){
           //console.log(item.QUESTIONID, action.payload);
           if(item.QUESTIONID === qid)
           {
             console.log("Qid Matched..");
             obj =  item.NEXTSTEPS.filter((ele) => {
                        console.log("Nid matched..");
                        console.log(ele.id, nid);
                        return (ele.id === parseInt(nid));
                    });
              console.log(obj);
           }
    });
    this.nsobj = obj;
    console.log(this.nsobj);
     this.setState({
       notes: this.nsobj[0].notes,
       assigned: this.nsobj[0].assigned,
       initials: this.nsobj[0].initials,
       date: this.nsobj[0].date,
       snextstep: this.nsobj[0].snextstep
     });
    console.log("new Obj");
    console.log(this.nsobj);
  }

  }

  componentDidMount() {
    console.log("Did mount.............");
    console.log("NSForm CDM");
    console.log("route data: ")
    console.log(this.props.route.data);

    let routedata = this.props.route.data;
    let action = this.props.params.action;
    let qid = this.props.params.qid;
    let nid = this.props.params.nid;
    var obj;

    if(action === "add")
    {
      console.log("ADD action is triggered.. RETURN");
      return;
    }
    else {
      console.log("EDIT action is triggered.. MODIFY");
      console.log("CDM fetch existing record: "+qid+"-"+nid);
    routedata.questions.forEach(function(item){
           //console.log(item.QUESTIONID, action.payload);
           if(item.QUESTIONID === qid)
           {
             console.log("Qid Matched..");
             obj =  item.NEXTSTEPS.filter((ele) => {
                        console.log("Nid matched..");
                        console.log(ele.id, nid);
                        return (ele.id === parseInt(nid));
                    });
              console.log(obj);
           }
    });
    this.nsobj = obj;
    this.setState({
      notes: this.nsobj[0].notes,
      assigned: this.nsobj[0].assigned,
      initials: this.nsobj[0].initials,
      date: this.nsobj[0].date,
      snextstep: this.nsobj[0].snextstep
    });
    console.log("new Obj");
    console.log(this.nsobj);
  }

  }

  handleRedirect(){
      //browserHistory.push('/checks');
      //  browserHistory.goBack();
      browserHistory.push('/checkdetail/'+this.props.params.qid);
  }

  formChanged(event) {
    console.log("Form Changed.");

    let action = this.props.params.action;

    if(action === "add") {
      console.log("ADD action is triggered.. RETURN");

      this.setState({
        notes: this.refs["notes"].value,
        assigned: this.refs["assigned"].value,
        initials: this.refs["initials"].value,
        snextstep: this.refs["snextstep"].value
      });

    }
    else if(action === "edit") {
      console.log("EDIT action is triggered.. MODIFY");
    const field = event.target.name;
    //this.refs[field].value = event.target.value;
    //this.nsobj[0].notes = event.target.value;
    this.nsobj[0][field] = event.target.value;
    this.setState({
      notes: this.nsobj[0].notes,
      assigned: this.nsobj[0].assigned,
      initials: this.nsobj[0].initials,
      snextstep: this.nsobj[0].snextstep
    });
    console.log(this.nsobj[0].notes);
    }
    else
      console.log("NOTHING");
  }


  handleSubmit(e) {
    e.preventDefault();

    const action = this.props.params.action;
    const qid = this.props.params.qid;
    const nid = this.props.params.nid;

    let formData;
    if(action === "add")
       formData = {};
    else if(action === "edit")
    {
       formData = {};
       console.log("existing obj :"+this.nsobj[0].id);
       formData.id = this.nsobj[0].id;
    }
    else
       console.log("No action specified...");

    for(const field in this.refs) {
      formData[field] = this.refs[field].value;
    }
    //formData["date"] = new Date();
    formData["date"] = "24 May 2017 15:45";


    if(action === "add")
    {
      this.props.addNextStepForQ(qid, formData);
      this.props.changeStatusForQ(qid);
    }
    else if(action === "edit")
    {
      console.log("Edit action called..");
      console.log(formData);
      this.props.editNextStepForQ(qid, nid, formData);
    }
    else
      console.log("NO Action Mentioned...");

    //browserHistory.push('/checks');
      browserHistory.goBack();
  }


  render() {

    return (
      // <div className="stay-in-touch">
      //   <form className="stay-in-touch-form">
      //     <p> Next Step Opened </p>
      //     <p> {this.state.date} </p>
      //
      //     <p> Status </p>
      //     <p> :status </p>
      //
      //
      //     Notes: <input ref="notes"  type='text' name="notes" value={this.state.notes} onChange={this.formChanged.bind(this)}/>
      //     Assigned: <input ref="assigned"  type='text' name="assigned" value={this.state.assigned} onChange={this.formChanged.bind(this)}/>
      //     Initials: <input ref="initials"  type='text' name="initials" value={this.state.initials} onChange={this.formChanged.bind(this)}/>
      //
      //     <input type="submit" value="Submit"  onClick={this.handleSubmit.bind(this)}/>
      //     <input type="reset" value="Cancel" onClick={this.handleRedirect.bind(this)}/>
      //   </form>
      // </div>

      <div className="col-sm-12 col-md-11 col-lg-6 ">
      <div className="row">
        <div className="col-sm-12 stay-in-touch noborder" >
          <form className="stay-in-touch-form">

            <div className="row">
              <div className="col-md-6">
                <p><label>Next Step Opened:</label> {this.state.date} </p>
                <p><label>Status:</label> red </p>
              </div>
              <div className="col-md-6">
                <button type="button1" className="btn" onClick={this.handleRedirect.bind(this)}>Close next steps</button>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                  <select id="snextstep" name="snextstep" ref="snextstep" value={this.state.snextstep} onChange={this.formChanged.bind(this)} required>
                      <option value="" default>Select Department</option>
                      <option value="FreqUsed">Frequently Used</option>
                      <option value="BankOffice">Back Office</option>
                      <option value="SRM">SRM</option>
                      <option value="Security">Security</option>
                  </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                  <p><label>Notes</label></p>
                  <input ref="notes" type="text" name="notes" placeholder="Enter text" value={this.state.notes} onChange={this.formChanged.bind(this)}/>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <p><label >Assigned</label></p>
                <p> <input ref="assigned" type="text" name="assigned" placeholder="Enter text" value={this.state.assigned} onChange={this.formChanged.bind(this)}/> </p>
              </div>
              <div className="col-md-6 col-lg-6">
                <p><label >Initials</label></p>
                <p><input ref="initials" type="text" name="initials" placeholder="Enter text" value={this.state.initials} onChange={this.formChanged.bind(this)}/></p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <p>
                  <input type="submit" name="addsubmited" value="Save" onClick={this.handleSubmit.bind(this)}/>
                   <input name="reset" type="reset" value="Cancel" onClick={this.handleRedirect.bind(this)}/>
                </p>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
    );

  }
}


function matchDispatchToProps(dispatch){
    console.log("props dispatch");
    return bindActionCreators({addNextStepForQ: addNextStepForQ, editNextStepForQ: editNextStepForQ, changeStatusForQ: changeStatusForQ}, dispatch);
}



//export default NSForm
export default connect(null, matchDispatchToProps)(NSForm);






// Notes: <input ref="notes"  type='text' name="notes" value={this.nsobj[0].notes} onChange={this.formChanged.bind(this)}/>
// Assigned: <input ref="assigned"  type='text' name="assigned" value={this.nsobj[0].assigned} onChange={this.formChanged.bind(this)}/>
// Initials: <input ref="initials"  type='text' name="initials" value={this.nsobj[0].initials} onChange={this.formChanged.bind(this)}/>
