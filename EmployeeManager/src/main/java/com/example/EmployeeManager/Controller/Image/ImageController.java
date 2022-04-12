package com.example.EmployeeManager.Controller.Image;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000/"})
public class ImageController {

    @GetMapping(value = "/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable String imageName) throws IOException {
        InputStream in = getClass()
                .getClassLoader()
                .getResourceAsStream("images/" +imageName);
        return IOUtils.toByteArray(in);
    }

}
