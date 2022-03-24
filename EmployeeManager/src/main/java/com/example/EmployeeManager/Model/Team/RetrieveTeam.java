package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.Entity.Response.ResponseEmployee;
import com.example.EmployeeManager.Entity.Response.ResponseTeam;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.TeamRepository;
import com.example.EmployeeManager.DTO.TeamDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    public ResponseTeam retrieveTeam() {
        if (teamId <=0 ) {
            throw new InvalidArgumentException("Team Id have to greater than 0:" + String.valueOf(teamId));
        }

        Optional<Team> optionalTeam = teamRepository.findById(teamId);
        if (!optionalTeam.isPresent()) {
            throw new NotFoundException("team has id "+ String.valueOf(teamId));
        }

        Team team = optionalTeam.get();
        ResponseTeam responseTeam = TeamDTO.objectToResponse(team);
        return responseTeam;
    }

}






