import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import RouterApp from '../../components/RouterApp';
import $ from 'jquery';

class App extends React.Component {

  handleRedirect(){
//      browserHistory.goBack(); //CHANGEDD
      //browserHistory.push("/profile");
      //browserHistory.push("/");
  }

  componentDidMount() {
    console.log("App... GraphQL ajax request....!!!!!");
    let param = `
query {
getStore(storeId:"2055")
           {
                          storeId,storeName
                          books(bookId:"2017 P1 SL78 Trolley Collection Vehicles") {
                                         bookId,
                                         checks
                                         {
                                                        checkId,
                                                        checkType,
                                                        checkTime{
                                                                       year,
                                                                       week,
                                                                       day,
                                                                       hour
                                                        },
                                                        question {
                                                                       questionId,
                                                                       value
                                                        }
                                                        latestEvent{
                                                                       eventId,
                                                                       eventType,
                                                                       status,
                                                                       modifiedBy{
                                                                                      userId
                                                                       },
                                                                       nextSteps{
                                                                                      nextStepId,
                                                                                      description {
                                                                                                     value

                                                                                      },
                                                                                      assignedTo{
                                                                                                     userId
                                                                                                     },

                                                                                      initials,
                                                                                      status,
                                                                                      notes{
                                                                                      value
                                                                                      }
                                                                       }
                                                        }
                                         }
                          }
           }
}
    `;

    $.ajax({
    type: "POST",/*method type*/
    contentType: "application/graphql; charset=utf-8",
    headers:{ "clientId": "233668646673605", "clientSecret": "33b17e044ee6a4fa383f46ec6e28ea1d"},
    url: "http://dev-safeandlegal-999215169.eu-west-1.elb.amazonaws.com/graphql",/*Target function that will be return result*/
    data: param,/*parameter pass data is parameter name param is value */ //{"data":"' + param + '"}
    dataType: "json",
    success: function(data) {
           console.log("GraphQL ajax output: ");
           console.log(data);
           alert("Success");
    },
    error: function(result) {
        alert("Error");
    }
  });

  }

   render() {
      //$("#mainprofile").hide();
      //$("#placeholder").show();


      return (
    <div className="container">

         <div className="mainnav col-md-12 col-sm-12">

            <button onClick={this.handleRedirect.bind(this)} className="button arrow-back"> BACK </button>

           <h3> COMPLIANCE </h3>
            <ul>
             <li> <Link to="/checksRoutes/checksGQL">Checks</Link> </li>
             <li> <Link to="/checksRoutes/instr">Instructions</Link> </li>
             <li> <Link to="/checksRoutes/notes">Notes</Link> </li>
             <li> <Link to="/checksRoutes/details">Details</Link> </li>
            </ul>
          </div>


          <div className="row">
            <div className="col-md-12">
              {this.props.children}
            </div>
          </div>


      </div>
      )
   }
}

export default App;

//
// <Link to="/checks">Checks</Link>
// <Link to="/instr">Instructions</Link>
// <Link to="/notes">Notes</Link>
// <Link to="/details">Details</Link>

// <li to="/checks">Checks</li>
// <li to="/instr">Instructions</li>
// <li to="/notes">Notes</li>
// <li to="/details">Details</li>
