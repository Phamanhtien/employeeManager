package com.example.EmployeeManager.Model.Team;

import com.example.EmployeeManager.DTO.TeamDTO;
import com.example.EmployeeManager.Entity.Response.ResponseTeam;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RetrieveTeams {
    @Autowired
    private TeamRepository teamRepository;

    public List<ResponseTeam> retrieveTeams() {
        List<Team> teamList = teamRepository.findAll();
        if (teamList.isEmpty()) {
            throw new NotFoundException("team");
        }

        int teamListSize = teamList.size();
        List<ResponseTeam> responseTeamList = new ArrayList<ResponseTeam>();
        ResponseTeam responseTeam = new ResponseTeam();

        for (int i = 0; i < teamListSize; i++) {
            responseTeam = TeamDTO.objectToResponse(teamList.get(i));
            responseTeamList.add(responseTeam);
        }
            return responseTeamList;
    }
}
