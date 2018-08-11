import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Main from './components/Main.jsx';
import Quiz from './components/Quiz.jsx';
import TranslationApp from './components/TranslatioApp.jsx';


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <h2>Moja aplikacja</h2>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/translate" component={TranslationApp}/>
                    <Route
                        path="/learn" component={Quiz}
                        />}
                    />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);