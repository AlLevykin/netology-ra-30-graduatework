import React from 'react';
import ReactDOM from 'react-dom';
//import { stopReportingRuntimeErrors } from "react-error-overlay";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import './index.css';

//stopReportingRuntimeErrors();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
