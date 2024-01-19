package com.flightinsight.flightinsightbackend.controller;

import com.flightinsight.flightinsightbackend.model.iata;
import com.flightinsight.flightinsightbackend.repository.iata_repository;
import com.flightinsight.flightinsightbackend.repository.user_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class iata_controller {

    @Autowired
    private iata_repository iataRepository;


    @GetMapping("/fetchIata")
    @Transactional
    public List<iata> fetchIataCodeProcedure() {
        return iataRepository.fetchIataCodeProcedure();
    }

}


