import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
// import { createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
import { Provider } from 'react-redux';
import Home from '../page';
import Page2 from '../page/page2';


const Routes = () => (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/page2' component={Page2}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  )

export default Routes;