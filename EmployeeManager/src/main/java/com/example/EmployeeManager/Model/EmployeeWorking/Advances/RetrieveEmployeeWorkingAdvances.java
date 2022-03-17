package com.example.EmployeeManager.Model.EmployeeWorking.Advances;

import com.example.EmployeeManager.Constant;
import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingAdvance;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingAdvanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RetrieveEmployeeWorkingAdvances {

    @Autowired
    private EmployeeWorkingAdvanceRepository employeeWorkingAdvanceRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    private final static int PAGE_SIZE = Constant.PAGE_SIZE;

    private int page = -1;
    private int employeeId = -1;

    public void setPage(int page) {
        this.page = page;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public Integer retrieveTotalEmployeeWorkingAdvancesByEmployeeId () {
        if (employeeId <= 0) {
            throw new InvalidArgumentException("employee id " + String.valueOf(employeeId));
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("employee has id " + String.valueOf(employeeId));
        }

        Integer totalWorkingDate = employeeWorkingAdvanceRepository.findAllByEmployeeId(employeeId).size();
        return totalWorkingDate;
    }

    public List<EmployeeWorkingAdvance> retrieveEmployeeWorkingAdvancesByEmployeeId() {

        if (employeeId <= 0) {
            throw new InvalidArgumentException("employee id " + String.valueOf(employeeId));
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("employee has id " + String.valueOf(employeeId));
        }

        if (page < 0) {
            throw new InvalidArgumentException("page number " + String.valueOf(page));
        }
        Pageable pageable = PageRequest.of(page, PAGE_SIZE);
        List<EmployeeWorkingAdvance> employeeWorkingAdvanceList =
                employeeWorkingAdvanceRepository.findAllByEmployeeId(employeeId, pageable).getContent();

        if (employeeWorkingAdvanceList.isEmpty()) {
            throw new NotFoundException("employee working has id " + String.valueOf(employeeId) + " has no advances money in page " + String.valueOf(page));
        }
        return employeeWorkingAdvanceList;
    }
}
