package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.date_day;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface date_day_repository extends JpaRepository<date_day, Long> {

    @Procedure("fetch_day_list_proc")
    public List<date_day> fetchDayListProcedure();
}
