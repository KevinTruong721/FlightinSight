package com.flightinsight.flightinsightbackend.controller;

import com.flightinsight.flightinsightbackend.model.country_list;
import com.flightinsight.flightinsightbackend.model.date_day;
import com.flightinsight.flightinsightbackend.model.date_month;
import com.flightinsight.flightinsightbackend.model.date_year;
import com.flightinsight.flightinsightbackend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class payment_controller {

    @Autowired
    country_list_repository countryListRepository;

    @Autowired
    date_day_repository dateDayRepository;

    @Autowired
    date_month_repository dateMonthRepository;

    @Autowired
    date_year_repository dateYearRepository;

    @Autowired
    payment_info_repository paymentInfoRepository;

    @Autowired
    travel_order_repository travelOrderRepository;

    @Autowired
    flight_order_repository flightOrderRepository;


    @GetMapping("/fetchCountryList")
    @Transactional
    public List<country_list> fetchCountryListProcedure() {
        return countryListRepository.fetchCountryListProcedure();
    }

    @GetMapping("/fetchDayList")
    @Transactional
    public List<date_day> fetchDayListProcedure() {
        return dateDayRepository.fetchDayListProcedure();
    }

    @GetMapping("/fetchMonthList")
    @Transactional
    public List<date_month> fetchMonthListProcedure() {
        return dateMonthRepository.fetchMonthListProcedure();
    }
    @GetMapping("/fetchYearList")
    @Transactional
    public List<date_year> fetchYearListProcedure() {
        return dateYearRepository.fetchYearListProcedure();
    }

    @GetMapping("/fetchExpirationYearList")
    @Transactional
    public List<date_year> fetchExpirationYearlistProcedure() {
        return dateYearRepository.fetchExpirationYearListProcedure();
    }

    @RequestMapping("/insertPaymentInfo")
    public void insertPaymentInfoProcedure(@RequestParam Long user_id, @RequestParam Long confirmation_id, @RequestParam String card_owner, @RequestParam String card_number, @RequestParam String expiration_date, @RequestParam String user_country, @RequestParam String billing_address, @RequestParam String city, @RequestParam String postal_code) {
        paymentInfoRepository.insertPaymentInfoProcedure(user_id, confirmation_id, card_owner, card_number, expiration_date, user_country, billing_address, city, postal_code);
    }

    @RequestMapping("/insertTravelOrder")
    public void insertTravelOrderProcedure(@RequestParam long user_id, @RequestParam String first_name, @RequestParam String last_name, @RequestParam String phone_country, @RequestParam String phone_number, @RequestParam String passport_country, @RequestParam String gender, @RequestParam String birth_date, @RequestParam String travel_date, @RequestParam String confirmation_email) {
        travelOrderRepository.insertTravelOrderProcedure(user_id, first_name, last_name, phone_country, phone_number, passport_country, gender, birth_date, travel_date, confirmation_email);
    }

    @RequestMapping("/getConfirmationNumber")
    @Transactional
    public Integer fetchConfirmationNumberProcedure(@RequestParam long user_id, @RequestParam String travel_date) {
        return travelOrderRepository.fetchConfirmationNumberProcedure(user_id, travel_date);
    }

    @RequestMapping("insertFlightOrder")
    public void insertFlightOrderProcedure(Long user_id, Long confirmation_id, String traveler_amount, String departure_arrival, String travel_date, String currency, double travel_fare, double travel_tax, double travel_total) {
        flightOrderRepository.insertFlightOrderProcedure(user_id, confirmation_id, traveler_amount, departure_arrival, travel_date, currency, travel_fare, travel_tax, travel_total);
    }

}
