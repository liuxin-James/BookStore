package com.springbootshopping.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springbootshopping.app.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByEmail(String theEmail);
}
