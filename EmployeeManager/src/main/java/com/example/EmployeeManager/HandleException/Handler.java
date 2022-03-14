package com.example.EmployeeManager.HandleException;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.example.EmployeeManager.Constant;

@ControllerAdvice
public class Handler {

    @ExceptionHandler(value = NotFoundException.class)
    public ResponseEntity<Error> notFoundException(NotFoundException notFoundException) {
        Error error = new Error(Constant.NOT_FOUNT_EXCEPTION, notFoundException.getMessage());
        return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = InvalidArgumentException.class)
    public ResponseEntity<Error> invalidArgumentException(InvalidArgumentException invalidArgumentException) {
        Error error = new Error(Constant.INVALID_ARGUMENT_EXCEPTION, invalidArgumentException.getMessage());
        return new ResponseEntity<Error>(error, HttpStatus.NOT_FOUND);
    }
}
