package com.springbootshopping.app.dto;

import lombok.Data;

@Data
public class PaymentInfo {
    private int amount;
    private String currency;
}
