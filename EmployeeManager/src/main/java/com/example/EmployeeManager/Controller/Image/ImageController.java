package com.example.EmployeeManager.Controller.Image;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;

@RestController
@RequestMapping("/image")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000/"})
public class ImageController {

    @GetMapping(value = "/{imageName}", produces = {MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})
    public @ResponseBody byte[] getImageWithMediaType(@PathVariable String imageName) throws IOException {
        InputStream in = getClass()
//                .getClassLoader()
                .getResourceAsStream("1.jpg");
//        ImageIO.read(getClass().getResourceAsStream("/1.jpg"));

        BufferedImage image = ImageIO.read(new File("C:\\Users\\patien\\Desktop\\exercise\\image\\test.PNG"));
        return IOUtils.toByteArray(image);
//        return 1;
    }

}
