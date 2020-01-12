import React from 'react';
import Header from './components/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage'
import AboutPage from './components/pages/about/AboutPage'
import './Styles.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';

const store = createStore(reducer);


const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
