import React from 'react';
import {Route, Switch, Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import './App.css';
import UstMenu from "./UstMenu";
import Sayfa1 from './Sayfa1';
import Sayfa2 from './Sayfa2';
import Home from './Home';
import Login from './Login';

const history = createBrowserHistory();

function App() {

  return (
    <div>
        <Router history={history}>
            <Switch>
                <Route path={`/login`} component={Login}/>
                <Route>
                    <Router history={history}>
                        <UstMenu history={history}/>
                        <Switch>
                            <Route path={`/s1`} component={Sayfa1}/>
                            <Route path={`/s2`} component={Sayfa2}/>
                            <Route component={Home}/>
                        </Switch>
                    </Router>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;