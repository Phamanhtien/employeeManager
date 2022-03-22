package com.example.EmployeeManager.DTO;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestEmployee;
import com.example.EmployeeManager.Entity.Response.ResponseEmployee;
import com.example.EmployeeManager.Entity.Team;

public class EmployeeDTO {

    public static Employee requestToObject(RequestEmployee requestEmployee, Employee employee) {
        employee.setId(requestEmployee.getId());
        employee.setFullName(requestEmployee.getFullName());
        employee.setPhone(requestEmployee.getPhone());
        employee.setAddress(requestEmployee.getAddress());
        employee.setTeamId(requestEmployee.getTeamId());
        employee.setSex(requestEmployee.isSex());
        employee.setAge(requestEmployee.getAge());
        employee.setStartDate(requestEmployee.getStartDate());
        employee.setSalaryPerHour(requestEmployee.getSalaryPerHour());
        return employee;
    }

    public static ResponseEmployee objectToResponse(ResponseEmployee responseEmployee, Employee employee, Team team) {
        responseEmployee.setId (employee.getId());
        responseEmployee.setFullName(employee.getFullName());
        responseEmployee.setPhone(employee.getPhone());
        responseEmployee.setAddress(employee.getAddress());
        responseEmployee.setTeamName(team.getName());
        responseEmployee.setSex(employee.isSex());
        responseEmployee.setAge(employee.getAge());
        responseEmployee.setStartDate(employee.getStartDate());
        responseEmployee.setSalaryPerHour(employee.getSalaryPerHour());
        responseEmployee.setTeamId(employee.getTeamId());
        return responseEmployee;
    }
}
