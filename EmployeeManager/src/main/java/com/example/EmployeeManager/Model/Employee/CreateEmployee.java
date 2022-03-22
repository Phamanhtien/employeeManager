package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestEmployee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import com.example.EmployeeManager.Util;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmployeeManager.DTO.EmployeeDTO;

import java.util.Optional;

@Service
public class CreateEmployee {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TeamRepository teamRepository;

    private RequestEmployee requestEmployee;

    public void setRequestEmployee(RequestEmployee requestEmployee) {
        this.requestEmployee = requestEmployee;
    }

    public void createEmployee() {
        Integer teamId = requestEmployee.getTeamId();
        if (teamId <= 0) {
            throw new InvalidArgumentException("TeamId " + String.valueOf(teamId));
        }

        Optional<Team> optionalTeam = teamRepository.findById(teamId);
        if (!optionalTeam.isPresent()) {
            throw new NotFoundException("Team has id " + String.valueOf(teamId));
        }


        if (requestEmployee.getFullName().isEmpty()) {
            throw new InvalidArgumentException("Full name is empty");
        }


        if (!Util.isPhoneNumber(requestEmployee.getPhone())) {
            throw new InvalidArgumentException("Phone number");
        }

        if (requestEmployee.getAddress().isEmpty()) {
            throw new InvalidArgumentException("Address is empty");
        }

        if (requestEmployee.getSalaryPerHour() <= 0) {
            throw new InvalidArgumentException("Salary perHour");
        }

        Employee employee = new Employee();
        employee = EmployeeDTO.requestToObject(requestEmployee,employee);

        employeeRepository.save(employee);
    }
}
