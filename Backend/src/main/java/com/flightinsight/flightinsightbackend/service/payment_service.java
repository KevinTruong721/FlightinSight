package com.flightinsight.flightinsightbackend.service;

import com.flightinsight.flightinsightbackend.model.date_day;
import com.flightinsight.flightinsightbackend.model.date_month;
import com.flightinsight.flightinsightbackend.model.date_year;
import com.flightinsight.flightinsightbackend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class payment_service {

    @Autowired
    date_day_repository dateDayRepository;

    @Autowired
    date_month_repository dateMonthRepository;

    @Autowired
    date_year_repository dateYearRepository;

    @Autowired
    travel_order_repository travelOrderRepository;

    @Autowired
    payment_info_repository paymentInfoRepository;

    @Autowired
    flight_order_repository flightOrderRepository;

    public List<date_day> fetchDayListProcedure() {
        return dateDayRepository.fetchDayListProcedure();
    }

    public List<date_month> fetchMonthListProcedure() {
        return dateMonthRepository.fetchMonthListProcedure();
    }
    public List<date_year> fetchYearListProcedure() {
        return dateYearRepository.fetchYearListProcedure();
    }

    public List<date_year> fetchExpirationYearListProcedure() {
        return dateYearRepository.fetchExpirationYearListProcedure();
    }

    public void insertPaymentInfoProcedure(Long user_id, Long confirmation_id, String card_owner, String card_number, String expiration_date, String user_country, String billing_address, String city, String postal_code) {
        paymentInfoRepository.insertPaymentInfoProcedure(confirmation_id, user_id, card_owner, card_number, expiration_date, user_country, billing_address, city, postal_code);
    }

    public void insertTravelOrderProcedure(Long user_id, String first_name, String last_name, String phone_country, String phone_number, String passport_country, String gender, String birth_date, String travel_date, String confirmation_email) {
        travelOrderRepository.insertTravelOrderProcedure(user_id, first_name, last_name, phone_country, phone_number, passport_country, gender, birth_date, travel_date, confirmation_email);
    }

    public Integer fetchConfirmationNumberProcedure(Long user_id, String travel_date) {
        return travelOrderRepository.fetchConfirmationNumberProcedure(user_id, travel_date);
    }

    public void insertFlightOrderProcedure(Long user_id, Long confirmation_id, String traveler_amount, String departure_arrival, String travel_date, String currency, double travel_fare, double travel_tax, double travel_total) {
        flightOrderRepository.insertFlightOrderProcedure(user_id, confirmation_id, traveler_amount, departure_arrival, travel_date, currency, travel_fare, travel_tax, travel_total);
    }
}
