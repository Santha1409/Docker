   import React from 'react';
   import Instr from './routes/instructions/Instr';
   import Checks from './routes/checks/Checks';
   import Details from './routes/details/Details';
   import App from './routes/App';
   import Notes from './routes/notes/Notes';

   import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

//import {HashRouter, Route} from 'react-router-dom';

class RouterApp extends React.Component {
   render() {
      return (
        <Router history = {browserHistory}>
            <Route path = "/" component = {App}>
               <IndexRoute component = {Checks} />
               <Route path = "instr" component = {Instr} />
               <Route path = "checks" component = {Checks} />
               <Route path = "details" component = {Details} />
               <Route path = "notes" component = {Notes} />
               <Route path = "checkinfo" component = {CheckInfo} />
          </Route>
        </Router>
      )
   }
}

export default RouterApp;



// <HashRouter>
//    <Route path = "/" component = {App}>
//       <Route path = "home" component = {Home} />
//       <Route path = "about" component = {About} />
//       <Route path = "contact" component = {Contact} />
//    </Route>
// </HashRouter>

//
// <Router history = {browserHistory}>
//    <Route path = "/" component = {App}>
//       <IndexRoute component = {Home} />
//       <Route path = "home" component = {Home} />
//       <Route path = "about" component = {About} />
//       <Route path = "contact" component = {Contact} />
//    </Route>
// </Router>
