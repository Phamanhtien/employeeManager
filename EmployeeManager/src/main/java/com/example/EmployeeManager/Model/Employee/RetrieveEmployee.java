package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Response.ResponseEmployee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.EmployeeManager.DTO.EmployeeDTO;

import java.util.Optional;

@Service
public class RetrieveEmployee {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TeamRepository teamRepository;
    private int id;

    public void setId(int id) {
        this.id = id;
    }

    public ResponseEmployee retrieveAnEmployee() throws NotFoundException {

        Optional<Employee>optionalEmployee = employeeRepository.findById(id);
        if (id <= 0 ) {
            throw new InvalidArgumentException("id");
        }
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("employee has id = "+ String.valueOf(id));
        }

        Employee employee = optionalEmployee.get();
        Optional<Team> optionalTeam = teamRepository.findById(employee.getTeamId());
        if (!optionalTeam.isPresent()) {
            throw new NotFoundException("team has id = "+ String.valueOf(id));
        }

        Team team = optionalTeam.get();


        ResponseEmployee responseEmployee = EmployeeDTO.objectToResponse(employee,team);
        return responseEmployee;
    }
}
