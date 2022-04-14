package com.example.EmployeeManager.Controller.EmployeeWorking;

import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Response.ResponseEmployeeWorkingDate;
import com.example.EmployeeManager.Model.EmployeeWorking.Date.CreateEmployeeWorkingDate;
import com.example.EmployeeManager.Model.EmployeeWorking.Date.DeleteEmployeeWorkingDate;
import com.example.EmployeeManager.Model.EmployeeWorking.Date.RetrieveEmployeeWorkingDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employeeWorking/date")
@CrossOrigin(origins = {"http://localhost:4200","http://localhost:3000"})
public class EmployeeWorkingDateController {

    @Autowired
    private RetrieveEmployeeWorkingDate retrieveEmployeeWorkingDate;

    @Autowired
    private CreateEmployeeWorkingDate createEmployeeWorkingDate;

    @Autowired DeleteEmployeeWorkingDate deleteEmployeeWorkingDate;

    @GetMapping("/all/{employeeId}")
    public Integer getNumberOfAllWorkingDateOfAnEmployee(@PathVariable int employeeId) {
        retrieveEmployeeWorkingDate.setEmployeeId(employeeId);
        return retrieveEmployeeWorkingDate.getNumberOfAllWorkingDayByEmployeeId();
    }
    @GetMapping("/all/{employeeId}/{page}")
    public List<ResponseEmployeeWorkingDate> retrieveAllWorkingDateOfAnEmployeeWithPaging(@PathVariable int employeeId, @PathVariable int page) {
        retrieveEmployeeWorkingDate.setEmployeeId(employeeId);
        retrieveEmployeeWorkingDate.setPage(page);
        return retrieveEmployeeWorkingDate.retrieveAllWorkingDayByEmployeeIdWithPaging();
    }

    @PostMapping("/add")
    public void addWorkingDateOfAnEmployee(@RequestBody RequestEmployeeWorkingDate requestEmployeeWorkingDate) {
        createEmployeeWorkingDate.setRequestEmployeeWorkingDate(requestEmployeeWorkingDate);
        createEmployeeWorkingDate.createEmployeeWorkingDate();
    }

    @DeleteMapping("/delete")
    public void deleteWorkingDateOfAnEmployee(@RequestBody RequestEmployeeWorkingDate requestEmployeeWorkingDate) {
        deleteEmployeeWorkingDate.setRequestEmployeeWorkingDate(requestEmployeeWorkingDate);
        deleteEmployeeWorkingDate.deleteEmployeeWorkingDate();
    }
}
