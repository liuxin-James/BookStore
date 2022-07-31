package com.springbootshopping.app.service;

import com.springbootshopping.app.dto.Purchase;
import com.springbootshopping.app.dto.PurchaseResponse;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
}
