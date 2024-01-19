package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.date_month;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface date_month_repository extends JpaRepository<date_month, Long> {

    @Procedure("fetch_month_list_proc")
    public List<date_month> fetchMonthListProcedure();
}
