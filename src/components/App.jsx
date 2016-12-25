import React from 'react';
import ReactDOM from 'react-dom';

import { Link, Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store.jsx';
import Nav from './Nav/Nav.jsx';
import Home from './Home/Home.jsx';
import NoMatch from './NoMatch/NoMatch.jsx';

class App extends React.Component {
   render() {
       const routes =
      <Route component= {Nav} path="/">
        <IndexRoute component={Home} />
         <Route path = "home" component = {Home} />
         <Route path="*" component={NoMatch} />
      </Route>;
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {routes}
        </Router>
      </Provider>
    )
   }
}

export default App;