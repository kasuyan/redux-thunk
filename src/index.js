import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import AppStore from './Redux/store';

const store = AppStore();
import App from './app'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'))