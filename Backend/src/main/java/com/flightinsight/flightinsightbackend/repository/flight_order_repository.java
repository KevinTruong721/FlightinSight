package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.flight_order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface flight_order_repository extends JpaRepository<flight_order, Long> {

    @Procedure("insert_flight_order_proc")
    public void insertFlightOrderProcedure(Long user_id, Long confirmation_id, String traveler_amount, String departure_arrival, String travel_date, String currency, double travel_fare, double travel_tax, double travel_total);

    @Procedure("fetch_flight_order_proc")
    public List<flight_order> fetchFlightOrderProcedure(Long user_id);
}
