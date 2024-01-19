package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "iata")
public class iata {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="iata_id")
    private Long iata_id;

    @Column(name = "city_id")
    private Long city_id;

    @Column(name = "iata_code")
    private String iata_code;

    public iata() {}

    public iata(Long iata_id, Long city_id, String iata_code) {
        this.iata_id = iata_id;
        this.city_id = city_id;
        this.iata_code = iata_code;
    }

    public Long getIata_id() {
        return iata_id;
    }

    public void setIata_id(Long iata_id) {
        this.iata_id = iata_id;
    }

    public Long getCity_id() {
        return city_id;
    }

    public void setCity_id(Long city_id) {
        this.city_id = city_id;
    }

    public String getIata_code() {
        return iata_code;
    }

    public void setIata_code(String iata_code) {
        this.iata_code = iata_code;
    }
}
