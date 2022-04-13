package com.example.EmployeeManager.Model.Employee;

import com.example.EmployeeManager.Entity.Employee;
import com.example.EmployeeManager.HandleException.InvalidArgumentException;
import com.example.EmployeeManager.HandleException.NotFoundException;
import com.example.EmployeeManager.Repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
public class UpLoadImageEmployee {

    @Autowired
    private EmployeeRepository employeeRepository;

    private MultipartFile image;

    private int employeeId;

    public UpLoadImageEmployee() {
    }

    public void setImage(MultipartFile image) {
        this.image = image;
    }

    public void setEmployeeId(int employeeId) {
        this.employeeId = employeeId;
    }

    public void saveImage() throws IOException {

        // check a file is a image
        String typeAndExtension = image.getContentType();
        String type = typeAndExtension.substring(0, typeAndExtension.indexOf("/"));
        if (!type.equals("image")) {
            throw new InvalidArgumentException("Input file is not a image");
        }

        // check if employee is present
        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);
        if (!optionalEmployee.isPresent()) {
            throw new NotFoundException("Employee has id "+ String.valueOf(employeeId));
        }

        // saving image name in database
        Employee employee = optionalEmployee.get();
        employee.setAvatar(image.getOriginalFilename());
        employeeRepository.save(employee);

        // saving image to dir
        String savingPath = "../image/";
        byte[] imageData = image.getBytes();
        Path path = Paths.get(savingPath + image.getOriginalFilename());
        Files.write(path, imageData);
    }
}
