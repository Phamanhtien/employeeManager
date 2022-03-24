package com.example.EmployeeManager.DTO;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingAdvance;
import com.example.EmployeeManager.Entity.Response.ResponseEmployeeWorkingAdvance;

public class WorkingAdvanceDTO {

    public static EmployeeWorkingAdvance requestToObject(RequestEmployeeWorkingAdvance requestEmployeeWorkingAdvance, Employee employee) {
        EmployeeWorkingAdvance employeeWorkingAdvance = new EmployeeWorkingAdvance();

        employeeWorkingAdvance.setEmployee(employee);
        employeeWorkingAdvance.setDate(requestEmployeeWorkingAdvance.getDate());
        employeeWorkingAdvance.setMoney(requestEmployeeWorkingAdvance.getMoney());
        return employeeWorkingAdvance;
    }

    public static ResponseEmployeeWorkingAdvance objectToResponse (EmployeeWorkingAdvance employeeWorkingAdvance) {
        ResponseEmployeeWorkingAdvance responseEmployeeWorkingAdvance = new ResponseEmployeeWorkingAdvance();

        responseEmployeeWorkingAdvance.setId(employeeWorkingAdvance.getId());
        responseEmployeeWorkingAdvance.setDate(employeeWorkingAdvance.getDate());
        responseEmployeeWorkingAdvance.setMoney(employeeWorkingAdvance.getMoney());

        return responseEmployeeWorkingAdvance;
    }
}
