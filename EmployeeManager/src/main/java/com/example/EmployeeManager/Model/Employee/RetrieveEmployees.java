package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Constant;
import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Response.ResponseEmployee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.EmployeeManager.DTO.EmployeeDTO;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class RetrieveEmployees {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TeamRepository teamRepository;

    private final int pageSize = Constant.PAGE_SIZE;
    private int pageNumber = -1;
    private String key = "";

    public void setPageNumber(int pageNumber) {
        this.pageNumber = pageNumber;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public int getNumberOfAllEmployee() {
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList.size();
    }

    public List<ResponseEmployee> retrieveAllEmployeeWithPaging() {

        if (pageNumber <= -1) {
            throw new InvalidArgumentException("page number " + String.valueOf(pageNumber));
        }

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Employee> employeeList = employeeRepository.findAll(pageable).getContent();
        List<ResponseEmployee> responseEmployeeList = new ArrayList<ResponseEmployee>();
        int employeeListSize = employeeList.size();
        for (int i = 0; i < employeeListSize; i++ ) {
            ResponseEmployee responseEmployee = new ResponseEmployee();
            Employee employee = employeeList.get(i);
            Optional<Team> optionalTeam = teamRepository.findById(employee.getTeamId());
            if (!optionalTeam.isPresent()) {
                throw new NotFoundException("Team has id " + employee.getTeamId());
            }
            responseEmployeeList.add(EmployeeDTO.objectToResponse(responseEmployee, employeeList.get(i),optionalTeam.get()));
        }
        return responseEmployeeList;
    }

    public List<ResponseEmployee> retrieveAllEmployeeByNameWithPaging() {
        if (pageNumber <= -1) {
            throw new InvalidArgumentException("page number " + String.valueOf(pageNumber));
        }

        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Employee> employeeList = employeeRepository.findByFullNameLike("%" + key + "%", pageable);

        List<ResponseEmployee> responseEmployeeList = new ArrayList<ResponseEmployee>();
        int employeeListSize = employeeList.size();
        for (int i = 0; i < employeeListSize; i++ ) {
            ResponseEmployee responseEmployee = new ResponseEmployee();
            Employee employee = employeeList.get(i);
            Optional<Team> optionalTeam = teamRepository.findById(employee.getTeamId());
            if (!optionalTeam.isPresent()) {
                throw new NotFoundException("Team has id " + employee.getTeamId());
            }
            responseEmployeeList.add(EmployeeDTO.objectToResponse(responseEmployee, employeeList.get(i),optionalTeam.get()));
        }
        return responseEmployeeList;
    }

    public List<ResponseEmployee> retrieveTopFiveNewestEmployee() {
        List<Employee> employeeList = employeeRepository.findTop5ByOrderByStartDateDesc();

        List<ResponseEmployee> responseEmployeeList = new ArrayList<ResponseEmployee>();
        int employeeListSize = employeeList.size();
        for (int i = 0; i < employeeListSize; i++ ) {
            ResponseEmployee responseEmployee = new ResponseEmployee();
            Employee employee = employeeList.get(i);
            Optional<Team> optionalTeam = teamRepository.findById(employee.getTeamId());
            if (!optionalTeam.isPresent()) {
                throw new NotFoundException("Team has id " + employee.getTeamId());
            }
            responseEmployeeList.add(EmployeeDTO.objectToResponse(responseEmployee, employeeList.get(i),optionalTeam.get()));
        }
        return responseEmployeeList;
    }

    public List<ResponseEmployee> retrieveAllEmployeeByNameWithoutPaging() {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        List<Employee> employeeList = employeeRepository.findByFullNameLike("%" + key + "%");

        List<ResponseEmployee> responseEmployeeList = new ArrayList<ResponseEmployee>();
        int employeeListSize = employeeList.size();
        for (int i = 0; i < employeeListSize; i++ ) {
            ResponseEmployee responseEmployee = new ResponseEmployee();
            Employee employee = employeeList.get(i);
            Optional<Team> optionalTeam = teamRepository.findById(employee.getTeamId());
            if (!optionalTeam.isPresent()) {
                throw new NotFoundException("Team has id " + employee.getTeamId());
            }
            responseEmployeeList.add(EmployeeDTO.objectToResponse(responseEmployee, employeeList.get(i),optionalTeam.get()));
        }
        return responseEmployeeList;
    }
}
