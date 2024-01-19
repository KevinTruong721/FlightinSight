package com.flightinsight.flightinsightbackend.service;

import com.flightinsight.flightinsightbackend.model.flight_order;
import com.flightinsight.flightinsightbackend.model.payment_info;
import com.flightinsight.flightinsightbackend.model.travel_order;
import com.flightinsight.flightinsightbackend.repository.flight_order_repository;
import com.flightinsight.flightinsightbackend.repository.payment_info_repository;
import com.flightinsight.flightinsightbackend.repository.travel_order_repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class admin_service {

    @Autowired
    flight_order_repository flightOrderRepository;

    @Autowired
    travel_order_repository travelOrderRepository;

    @Autowired
    payment_info_repository paymentInfoRepository;

    public List<flight_order> fetchFlightOrderProcedure(Long user_id) {
        return flightOrderRepository.fetchFlightOrderProcedure(user_id);
    }

    public List<travel_order> fetchTravelOrderProcedure(Long user_id) {
        return travelOrderRepository.fetchTravelOrderProcedure(user_id);
    }

    public List<payment_info> fetchPaymentInfoProcedure(Long user_id) {
        return paymentInfoRepository.fetchPaymentInfoProcedure(user_id);
    }

}
