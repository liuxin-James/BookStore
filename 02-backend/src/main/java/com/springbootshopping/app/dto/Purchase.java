package com.springbootshopping.app.dto;

import java.util.Set;

import com.springbootshopping.app.entity.Address;
import com.springbootshopping.app.entity.Customer;
import com.springbootshopping.app.entity.Order;
import com.springbootshopping.app.entity.OrderItem;

import lombok.Data;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}