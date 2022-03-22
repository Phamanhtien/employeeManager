package com.example.EmployeeManager.DTO;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Request.RequestEmployeeWorkingDate;
import com.example.EmployeeManager.Entity.Response.ResponseEmployeeWorkingDate;

public class WorkingDateDTO {
    public static EmployeeWorkingDate requestToObject (RequestEmployeeWorkingDate requestEmployeeWorkingDate) {

        EmployeeWorkingDate employeeWorkingDate = new EmployeeWorkingDate();
        employeeWorkingDate.setId(requestEmployeeWorkingDate.getId());
        employeeWorkingDate.setEmployeeId(requestEmployeeWorkingDate.getEmployeeId());
        employeeWorkingDate.setDate(requestEmployeeWorkingDate.getDate());
        employeeWorkingDate.setHour(requestEmployeeWorkingDate.getHour());
        return employeeWorkingDate;
    }

    public static ResponseEmployeeWorkingDate objectToResponse (EmployeeWorkingDate employeeWorkingDate) {

        ResponseEmployeeWorkingDate responseEmployeeWorkingDate = new ResponseEmployeeWorkingDate();
        responseEmployeeWorkingDate.setId(employeeWorkingDate.getId());
        responseEmployeeWorkingDate.setEmployeeId(employeeWorkingDate.getEmployeeId());
        responseEmployeeWorkingDate.setDate(employeeWorkingDate.getDate());
        responseEmployeeWorkingDate.setHour(employeeWorkingDate.getHour());
        return responseEmployeeWorkingDate;
    }
}
