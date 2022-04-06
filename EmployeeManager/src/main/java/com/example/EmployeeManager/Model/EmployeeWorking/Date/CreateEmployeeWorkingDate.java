package com.example.EmployeeManager.Model.EmployeeWorking.Date;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.HandleException.DependenceDataException;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingDateRepository;
import com.example.EmployeeManager.DTO.WorkingDateDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;

@Service
public class CreateEmployeeWorkingDate {

    @Autowired
    private EmployeeWorkingDateRepository employeeWorkingDateRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    private RequestEmployeeWorkingDate requestEmployeeWorkingDate;

    public void setRequestEmployeeWorkingDate(RequestEmployeeWorkingDate requestEmployeeWorkingDate) {
        this.requestEmployeeWorkingDate = requestEmployeeWorkingDate;
    }

    public void createEmployeeWorkingDate() {
        int employeeId = requestEmployeeWorkingDate.getEmployeeId();
        if (employeeId <= 0) {
            throw new InvalidArgumentException("employeeId " + String.valueOf(employeeId));
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("employee has id " + String.valueOf(employeeId));
        }

        Date date = requestEmployeeWorkingDate.getDate();
        Date now = Date.from(Instant.now());
        Date startedDate = optionalEmployee.get().getStartDate();
        if (date.after(now) || date.before(startedDate)) {
            throw new DependenceDataException(": working date has to after " + String.valueOf(startedDate) + " and before " + String.valueOf(now));
        }

        float hour = requestEmployeeWorkingDate.getHour();
        if (hour < 0 || hour > 24) {
            throw new InvalidArgumentException("hour is greater than 0 and less than 24: " + String.valueOf(hour));
        }

        EmployeeWorkingDate employeeWorkingDate = new EmployeeWorkingDate();
        employeeWorkingDate = WorkingDateDTO.requestToObject(requestEmployeeWorkingDate);
        employeeWorkingDateRepository.save(employeeWorkingDate);

    }
}
