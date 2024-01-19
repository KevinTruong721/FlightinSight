package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "payment_info")
public class payment_info {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="payment_id")
    private Long payment_id;

    @Column(name="user_id")
    private Long user_id;

    @Column(name="confirmation_id")
    private Long confirmation_id;

    @Column(name="card_owner")
    private String card_owner;

    @Column(name="card_number")
    private String card_number;

    @Column(name="expiration_date")
    private String expiration_date;

    @Column(name="user_country")
    private String user_country;

    @Column(name="billing_address")
    private String billing_address;

    @Column(name="city")
    private String city;

    @Column(name="postal_code")
    private String postal_code;

    public payment_info() {}

    public payment_info(Long payment_id, Long user_id, Long confirmation_id, String card_owner, String card_number, String expiration_date, String user_country, String billing_address, String city, String postal_code) {
        this.payment_id = payment_id;
        this.user_id = user_id;
        this.confirmation_id = confirmation_id;
        this.card_owner = card_owner;
        this.card_number = card_number;
        this.expiration_date = expiration_date;
        this.user_country = user_country;
        this.billing_address = billing_address;
        this.city = city;
        this.postal_code = postal_code;
    }

    public Long getPayment_id() {
        return payment_id;
    }

    public void setPayment_id(Long payment_id) {
        this.payment_id = payment_id;
    }

    public Long getConfirmation_id() {
        return confirmation_id;
    }

    public void setConfirmation_id(Long confirmation_id) {
        this.confirmation_id = confirmation_id;
    }

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public String getCard_owner() {
        return card_owner;
    }

    public void setCard_owner(String card_owner) {
        this.card_owner = card_owner;
    }

    public String getCard_number() {
        return card_number;
    }

    public void setCard_number(String card_number) {
        this.card_number = card_number;
    }

    public String getExpiration_date() {
        return expiration_date;
    }

    public void setExpiration_date(String expiration_date) {
        this.expiration_date = expiration_date;
    }

    public String getUser_country() {
        return user_country;
    }

    public void setUser_country(String user_country) {
        this.user_country = user_country;
    }

    public String getBilling_address() {
        return billing_address;
    }

    public void setBilling_address(String billing_address) {
        this.billing_address = billing_address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostal_code() {
        return postal_code;
    }

    public void setPostal_code(String postal_code) {
        this.postal_code = postal_code;
    }
}
