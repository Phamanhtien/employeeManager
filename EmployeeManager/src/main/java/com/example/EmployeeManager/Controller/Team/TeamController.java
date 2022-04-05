package com.example.EmployeeManager.Controller.Team;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestTeam;
import com.example.EmployeeManager.Entity.Response.ResponseEmployee;
import com.example.EmployeeManager.Entity.Response.ResponseTeam;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.Model.Team.CreateTeam;
import com.example.EmployeeManager.Model.Team.RetrieveListTeamMember;
import com.example.EmployeeManager.Model.Team.RetrieveTeam;
import com.example.EmployeeManager.Model.Team.RetrieveTeams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:3000"})
public class TeamController {
    @Autowired
    private RetrieveTeams retrieveTeams;

    @Autowired
    private RetrieveTeam retrieveTeam;

    @Autowired
    private CreateTeam createTeam;

    @Autowired
    private RetrieveListTeamMember retrieveListTeamMember;

    @GetMapping("/{teamId}")
    public ResponseTeam retrieveTeamById(@PathVariable int teamId) {
        retrieveTeam.setTeamId(teamId);
        return retrieveTeam.retrieveTeam();
    }

    @GetMapping("/all")
    public List<ResponseTeam> retrieveTeams() {
        return retrieveTeams.retrieveTeams();
    }

    @PostMapping("/add")
    public void addTeam(@RequestBody RequestTeam requestTeam){
        createTeam.setRequestTeam(requestTeam);
        createTeam.createTeam();
    }

    @GetMapping("/{teamId}/members")
    public List<ResponseEmployee> getAllTeamMember(@PathVariable int teamId) {
        retrieveListTeamMember.setId(teamId);
        return retrieveListTeamMember.retrieveListTeamMember();
    }
}
