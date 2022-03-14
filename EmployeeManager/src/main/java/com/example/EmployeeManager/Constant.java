package com.example.EmployeeManager;

import com.example.EmployeeManager.HandleException.NotFoundException;

public class Constant {
    public final static int PAGE_SIZE = 5;
    public final static int INVALID_ARGUMENT_EXCEPTION = 1004;
    public final static int NOT_FOUNT_EXCEPTION = 1006;
    public final static String PHONE_REGEX = "^\\+[0-9]*2|0([0-9\\-]?){9,11}$";
}
