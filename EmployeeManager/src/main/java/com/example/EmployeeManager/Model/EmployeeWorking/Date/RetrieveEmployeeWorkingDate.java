package com.example.EmployeeManager.Model.EmployeeWorking.Date;

import com.example.EmployeeManager.Constant;
import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingDateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RetrieveEmployeeWorkingDate {

    @Autowired
    private EmployeeWorkingDateRepository employeeWorkingDateRepository;

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

    public Integer retrieveAllWorkingDayByEmployeeIdWithoutPaging() {
        if (employeeId <= 0) {
            throw new InvalidArgumentException("Employee id " + String.valueOf(employeeId));
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Employee has id " + String.valueOf(employeeId));
        }

        return employeeWorkingDateRepository.findAllByEmployeeId(this.employeeId).size();
    }

    public List<EmployeeWorkingDate> retrieveAllWorkingDayByEmployeeIdWithPaging() {

        if (employeeId <= 0) {
            throw new InvalidArgumentException("Employee id " + String.valueOf(employeeId));
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Employee has id " + String.valueOf(employeeId));
        }

        if (page < 0) {
            throw new InvalidArgumentException("page number " + String.valueOf(page));
        }

        Pageable pageable = PageRequest.of(page, PAGE_SIZE);
        List<EmployeeWorkingDate> employeeWorkingDateList
                = employeeWorkingDateRepository.findAllByEmployeeId(employeeId, pageable).getContent();
        if( employeeWorkingDateList.isEmpty()) {
            throw new NotFoundException("employee working date at page " + String.valueOf(page));
        }
        return employeeWorkingDateList;
    }
}
