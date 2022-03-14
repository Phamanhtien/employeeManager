package com.example.EmployeeManager.HandleException;

public class InvalidArgumentException extends RuntimeException {
    private static final long serialVersionUID = 1L;

    public InvalidArgumentException(String message) {
        super("Invalid argument exception " + message);
    }


}
