package com.example.EmployeeManager.Model.EmployeeWorking.Date;

import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.Repository.EmployeeWorkingDateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class DeleteEmployeeWorkingDate {
    @Autowired
    private EmployeeWorkingDateRepository employeeWorkingDateRepository;

    private RequestEmployeeWorkingDate requestEmployeeWorkingDate;

    public DeleteEmployeeWorkingDate() {

    }

    public void setRequestEmployeeWorkingDate(RequestEmployeeWorkingDate requestEmployeeWorkingDate) {
        this.requestEmployeeWorkingDate = requestEmployeeWorkingDate;
    }

    public void deleteEmployeeWorkingDate() {
        int employeeWorkingDateId = requestEmployeeWorkingDate.getId();
        if (employeeWorkingDateId <= 0) {
            throw new InvalidArgumentException("employeeWorkingDateId has to greater than 0: " + String.valueOf(employeeWorkingDateId));
        }

        Optional<EmployeeWorkingDate> optionalEmployeeWorkingDate = employeeWorkingDateRepository.findById(requestEmployeeWorkingDate.getId());
        if (optionalEmployeeWorkingDate.isPresent()) {
            employeeWorkingDateRepository.delete(optionalEmployeeWorkingDate.get());
        }
    }
}
