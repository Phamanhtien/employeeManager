import { createSlice } from "@reduxjs/toolkit";
import Employee from "../model/employee";

export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        data: new Employee(),
    },

    reducers: {
        setEmployee: (state, employee) => {
            state.data.id = employee.id;
            state.data.avatar = employee.avatar;
            state.data.fullName = employee.fullName;
            state.data.phone = employee.phone;
            state.data.address = employee.address;
            state.data.sex = employee.sex;
            state.data.age = employee.age;
            state.data.startDate = employee.startDate;
            state.data.salaryPerHour = employee.salaryPerHour;
            state.data.teamId = employee.teamId;
        },
    },
});

export const selectEmployee = (state) => {
    return state.employee.data;
};

export const { setEmployee } = employeeSlice.actions

export default employeeSlice.reducer;
