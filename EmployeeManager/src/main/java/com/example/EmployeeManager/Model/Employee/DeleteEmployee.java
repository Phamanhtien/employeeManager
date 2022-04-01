package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Team;
import com.example.EmployeeManager.HandleException.DependenceDataException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.TeamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DeleteEmployee {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private TeamRepository teamRepository;

    private List<Integer> idList;

    public void setIdList(List<Integer> idList) {
        this.idList = idList;
    }

    public void deleteEmployeeById() {
        for (Integer id : idList) {
            Optional<Employee> optionalEmployee = employeeRepository.findById(id);

            Optional<Team> optionalTeam = teamRepository.findByManagerId(id);
            if (optionalTeam.isPresent()) {
                throw new DependenceDataException("employee is a manager");
            }

            if (optionalEmployee.isPresent()) {
                employeeRepository.deleteById(id);
            }
        }
    }
}
