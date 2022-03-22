package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestEmployee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import com.example.EmployeeManager.DTO.EmployeeDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UpdateEmployee {
    @Autowired
    EmployeeRepository employeeRepository;

    @Autowired
    TeamRepository teamRepository;

    private RequestEmployee requestEmployee;

    public RequestEmployee getRequestEmployee() {
        return requestEmployee;
    }

    public void setRequestEmployee(RequestEmployee requestEmployee) {
        this.requestEmployee = requestEmployee;
    }

    public void updateEmployee() {

        int employeeId = requestEmployee.getId();
        if (employeeId <= 0) {
            throw new InvalidArgumentException("Employee's id have to greater than 0: " + String.valueOf(employeeId));
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Employee has id: " + String.valueOf(employeeId) + " not exist");
        }

        int teamId = requestEmployee.getTeamId();
        if (teamId <= 0) {
            throw new InvalidArgumentException("Team's id have to greater than 0: " + String.valueOf(employeeId));
        }

        Optional<Team> optionalTeam = teamRepository.findById(teamId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Team has id: " + String.valueOf(employeeId) + " not exist");
        }

        Employee employee = optionalEmployee.get();
        employee = EmployeeDTO.requestToObject(requestEmployee);

        employeeRepository.save(employee);
    }
}
