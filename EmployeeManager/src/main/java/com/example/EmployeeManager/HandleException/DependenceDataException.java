package com.example.EmployeeManager.HandleException;

public class DependenceDataException extends RuntimeException{
    private static final long serialVersionUID = 1L;

    public DependenceDataException(String message) {
        super("Dependence data exception: "+ message);
    }
}
