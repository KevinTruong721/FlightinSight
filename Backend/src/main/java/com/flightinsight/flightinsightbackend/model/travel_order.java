package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "travel_order")
public class travel_order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="confirmation_id")
    private Long confirmation_id;

    @Column(name="user_id")
    private Long user_id;

    @Column(name="first_name")
    private String first_name;

    @Column(name="last_name")
    private String last_name;

    @Column(name="phone_country")
    private String phone_country;

    @Column(name="phone_number")
    private String phone_number;

    @Column(name="passport_country")
    private String passport_country;

    @Column(name="gender")
    private String gender;

    @Column(name="birth_date")
    private String birth_date;

    @Column(name="travel_date")
    private String travel_date;

    @Column(name="confirmation_email")
    private String confirmation_email;

    public travel_order() {}

    public travel_order(Long confirmation_id, Long user_id, String first_name, String last_name, String phone_country, String phone_number, String passport_country, String gender, String birth_date, String travel_date, String confirmation_email) {
        this.confirmation_id = confirmation_id;
        this.user_id = user_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone_country = phone_country;
        this.phone_number = phone_number;
        this.passport_country = passport_country;
        this.gender = gender;
        this.birth_date = birth_date;
        this.travel_date = travel_date;
        this.confirmation_email = confirmation_email;
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

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getPhone_country() {
        return phone_country;
    }

    public void setPhone_country(String phone_country) {
        this.phone_country = phone_country;
    }

    public String getPhone_number() {
        return phone_number;
    }

    public void setPhone_number(String phone_number) {
        this.phone_number = phone_number;
    }

    public String getPassport_country() {
        return passport_country;
    }

    public void setPassport_country(String passport_country) {
        this.passport_country = passport_country;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getTravel_date() {
        return travel_date;
    }

    public void setTravel_date(String travel_date) {
        this.travel_date = travel_date;
    }

    public String getConfirmation_email() {
        return confirmation_email;
    }

    public void setConfirmation_email(String confirmation_email) {
        this.confirmation_email = confirmation_email;
    }

    public String getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(String birth_date) {
        this.birth_date = birth_date;
    }
}
