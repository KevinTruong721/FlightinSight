package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "date_day")
public class date_day {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="day_id")
    private Long day_id;

    @Column(name="day")
    private String day;


    public date_day() {}

    public date_day(Long day_id, String day) {
        this.day_id = day_id;
        this.day = day;
    }

    public Long getDay_id() {
        return day_id;
    }

    public void setDay_id(Long day_id) {
        this.day_id = day_id;
    }

    public String getDay() {
        return day;
    }

    public void setDay(String day) {
        this.day = day;
    }
}
