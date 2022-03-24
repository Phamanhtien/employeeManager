package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Response.ResponseEmployee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.EmployeeManager.DTO.EmployeeDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RetrieveListTeamMember {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TeamRepository teamRepository;

    private int id;

    public RetrieveListTeamMember() {

    }

    public void setId(int id) {
        this.id = id;
    }

    public List<ResponseEmployee> retrieveListTeamMember() {
        if (id <= 0) {
            throw new InvalidArgumentException("team Id has to greater than 0: " + String.valueOf(id));
        }

        Optional<Team> optionalTeam = teamRepository.findById(id);
        if (!optionalTeam.isPresent()) {
            throw new NotFoundException("team has id " + String.valueOf(id));
        }

        List<Employee> employeeList = employeeRepository.findByTeamId(id);
        int employeeListSize = employeeList.size();
        List <ResponseEmployee> responseEmployeeList = new ArrayList<ResponseEmployee>();
        ResponseEmployee responseEmployee = new ResponseEmployee();

        for (int i =0 ; i < employeeListSize; i ++) {
            responseEmployee = EmployeeDTO.objectToResponse(employeeList.get(i),optionalTeam.get());
            responseEmployeeList.add(responseEmployee);
        }
        return responseEmployeeList;
    }
}
