package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "date_month")
public class date_month {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="month_id")
    private Long month_id;

    @Column(name="month")
    private String month;

    public date_month() {}

    public date_month(Long month_id, String month) {
        this.month_id = month_id;
        this.month = month;
    }

    public Long getMonth_id() {
        return month_id;
    }

    public void setMonth_id(Long month_id) {
        this.month_id = month_id;
    }

    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month = month;
    }
}

