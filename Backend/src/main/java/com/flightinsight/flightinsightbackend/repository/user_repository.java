package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.user;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface user_repository extends JpaRepository<user, Long> {

    @Procedure("add_user_proc")
    public void addUserProcedure(String user_email, String user_password);

    @Procedure("login_validity_proc")
    public Integer checkValidityProcedure(String user_email, String user_password);

    @Procedure("fetch_id_proc")
    public List<user> fetchIdProcedure(String user_email);

    @Procedure("fetch_user_info_proc")
    public List <user> fetchUserInfoProcedure();
}
