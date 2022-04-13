package com.example.EmployeeManager.Controller.Image;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/images")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
public class ImageController {

    @GetMapping(value = "/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable String imageName) throws IOException {
        File image = new File("../image/"+imageName);
        InputStream imageInputStream = new FileInputStream(image);
        return IOUtils.toByteArray(imageInputStream);
    }

}
