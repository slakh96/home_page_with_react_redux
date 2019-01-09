import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import time_reducer from './time_files/time_reducer'
import {Provider} from 'react-redux';
import todo_reducer from './todo_files/todo_reducer';
import weather_reducer from './weather_files/weather_reducer';
import $ from "jquery";
//import registerServiceWorker from './registerServiceWorker';
const main_reducer = combineReducers({
    time: time_reducer,
    todo: todo_reducer,
    weather: weather_reducer
});
const store = createStore(main_reducer);

ReactDOM.render(
<Provider store = {store}>
    <App/>
</Provider>,
document.getElementById('root'));
//registerServiceWorker();
