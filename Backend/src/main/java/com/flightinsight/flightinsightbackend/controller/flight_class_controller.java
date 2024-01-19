package com.flightinsight.flightinsightbackend.controller;

import com.flightinsight.flightinsightbackend.model.flight_class;
import com.flightinsight.flightinsightbackend.repository.flight_class_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class flight_class_controller {

    @Autowired
    flight_class_repository flightClassRepository;

    @GetMapping("/fetchClassData")
    @Transactional
    public List<flight_class> fetchClassDataProcedure() {
        return flightClassRepository.fetchClassDataProcedure();
    }

}
