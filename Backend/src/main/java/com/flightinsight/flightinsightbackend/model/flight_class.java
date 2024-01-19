package com.flightinsight.flightinsightbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "flight_class")
public class flight_class {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="class_id")
    private Long class_id;


    @Column(name="class_name")
    private String class_name;

    public flight_class() {}

    public flight_class(Long class_id, String class_name) {
        this.class_id = class_id;
        this.class_name = class_name;
    }


    public Long getClass_id() {
        return class_id;
    }

    public void setClass_id(Long class_id) {
        this.class_id = class_id;
    }

    public String getClass_name() {
        return class_name;
    }

    public void setClass_name(String class_name) {
        this.class_name = class_name;
    }
}
