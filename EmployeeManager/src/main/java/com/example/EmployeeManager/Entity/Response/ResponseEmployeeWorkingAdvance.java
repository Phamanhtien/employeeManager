package com.example.EmployeeManager.Entity.Response;

import com.example.EmployeeManager.Entity.Employee;

import javax.persistence.*;
import java.util.Date;

public class ResponseEmployeeWorkingAdvance {
    private int id;
    private Date date;
    private float money;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
