package com.example.EmployeeManager.Controller.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.Entity.Request.RequestEmployee;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Model.Employee.*;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {

    @Autowired
    private RetrieveEmployee retrieveEmployee;

    @Autowired
    private RetrieveEmployees retrieveEmployees;

    @Autowired
    private CreateEmployee createEmployee;

    @Autowired
    private DeleteEmployee deleteEmployee;

    @Autowired
    private UpdateEmployee updateEmployee;

    @Autowired
    private UpLoadImageEmployee upLoadImageEmployee;

    @GetMapping("/{employeeId}")
    public Employee retrieveEmployee(@PathVariable int employeeId) throws NotFoundException {
        retrieveEmployee.setId(employeeId);
        return retrieveEmployee.retrieveAnEmployee();
    }

    @GetMapping("/all")
    public int retrieveAllEmployee() {
        return retrieveEmployees.retrieveAllEmployee();
    }

    @GetMapping("/all/{page}")
    public List<Employee> retrieveAllEmployeeByPage(@PathVariable int page) {
        retrieveEmployees.setPageNumber(page);
        return retrieveEmployees.retrieveAllEmployeeWithPaging();
    }

    @GetMapping("/search/{full_name}/{page}")
    public List<Employee> retrieveEmployeeByNameWithPaging(@PathVariable String full_name, @PathVariable int page){
        retrieveEmployees.setKey(full_name);
        retrieveEmployees.setPageNumber(page);
        return retrieveEmployees.retrieveAllEmployeeByNameWithPaging();
    }

    @GetMapping("/newest")
    public List<Employee> retrieveNewestEmployee() {
        return retrieveEmployees.retrieveTopFiveNewestEmployee();
    }

    @PostMapping("/add")
    public void createEmployee(@RequestBody RequestEmployee requestEmployee) {
        createEmployee.setRequestEmployee(requestEmployee);
        createEmployee.createEmployee();
    }

    @PostMapping("/update")
    public void editEmployee(@RequestBody RequestEmployee requestEmployee) {
        updateEmployee.setRequestEmployee(requestEmployee);
        updateEmployee.updateEmployee();
    }

    @DeleteMapping("/delete")
    public void deleteEmployee(@RequestBody List<Integer> idList) {
        deleteEmployee.setIdList(idList);
        deleteEmployee.deleteEmployeeById();
    }

    @PostMapping("/upImage")
    public void uploadImage(@RequestParam("file") MultipartFile image, @RequestParam("employeeId") int employeeId) throws IOException {
        upLoadImageEmployee.setImage(image);
        upLoadImageEmployee.setEmployeeId(employeeId);
        upLoadImageEmployee.saveImage();
    }

    @GetMapping("/search/{full_name}")
    public List<Employee> retrieveEmployeeByNameWithoutPaging(@PathVariable String full_name){
        retrieveEmployees.setKey(full_name);
        return retrieveEmployees.retrieveAllEmployeeByNameWithoutPaging();
    }
}
