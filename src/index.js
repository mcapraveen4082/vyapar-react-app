import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


import store from './store'
import saga from './sagas/'
import { sagaMiddleware } from './middleware'

const Main = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

if (module.hot) {
    module.hot.accept();
};

sagaMiddleware.run(saga);

serviceWorker.unregister();
