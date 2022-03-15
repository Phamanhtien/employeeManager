package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RetrieveListTeamMember {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    TeamRepository teamRepository;

    private int id;

    public RetrieveListTeamMember() {

    }

    public void setId(int id) {
        this.id = id;
    }

    public List<Employee> retrieveListTeamMember() {
        if (id <= 0) {
            throw new InvalidArgumentException("team Id has to greater than 0: " + String.valueOf(id));
        }

        Optional<Team> optionalTeam = teamRepository.findById(id);
        if (!optionalTeam.isPresent()) {
            throw new NotFoundException("team has id " + String.valueOf(id));
        }
        return employeeRepository.findByTeamId(id);
    }
}
