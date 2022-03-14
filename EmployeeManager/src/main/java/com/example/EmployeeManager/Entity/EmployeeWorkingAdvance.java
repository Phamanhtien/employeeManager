package com.example.EmployeeManager.Entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "EmployeeWorkingAdvance")
public class EmployeeWorkingAdvance {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @ManyToOne()
    @JoinColumn (name = "employeeId", referencedColumnName = "id")
    private Employee employee;

    @Column(name = "date")
    private Date date;

    @Column(name = "money")
    private float money;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
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
