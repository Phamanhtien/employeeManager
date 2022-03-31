import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './navigator/navigator';
import EmployeeList from './content/employee-list/employee-list';
import TeamList from './content/team-list/team-list';
import EmployeeDetail from './content/employee-detail/employee-detail';

import { BrowserRouter as Router,Routes, Route, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Content'>
        <Navigator></Navigator>
          <Routes>
            <Route path="/employee-list" element={<EmployeeList></EmployeeList>}></Route>
            <Route path="/team-list" element={<TeamList></TeamList>}></Route>
            <Route path="/employee/:employeeId" element={<EmployeeDetail></EmployeeDetail>}></Route>
            <Route path="*"></Route>
          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;
