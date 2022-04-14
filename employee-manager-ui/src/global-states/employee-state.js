import { proxy } from 'valtio'
import Employee from "./../model/employee"

const EmployeeState = proxy({
    employee: new Employee()
})

export { EmployeeState }