package com.example.EmployeeManager.Repository;

import com.example.EmployeeManager.Entity.EmployeeWorkingAdvance;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface EmployeeWorkingAdvanceRepository extends JpaRepository<EmployeeWorkingAdvance, Integer> {

    Page<EmployeeWorkingAdvance> findAllByEmployeeId(int EmployeeId, Pageable pageable);

    Optional<EmployeeWorkingAdvance> findByEmployeeIdAndDate(int EmployeeId, Date date);

    @Query(value = "SELECT  SUM(t.money) " +
            "FROM Employee_Working_Advance t " +
            "WHERE t.employee_id = :employeeId AND Month(date) =:month AND Year(date) = :year", nativeQuery = true)
    Optional<Double> sumMoneyAdvanceByEmployeeIdAndMonthAndYear(@Param("employeeId") int employeeId, @Param("month") int month, @Param("year") int year);
}
