package com.cashia.cashiaservice.example;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ExampleController {

    @GetMapping("/hello")
    public String hello() {
        return String.format("Hello!");
    }

    @GetMapping("/hello-with-vars")
    public String helloWithVars(@RequestParam(value = "name", defaultValue = "World") String name) {
        return String.format("Hello %s!", name);
    }

    @GetMapping("/grade")
    public String grade(@RequestParam(value = "grade") String grade) {
        return String.format("Your grade is %s!", grade);
    }

    @PostMapping("/save")
    public String saveGrade() {
        return ("Saved!");
    }




}
