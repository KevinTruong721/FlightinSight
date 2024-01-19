package com.flightinsight.flightinsightbackend.service;

import com.flightinsight.flightinsightbackend.model.user;
import com.flightinsight.flightinsightbackend.repository.user_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class user_service {

    @Autowired
    user_repository userRepository;

    public void addUserProcedure(String user_email, String user_password) {
        userRepository.addUserProcedure(user_email, user_password);
    }

    public Integer checkValidityProcedure(String user_email, String user_password) {
        return userRepository.checkValidityProcedure(user_email, user_password);
    }

    public List<user> fetchIdProcedure(String user_email) {
        return userRepository.fetchIdProcedure(user_email);
    }

    public List<user> fetchUserList() {
        return userRepository.fetchUserInfoProcedure();
    }
}
