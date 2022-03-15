package com.example.EmployeeManager.Repository;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Team;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    Page<Employee> findAll(Pageable pageable);

    List<Employee> findByFullNameLike(String fullName,Pageable pageable);

    List<Employee> findTop5ByOrderByStartDateDesc();

    List<Employee> findByTeamId(int teamId);
}
