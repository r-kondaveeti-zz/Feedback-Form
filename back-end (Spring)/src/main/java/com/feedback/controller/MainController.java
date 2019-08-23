package com.feedback.controller;

import com.feedback.model.User;
import com.feedback.dao.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestParam String name
            , @RequestParam String email, @RequestParam String feedback) {

        User n = new User();
        n.setName(name);
        n.setEmail(email);
        n.setFeedback(feedback);
        userRepository.save(n);
        return "Saved";
    }

    @GetMapping(path="/findAll")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

}