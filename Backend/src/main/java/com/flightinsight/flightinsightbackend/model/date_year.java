package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "date_year")
public class date_year {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="year_id")
    private Long year_id;

    @Column(name="year")
    private String year;

    public date_year() {}

    public date_year(Long year_id, String year) {
        this.year_id = year_id;
        this.year = year;
    }

    public Long getYear_id() {
        return year_id;
    }

    public void setYear_id(Long year_id) {
        this.year_id = year_id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
