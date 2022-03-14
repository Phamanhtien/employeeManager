package com.example.EmployeeManager.Controller.Team;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestTeam;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.Model.Team.CreateTeam;
import com.example.EmployeeManager.Model.Team.RetrieveListTeamMember;
import com.example.EmployeeManager.Model.Team.RetrieveTeams;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/team")
@CrossOrigin(origins = "http://localhost:4200")
public class TeamController {
    @Autowired
    private RetrieveTeams retrieveTeams;

    @Autowired
    private CreateTeam createTeam;

    @Autowired
    private RetrieveListTeamMember retrieveListTeamMember;

    @GetMapping("/all")
    public List<Team> retrieveTeam() {
        return retrieveTeams.retrieveTeams();
    }

    @PostMapping("/add")
    public void createTeam(@RequestBody RequestTeam requestTeam){
        createTeam.setRequestTeam(requestTeam);
        createTeam.createTeam();
    }

    @GetMapping("/{teamId}/members")
    public List<Employee> getAllTeamMember(@PathVariable int teamId) {
        retrieveListTeamMember.setId(teamId);
        return retrieveListTeamMember.retrieveListTeamMember();
    }
}
