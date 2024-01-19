package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.travel_order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface travel_order_repository extends JpaRepository<travel_order, Long> {

    @Procedure("insert_travel_order_proc")
    public void insertTravelOrderProcedure(Long user_id, String first_name, String last_name, String phone_country, String phone_number, String passport_country, String gender, String birth_date, String travel_date, String confirmation_email);

    @Procedure("fetch_confirmation_number_proc")
    public Integer fetchConfirmationNumberProcedure(Long user_id, String travel_date);

    @Procedure("fetch_travel_order_proc")
    public List<travel_order> fetchTravelOrderProcedure(Long user_id);
}
