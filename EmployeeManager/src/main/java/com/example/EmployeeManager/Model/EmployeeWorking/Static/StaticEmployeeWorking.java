package com.example.EmployeeManager.Model.EmployeeWorking.Static;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestStatic;
import com.example.EmployeeManager.Entity.Response.ResponseStatic;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingAdvanceRepository;
import com.example.EmployeeManager.Repository.EmployeeWorkingDateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Optional;

@Service
public class StaticEmployeeWorking {
    @Autowired
    private EmployeeWorkingAdvanceRepository employeeWorkingAdvanceRepository;

    @Autowired
    private EmployeeWorkingDateRepository employeeWorkingDateRepository;

    @Autowired
    private EmployeeRepository employeeRepository;

    private RequestStatic requestStatic;

    public void setRequestStatic(RequestStatic requestStatic) {
        this.requestStatic = requestStatic;
    }

    public ResponseStatic staticEmployeeWorking() {
        int employeeId = requestStatic.getEmployeeId();
        if (employeeId <= 0) {
            throw new InvalidArgumentException("Employee id has to greater than zero: " + String.valueOf(employeeId));
        }

        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);
        if (!employeeOptional.isPresent()) {
            throw new NotFoundException("employee has id: " + String.valueOf(employeeId));
        }

        double salaryPerHour = employeeRepository.findById(employeeId).get().getSalaryPerHour();
        int month = requestStatic.getMonth();
        if (month < 0 || month > 12) {
            throw new InvalidArgumentException("month has to greater than zero and less than 13: " + String.valueOf(month));
        }

        int year = requestStatic.getYear();
        Date date = new Date();
        Calendar calendar = new GregorianCalendar();
        calendar.setTime(date);
        int year_now = calendar.get(Calendar.YEAR);
        if (year < 0 || year > year_now) {
            throw new InvalidArgumentException("year has to greater than zero and less than this year: " + String.valueOf(year));
        }

        Double moneyAdvance = Double.valueOf(0);
        Optional<Double> optionalMoneyAdvance =
                employeeWorkingAdvanceRepository.sumMoneyAdvanceByEmployeeIdAndMonthAndYear(employeeId, month, year);
        if (optionalMoneyAdvance.isPresent()) {
            moneyAdvance = optionalMoneyAdvance.get();
        }

        Integer workingDate = 0;
        Optional<Integer> optionalWorkingDate =
                employeeWorkingDateRepository.countWorkingDateByEmployeeIdAndMonthAndYear(employeeId, month, year);
        if (optionalWorkingDate.isPresent()) {
            workingDate = optionalWorkingDate.get();
        }

        Double workingHour = Double.valueOf(0);
        Optional<Double> optionalWorkingHour =
                employeeWorkingDateRepository.sumHourByEmployeeIdAndMonthAndYear(employeeId, month, year);
        if (optionalWorkingHour.isPresent()) {
            workingHour = optionalWorkingHour.get();
        }
        double totalGet = salaryPerHour * workingHour;
        ResponseStatic responseStatic =
                new ResponseStatic(workingDate, totalGet, moneyAdvance);
        return responseStatic;
    }
}
