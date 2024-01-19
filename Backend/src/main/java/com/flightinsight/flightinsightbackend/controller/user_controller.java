package com.flightinsight.flightinsightbackend.controller;

import com.flightinsight.flightinsightbackend.model.user;
import com.flightinsight.flightinsightbackend.repository.user_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class user_controller {

    @Autowired
    private user_repository userRepository;

    @RequestMapping("/addUser")
    public void addUserProcedure(@RequestParam String user_email, @RequestParam String user_password) {
        userRepository.addUserProcedure(user_email, user_password);
    }

    @RequestMapping("/checkValidity")
    @Transactional
    public Integer checkValidityProcedure(@RequestParam String user_email, @RequestParam String user_password) {
        return userRepository.checkValidityProcedure(user_email, user_password);
    }

    @GetMapping("/fetchId/{user_email}")
    @Transactional
    public List<user> fetchIdProcedure(@PathVariable String user_email) {
        return userRepository.fetchIdProcedure(user_email);
    }

    @RequestMapping("/fetchUserList")
    @Transactional
    public List<user> fetchUserListProcedure() {
        return userRepository.fetchUserInfoProcedure();
    }
}
