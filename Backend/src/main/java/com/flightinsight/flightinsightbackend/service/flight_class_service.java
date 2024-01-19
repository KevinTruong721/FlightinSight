package com.flightinsight.flightinsightbackend.service;

import com.flightinsight.flightinsightbackend.model.flight_class;
import com.flightinsight.flightinsightbackend.repository.flight_class_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class flight_class_service {

    @Autowired
    flight_class_repository flightClassRepository;

    public List<flight_class> fetchClassDataProcedure() {
        return flightClassRepository.fetchClassDataProcedure();
    }
}
