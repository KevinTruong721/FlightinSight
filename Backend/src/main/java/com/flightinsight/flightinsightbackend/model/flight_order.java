package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "flight_order")
public class flight_order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="flight_id")
    private Long flight_id;

    @Column(name="user_id")
    private Long user_id;

    @Column(name="confirmation_id")
    private Long confirmation_id;

    @Column(name="traveler_amount")
    private String traveler_amount;


    @Column(name="departure_arrival")
    private String departure_arrival;

    @Column(name="travel_date")
    private String travel_date;

    @Column(name="currency")
    private String currency;

    @Column(name="travel_fare")
    private double travel_fare;

    @Column(name="travel_tax")
    private double travel_tax;

    @Column(name="travel_total")
    private double travel_total;

    public flight_order() {}

    public flight_order(Long flight_id, Long user_id, Long confirmation_id, String traveler_amount, String departure_arrival, String travel_date, String currency, double travel_fare, double travel_tax, double travel_total) {
        this.flight_id = flight_id;
        this.user_id = user_id;
        this.confirmation_id = confirmation_id;
        this.traveler_amount = traveler_amount;
        this.departure_arrival = departure_arrival;
        this.travel_date = travel_date;
        this.currency= currency;
        this.travel_fare = travel_fare;
        this.travel_tax = travel_tax;
        this.travel_total = travel_total;
    }

    public Long getFlight_id() {
        return flight_id;
    }

    public void setFlight_id(Long flight_id) {
        this.flight_id = flight_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public Long getConfirmation_id() {
        return confirmation_id;
    }

    public void setConfirmation_id(Long confirmation_id) {
        this.confirmation_id = confirmation_id;
    }

    public String getTraveler_amount() {
        return traveler_amount;
    }

    public void setTraveler_amount(String traveler_amount) {
        this.traveler_amount = traveler_amount;
    }

    public String getTravel_date() {
        return travel_date;
    }

    public void setTravel_date(String travel_date) {
        this.travel_date = travel_date;
    }

    public double getTravel_fare() {
        return travel_fare;
    }

    public void setTravel_fare(double travel_fare) {
        this.travel_fare = travel_fare;
    }

    public double getTravel_tax() {
        return travel_tax;
    }

    public void setTravel_tax(double travel_tax) {
        this.travel_tax = travel_tax;
    }

    public double getTravel_total() {
        return travel_total;
    }

    public void setTravel_total(double travel_total) {
        this.travel_total = travel_total;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }


    public String getDeparture_arrival() {
        return departure_arrival;
    }

    public void setDeparture_arrival(String departure_arrival) {
        this.departure_arrival = departure_arrival;
    }
}
