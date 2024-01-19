package com.flightinsight.flightinsightbackend.controller;

import com.flightinsight.flightinsightbackend.model.flight_order;
import com.flightinsight.flightinsightbackend.model.payment_info;
import com.flightinsight.flightinsightbackend.model.travel_order;
import com.flightinsight.flightinsightbackend.repository.flight_order_repository;
import com.flightinsight.flightinsightbackend.repository.payment_info_repository;
import com.flightinsight.flightinsightbackend.repository.travel_order_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class admin_controller {

    @Autowired
    private flight_order_repository flightOrderRepository;

    @Autowired
    private travel_order_repository travelOrderRepository;

    @Autowired
    private payment_info_repository paymentInfoRepository;

    @GetMapping("/fetchFlightOrder/{user_id}")
    @Transactional
    public List<flight_order> fetchFlightOrderProcedure(@PathVariable Long user_id) {
        return flightOrderRepository.fetchFlightOrderProcedure(user_id);
    }

    @GetMapping("/fetchTravelOrder/{user_id}")
    @Transactional
    public List<travel_order> fetchTravelOrderProcedure(@PathVariable Long user_id) {
        return travelOrderRepository.fetchTravelOrderProcedure(user_id);
    }

    @GetMapping("/fetchPaymentInfo/{user_id}")
    @Transactional
    public List<payment_info> fetchPaymentInfoProcedure(@PathVariable Long user_id) {
        return paymentInfoRepository.fetchPaymentInfoProcedure(user_id);
    }
}
