package com.example.EmployeeManager.Controller.EmployeeWorking;

import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.Model.EmployeeWorking.Date.CreateEmployeeWorkingDate;
import com.example.EmployeeManager.Model.EmployeeWorking.Date.DeleteEmployeeWorkingDate;
import com.example.EmployeeManager.Model.EmployeeWorking.Date.RetrieveEmployeeWorkingDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeWorking/date")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeWorkingDateController {

    @Autowired
    private RetrieveEmployeeWorkingDate retrieveEmployeeWorkingDate;

    @Autowired
    private CreateEmployeeWorkingDate createEmployeeWorkingDate;

    @Autowired DeleteEmployeeWorkingDate deleteEmployeeWorkingDate;

    @GetMapping("/all/{employeeId}")
    public Integer retrieveTotalWorkingDateOfAnEmployee(@PathVariable int employeeId) {
        retrieveEmployeeWorkingDate.setEmployeeId(employeeId);
        return retrieveEmployeeWorkingDate.retrieveTotalWorkingDayByEmployeeId();
    }
    @GetMapping("/all/{employeeId}/{page}")
    public List<EmployeeWorkingDate> retrieveAllWorkingDateOfAnEmployeeWithPaging(@PathVariable int employeeId, @PathVariable int page) {
        retrieveEmployeeWorkingDate.setEmployeeId(employeeId);
        retrieveEmployeeWorkingDate.setPage(page);
        return retrieveEmployeeWorkingDate.retrieveAllWorkingDayByEmployeeIdWithPaging();
    }

    @PostMapping("/add")
    public void createWorkingDateOfAnEmployee(@RequestBody RequestEmployeeWorkingDate requestEmployeeWorkingDate) {
        createEmployeeWorkingDate.setRequestEmployeeWorkingDate(requestEmployeeWorkingDate);
        createEmployeeWorkingDate.createEmployeeWorkingDate();
    }

    @DeleteMapping("/delete")
    public void deleteWorkingDateOfAnEmployee(@RequestBody RequestEmployeeWorkingDate requestEmployeeWorkingDate) {
        deleteEmployeeWorkingDate.setRequestEmployeeWorkingDate(requestEmployeeWorkingDate);
        deleteEmployeeWorkingDate.deleteEmployeeWorkingDate();
    }
}
