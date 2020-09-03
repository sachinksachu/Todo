import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './Login';
import Header from './Header';
import Todo from './Todo';
import CakeContainer from './CakeContainer';

export class Main extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path ="/todo" component={Todo}/>
                    <Route path ="/cake" component={CakeContainer}/>
                    </Switch>
            </div>
        )
    }
}

export default Main
