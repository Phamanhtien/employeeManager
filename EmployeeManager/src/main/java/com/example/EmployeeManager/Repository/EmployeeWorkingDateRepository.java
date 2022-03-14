package com.example.EmployeeManager.Repository;

import com.example.EmployeeManager.Entity.EmployeeWorkingDate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.Optional;

@Repository
public interface EmployeeWorkingDateRepository extends JpaRepository<EmployeeWorkingDate, Integer> {

    Page<EmployeeWorkingDate> findAllByEmployeeId(int employeeId, Pageable pageable);

    Optional<EmployeeWorkingDate> findByEmployeeIdAndDate(int employeeId, Date date);

    @Query(value = "SELECT COUNT(*) " +
            "From Employee_Working_Date t " +
            "WHERE t.employee_id = :employeeId AND Month(date) =:month AND Year(date) = :year", nativeQuery = true)
    Optional<Integer> countWorkingDateByEmployeeIdAndMonthAndYear(@Param("employeeId") int employeeId, @Param("month") int month, @Param("year") int year);

    @Query(value = "SELECT  SUM(t.hour) " +
            "FROM Employee_Working_Date t " +
            "WHERE t.employee_id = :employeeId AND Month(date) = :month AND Year(date) = :year", nativeQuery = true)
    Optional<Double> sumHourByEmployeeIdAndMonthAndYear(@Param("employeeId") int employeeId, @Param("month") int month, @Param("year") int year);
}
