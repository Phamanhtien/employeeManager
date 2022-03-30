import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import EmployeeList from './content/employee-list/employee-list';
import TeamList from './content/team-list/team-list';
import EmployeeDetail from './content/employee-detail/employee-detail';
import EmployeeAdd from './content/employee-add/employee-add';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
