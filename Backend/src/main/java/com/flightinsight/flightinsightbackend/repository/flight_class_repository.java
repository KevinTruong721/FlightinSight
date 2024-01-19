package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.flight_class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface flight_class_repository extends JpaRepository<flight_class, Long> {

    @Procedure("fetch_class_data_proc")
    public List<flight_class> fetchClassDataProcedure();

}
