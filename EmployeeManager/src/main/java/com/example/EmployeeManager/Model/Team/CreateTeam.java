package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestTeam;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CreateTeam {
    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    public RequestTeam requestTeam;

    public void setRequestTeam(RequestTeam requestTeam) {
        this.requestTeam = requestTeam;
    }

    public void createTeam() {
        int managerId = requestTeam.getManagerId();
        if (managerId <= 0) {
            throw new InvalidArgumentException("managerId has to greater than 0: " + String.valueOf(managerId));
        }

        Optional<Employee> managerOptional = employeeRepository.findById(requestTeam.getManagerId());
        if (!managerOptional.isPresent()) {
            throw new NotFoundException("manager has id " + String.valueOf(managerId));
        }

        if (requestTeam.getName().isEmpty()) {
            throw new InvalidArgumentException("team name has to fill");
        }

        Team team = new Team();
        Employee manager = managerOptional.get();
        team.setName(requestTeam.getName());
        team.setManagerId(requestTeam.getManagerId());
        teamRepository.save(team);
    }
}
