package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class RetrieveEmployee {

    @Autowired
    private EmployeeRepository employeeRepository;

    private int id;

    public void setId(int id) {
        this.id = id;
    }

    public Employee retrieveAnEmployee() throws NotFoundException {
        Optional<Employee>optionalEmployee = employeeRepository.findById(id);
        if (id <= 0 ) {
            throw new InvalidArgumentException("id");
        }
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("employee has id = "+ String.valueOf(id));
        }
        return employeeRepository.findById(id).get();
    }
}
