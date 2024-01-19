package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "country_list")
public class country_list {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="country_id")
    private Long country_id;

    @Column(name="country_name")
    private String country_name;

    @Column(name="country_extension")
    private String country_extension;

    public country_list() {}

    public country_list(Long country_id, String country_name, String country_extension) {
        this.country_id = country_id;
        this.country_name = country_name;
        this.country_extension = country_extension;
    }

    public Long getCountry_id() {
        return country_id;
    }

    public void setCountry_id(Long country_id) {
        this.country_id = country_id;
    }

    public String getCountry_name() {
        return country_name;
    }

    public void setCountry_name(String country_name) {
        this.country_name = country_name;
    }

    public String getCountry_extension() {
        return country_extension;
    }

    public void setCountry_extension(String country_extension) {
        this.country_extension = country_extension;
    }
}
