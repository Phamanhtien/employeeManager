import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from "./navigator/navigator";
import EmployeeList from "./content/employee-list/employee-list";
import TeamList from "./content/team-list/team-list";
import EmployeeDetail from "./content/employee-detail/employee-detail";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore} from "redux"
import employeeStore from "./store/employee-store"

function App() {
    return (
        <div className="App">
            <Router>
                <div className="Content">
                    <Navigator></Navigator>
                    <Routes>
                        <Route
                            path="/employee-list"
                            element={<EmployeeList></EmployeeList>}
                        ></Route>
                        <Route
                            path="/team-list"
                            element={<TeamList></TeamList>}
                        ></Route>
                        <Route
                            path="/employee/:employeeId"
                            element={
                                <Provider store={employeeStore}>
                                    <EmployeeDetail></EmployeeDetail>
                                </Provider>
                            }
                        ></Route>
                        <Route path="*"></Route>
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
