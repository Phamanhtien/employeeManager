import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigator from './navigator/navigator';
import EmployeeList from './content/employee-list/employee-list';
import TeamList from './content/team-list/team-list';
import EmployeeDetail from './content/employee-detail/employee-detail';

ReactDOM.render(
  <React.StrictMode>
  <Navigator />
  </React.StrictMode>,
  document.getElementById('navigator')
);

ReactDOM.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>,
  document.getElementById('employee-list')
);

ReactDOM.render(
  <React.StrictMode>
    <TeamList />
  </React.StrictMode>,
  document.getElementById('team-list')
);

ReactDOM.render(
  <React.StrictMode>
    <EmployeeDetail />
  </React.StrictMode>,
  document.getElementById('employee-detail')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
