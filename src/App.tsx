import React from 'react';
import Header from './components/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage'
import AboutPage from './components/pages/about/AboutPage'
import './Styles.scss';

const App: React.FC = () => {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/about" component={AboutPage} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
