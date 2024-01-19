package com.flightinsight.flightinsightbackend.service;

import com.flightinsight.flightinsightbackend.model.country_list;
import com.flightinsight.flightinsightbackend.model.flight_class;
import com.flightinsight.flightinsightbackend.repository.country_list_repository;
import com.flightinsight.flightinsightbackend.repository.flight_class_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class country_list_service {

    @Autowired
    country_list_repository countryListRepository;

    public List<country_list> fetchCountryListProcedure() {
        return countryListRepository.fetchCountryListProcedure();
    }
}
