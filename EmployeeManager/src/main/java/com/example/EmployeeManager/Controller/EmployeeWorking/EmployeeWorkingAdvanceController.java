package com.example.EmployeeManager.Controller.EmployeeWorking;

import com.example.EmployeeManager.Entity.EmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingAdvance;
import com.example.EmployeeManager.Model.EmployeeWorking.Advances.CreateEmployeeWorkingAdvance;
import com.example.EmployeeManager.Model.EmployeeWorking.Advances.DeleteEmployeeWorkingAdvance;
import com.example.EmployeeManager.Model.EmployeeWorking.Advances.RetrieveEmployeeWorkingAdvances;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeWorking/advance")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeWorkingAdvanceController {
    @Autowired
    private RetrieveEmployeeWorkingAdvances retrieveEmployeeWorkingAdvances;

    @Autowired
    private CreateEmployeeWorkingAdvance createEmployeeWorkingAdvance;

    @Autowired
    private DeleteEmployeeWorkingAdvance deleteEmployeeWorkingAdvance;

    @GetMapping("/all/{employeeId}")
    public Integer retrieveTotalWorkingAdvancesOfAnEmployee(@PathVariable int employeeId) {
        retrieveEmployeeWorkingAdvances.setEmployeeId(employeeId);
        return retrieveEmployeeWorkingAdvances.retrieveTotalEmployeeWorkingAdvancesByEmployeeId();
    }

    @GetMapping("/all/{employeeId}/{page}")
    public List<EmployeeWorkingAdvance> retrieveAllWorkingAdvancesOfAnEmployee (@PathVariable int employeeId, @PathVariable int page) {
        retrieveEmployeeWorkingAdvances.setEmployeeId(employeeId);
        retrieveEmployeeWorkingAdvances.setPage(page);
        return retrieveEmployeeWorkingAdvances.retrieveEmployeeWorkingAdvancesByEmployeeId();
    }

    @PostMapping("add")
    public void createWorkingAdvanceOfAnEmployee(@RequestBody RequestEmployeeWorkingAdvance requestEmployeeWorkingAdvance) {
        createEmployeeWorkingAdvance.setRequestEmployeeWorkingDate(requestEmployeeWorkingAdvance);
        createEmployeeWorkingAdvance.createEmployeeWorkingAdvance();
    }

    @DeleteMapping("delete")
    public void deleteWorkingAdvanceOfAnEmployee(@RequestBody RequestEmployeeWorkingAdvance requestEmployeeWorkingAdvance) {
        deleteEmployeeWorkingAdvance.setRequestEmployeeWorkingAdvance(requestEmployeeWorkingAdvance);
        deleteEmployeeWorkingAdvance.deleteEmployeeWorkingAdvance();
    }
}
