package com.example.EmployeeManager.Entity.Request;

import java.util.Date;


public class RequestEmployeeWorkingAdvance {
    private int id;
    private int employeeId;
    private Date date;
    private float money;

    public RequestEmployeeWorkingAdvance() {

    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public float getMoney() {
        return money;
    }

    public void setMoney(float money) {
        this.money = money;
    }
}
