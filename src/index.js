import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './assets/styles/css/app.css';
import App from './containers/App';
import Home from './components/Home';
import allReducer from './store';

const store = createStore(allReducer);;

const Wrapper = () => (
    <Provider store={store}>
      <Router>
          <div>
            <Route exact path="/" component={App}/>
            <Route exact path="/:id" component={Home} />
          </div>
      </Router>
      </Provider>
    );
  

ReactDOM.render(<Wrapper />, document.getElementById('root'));