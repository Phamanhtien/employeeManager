package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeleteEmployee {

    @Autowired
    private EmployeeRepository employeeRepository;

    private List<Integer> idList;

    public void setIdList(List<Integer> idList) {
        this.idList = idList;
    }

    public void deleteEmployeeById() {
        for (Integer id : idList) {
            Optional<Employee> optionalEmployee = employeeRepository.findById(id);
            if (optionalEmployee.isPresent()) {
                employeeRepository.deleteById(id);
            }
        }
    }
}
