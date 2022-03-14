package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RetrieveTeams {
    @Autowired
    private TeamRepository teamRepository;

    public List<Team> retrieveTeams() {
        List<Team> teamList = teamRepository.findAll();
        if (teamList.isEmpty()) {
            throw new NotFoundException("team");
        }
        return teamList;
    }
}
