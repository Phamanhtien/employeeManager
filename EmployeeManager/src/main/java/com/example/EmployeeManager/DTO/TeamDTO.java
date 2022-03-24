package com.example.EmployeeManager.DTO;

import com.example.EmployeeManager.Entity.Request.RequestTeam;
import com.example.EmployeeManager.Entity.Response.ResponseTeam;
import com.example.EmployeeManager.Entity.Team;

public class TeamDTO {
    public static Team requestToObject (RequestTeam requestTeam) {
        Team team = new Team ();
        team.setName(requestTeam.getName());
        team.setManagerId(requestTeam.getManagerId());
        return  team;
    }

    public static ResponseTeam objectToResponse (Team team) {
        ResponseTeam responseTeam = new ResponseTeam();
        responseTeam.setId(team.getId());
        responseTeam.setName(team.getName());
        responseTeam.setManagerId(team.getManagerId());
        return responseTeam;

    }
}
