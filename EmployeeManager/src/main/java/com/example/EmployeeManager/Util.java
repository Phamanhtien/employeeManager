package com.example.EmployeeManager;

public class Util {
    public static boolean isPhoneNumber(String phoneNumber) {
        final String PHONE_REGEX = Constant.PHONE_REGEX;
        boolean isValid = phoneNumber.matches(PHONE_REGEX);
        return isValid;
    }
}
