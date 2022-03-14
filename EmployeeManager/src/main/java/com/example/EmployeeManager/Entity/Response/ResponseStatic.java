package com.example.EmployeeManager.Entity.Response;

public class ResponseStatic {
    int totalNumberWorkingDate = 0;
    double totalMoneyGet = 0;
    double totalMoneyAdvance = 0;

    public ResponseStatic(int totalNumberWorkingDate, double totalMoneyGet, double totalMoneyAdvance) {
        this.totalNumberWorkingDate = totalNumberWorkingDate;
        this.totalMoneyGet = totalMoneyGet;
        this.totalMoneyAdvance = totalMoneyAdvance;
    }

    public int getTotalNumberWorkingDate() {
        return totalNumberWorkingDate;
    }

    public void setTotalNumberWorkingDate(int totalNumberWorkingDate) {
        this.totalNumberWorkingDate = totalNumberWorkingDate;
    }

    public double getTotalMoneyGet() {
        return totalMoneyGet;
    }

    public void setTotalMoneyGet(double totalMoneyGet) {
        this.totalMoneyGet = totalMoneyGet;
    }

    public double getTotalMoneyAdvance() {
        return totalMoneyAdvance;
    }

    public void setTotalMoneyAdvance(double totalMoneyAdvance) {
        this.totalMoneyAdvance = totalMoneyAdvance;
    }
}
