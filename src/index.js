import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import mainStore from './stores/mainStore';

import './index.css';
import App from './components/app/App';
// const stores = {
//   mainStore,
// };

ReactDOM.render(<App />, document.getElementById('root'));
