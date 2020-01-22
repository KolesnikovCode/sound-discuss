import React from 'react';
import Header from './components/core/header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import AboutPage from './components/pages/about/AboutPage';
import ProjectPage from './components/pages/project/ProjectPage';
import './Styles.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import * as firebase from "firebase/app";
import firebaseConfig from './api/firebaseConfig';

const store = createStore(reducer);

firebase.initializeApp(firebaseConfig);

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
                <Route exact path="/project/:projectId" component={ProjectPage} />
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
