package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "city")
public class city {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="city_id")
    private Long city_id;

    @Column(name="city_name")
    private String city_name;

    public city() {}

    public city(Long city_id, String city_name) {
        this.city_id = city_id;
        this.city_name = city_name;
    }

    public Long getUser_id() {
        return city_id;
    }

    public void setUser_id(Long user_id) {
        this.city_id = user_id;
    }

    public String getCity_name() {
        return city_name;
    }

    public void setCity_name(String city_name) {
        this.city_name = city_name;
    }
}
