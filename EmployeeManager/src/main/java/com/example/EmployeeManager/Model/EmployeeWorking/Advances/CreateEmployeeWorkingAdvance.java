package com.example.EmployeeManager.Model.EmployeeWorking.Advances;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingAdvanceRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingDateRepository;
import org.aspectj.weaver.ast.Not;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;

@Service
public class CreateEmployeeWorkingAdvance {

    @Autowired
    private EmployeeWorkingAdvanceRepository employeeWorkingAdvanceRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    private RequestEmployeeWorkingAdvance requestEmployeeWorkingAdvance;

    public void setRequestEmployeeWorkingDate(RequestEmployeeWorkingAdvance requestEmployeeWorkingAdvance) {
        this.requestEmployeeWorkingAdvance = requestEmployeeWorkingAdvance;
    }

    public void createEmployeeWorkingAdvance() {
        int employeeId = requestEmployeeWorkingAdvance.getEmployeeId();
        if (employeeId <= 0) {
            throw new InvalidArgumentException("employeeId has to greater than zero");
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Employee has id " + String.valueOf(employeeId));
        }

        Date date = requestEmployeeWorkingAdvance.getDate();
        Date now = Date.from(Instant.now());
        Date startedDate = optionalEmployee.get().getStartDate();
        if (date.after(now) || date.before(startedDate)) {
            throw new InvalidArgumentException("working date advance has to after: " + String.valueOf(startedDate) + " and before " + String.valueOf(now));
        }

        float money = requestEmployeeWorkingAdvance.getMoney();
        if (money < 0) {
            throw new InvalidArgumentException("money is greater than 0 " + String.valueOf(money));
        }

        Employee employee = optionalEmployee.get();
        EmployeeWorkingAdvance employeeWorkingAdvance = new EmployeeWorkingAdvance();
        employeeWorkingAdvance.setEmployee(employee);
        employeeWorkingAdvance.setDate(requestEmployeeWorkingAdvance.getDate());
        employeeWorkingAdvance.setMoney(requestEmployeeWorkingAdvance.getMoney());
        employeeWorkingAdvanceRepository.save(employeeWorkingAdvance);
    }
}
