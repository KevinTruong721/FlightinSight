package com.flightinsight.flightinsightbackend.repository;

import com.flightinsight.flightinsightbackend.model.payment_info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.query.Procedure;

import java.util.List;

public interface payment_info_repository extends JpaRepository<payment_info, Long> {

    @Procedure("insert_payment_info_proc")
    public void insertPaymentInfoProcedure(Long user_id, Long confirmation_id, String card_owner, String card_number, String expiration_date, String user_country, String billing_address, String city, String postal_code);

    @Procedure("fetch_payment_info_proc")
    public List<payment_info> fetchPaymentInfoProcedure(Long user_id);

}
