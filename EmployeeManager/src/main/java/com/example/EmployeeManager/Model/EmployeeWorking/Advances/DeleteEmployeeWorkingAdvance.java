package com.example.EmployeeManager.Model.EmployeeWorking.Advances;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingAdvanceRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingDateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.Optional;

@Service
public class DeleteEmployeeWorkingAdvance {

    @Autowired
    private EmployeeWorkingAdvanceRepository employeeWorkingAdvanceRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    private int employeeWorkingAdvanceId;

    public void setEmployeeWorkingAdvanceId(int employeeWorkingAdvanceId) {
        this.employeeWorkingAdvanceId = employeeWorkingAdvanceId;
    }

    public void deleteEmployeeWorkingAdvance() {
         if(employeeWorkingAdvanceId <= 0) {
             throw new InvalidArgumentException("employee working advance id has to greater than 0: "+ String.valueOf(employeeWorkingAdvanceId));
         }

        Optional<EmployeeWorkingAdvance> employeeWorkingAdvanceOptional = employeeWorkingAdvanceRepository.findById(employeeWorkingAdvanceId);
         if (employeeWorkingAdvanceOptional.isPresent()){
             employeeWorkingAdvanceRepository.deleteById(employeeWorkingAdvanceId);
         }
    }
}
