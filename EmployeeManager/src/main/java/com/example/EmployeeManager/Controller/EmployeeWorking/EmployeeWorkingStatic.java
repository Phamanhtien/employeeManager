package com.example.EmployeeManager.Controller.EmployeeWorking;

import com.example.EmployeeManager.Entity.Request.RequestStatic;
import com.example.EmployeeManager.Entity.Response.ResponseStatic;
import com.example.EmployeeManager.Model.EmployeeWorking.Static.StaticEmployeeWorking;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employeeWorking/static")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeWorkingStatic {
    @Autowired
    private StaticEmployeeWorking staticEmployeeWorking;

    @PostMapping("")
    public ResponseStatic getStaticEmployeeWorking(@RequestBody RequestStatic requestStatic) {
        staticEmployeeWorking.setRequestStatic(requestStatic);
        return staticEmployeeWorking.staticEmployeeWorking();
    }
}
