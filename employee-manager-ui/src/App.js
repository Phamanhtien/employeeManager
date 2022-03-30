import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './navigator/navigator';
import EmployeeList from './content/employee-list/employee-list';

import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className='Navigator'>
        <Navigator></Navigator>
      </div>
      <div className='Content'>
        {/* <Routes>
          <Route path='/employees'>
            <EmployeeList></EmployeeList>
          </Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
