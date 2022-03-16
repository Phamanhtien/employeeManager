package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RetrieveTeam {
    @Autowired
    private TeamRepository teamRepository;

    private int teamId;

    public int getTeamId() {
        return teamId;
    }

    public void setTeamId(int teamId) {
        this.teamId = teamId;
    }

    public Team retrieveTeam() {
        if (teamId <=0 ) {
            throw new InvalidArgumentException("Team Id have to greater than 0:" + String.valueOf(teamId));
        }
        return teamRepository.findById(teamId).get();
    }

}






