package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.date_year;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface date_year_repository extends JpaRepository<date_year, Long> {

    @Procedure("fetch_year_list_proc")
    public List<date_year> fetchYearListProcedure();

    @Procedure("fetch_expiration_year_list_proc")
    public List<date_year> fetchExpirationYearListProcedure();

}
