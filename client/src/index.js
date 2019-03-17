import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from './Components/Context';

import App from './App';
import './styles/global.css';
// make Browser Router outside the ReactDOM
// ReactDOM.render(
//     <Provider>
//       <App/>
//     </Provider>,
//     document.querySelector('#root'),
// );
ReactDOM.render(<App/>, document.querySelector('#root'),
);

