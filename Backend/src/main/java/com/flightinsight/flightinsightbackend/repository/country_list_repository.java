package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.country_list;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface country_list_repository extends JpaRepository<country_list, Long> {

    @Procedure("fetch_country_list_proc")
    public List<country_list> fetchCountryListProcedure();

}
