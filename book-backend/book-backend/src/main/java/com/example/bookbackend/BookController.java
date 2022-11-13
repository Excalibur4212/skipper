package com.example.bookbackend;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/books")
    public List < Book > getBooks() {
        return Arrays.asList(new Book(1, "Anna", "Li", "annali@wisc.edu"), new Book(2,
                "Bob", "Hanford", "bobhanford@wisc.edu"), new Book(3,
                "Chris", "Bucci", "chirsbucci@wisc.edu"));
    }
}

class Book {
    private int id;
    private String firstName;
    private String lastName;
    private String email;

    public Book(int id, String firstName, String lastName, String email) {
        super();
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return firstName + " " + lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setId(int id) {
        this.id = id;
    }

}
