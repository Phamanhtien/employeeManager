package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Constant;
import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RetrieveEmployees {

    @Autowired
    private EmployeeRepository employeeRepository;

    private final int pageSize = Constant.PAGE_SIZE;
    private int pageNumber = -1;
    private String key = "";

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public int retrieveAllEmployee() {
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList.size();
    }

    public List<Employee> retrieveAllEmployeeWithPaging() {
        if (pageNumber <= -1) {
            throw new InvalidArgumentException("page number " + String.valueOf(pageNumber));
        }

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Employee> employeeList = employeeRepository.findAll(pageable).getContent();
        return employeeList;
    }

    public List<Employee> retrieveAllEmployeeByNameWithPaging() {
        if (pageNumber <= -1) {
            throw new InvalidArgumentException("page number " + String.valueOf(pageNumber));
        }

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Employee> employeeList = employeeRepository.findByFullNameLike("%" + key + "%", pageable);
        return employeeList;
    }

    public List<Employee> retrieveTopFiveNewestEmployee() {
        List<Employee> employeeList = employeeRepository.findTop5ByOrderByStartDateDesc();
        return employeeList;
    }
}
