package com.flightinsight.flightinsightbackend.service;

import com.flightinsight.flightinsightbackend.model.iata;
import com.flightinsight.flightinsightbackend.repository.iata_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class iata_service {

    @Autowired
    iata_repository iataRepository;

    public List<iata> fetchIataCodeProcedure() {
        return iataRepository.fetchIataCodeProcedure();
    }
}
