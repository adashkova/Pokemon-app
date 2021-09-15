import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';
import { Root } from './components/Root'

import './index.css';
import App from './components/app/App';
// const stores = {
//   mainStore,
// };

ReactDOM.render(<Root />, document.getElementById('root'));
