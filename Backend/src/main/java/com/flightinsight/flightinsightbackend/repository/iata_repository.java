package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.iata;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface iata_repository extends JpaRepository<iata, Long> {

    @Procedure("fetch_iata_code_proc")
    public List<iata> fetchIataCodeProcedure();

}
