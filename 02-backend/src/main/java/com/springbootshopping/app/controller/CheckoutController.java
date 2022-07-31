package com.springbootshopping.app.controller;

import org.springframework.web.bind.annotation.*;

import com.springbootshopping.app.dto.Purchase;
import com.springbootshopping.app.dto.PurchaseResponse;
import com.springbootshopping.app.service.CheckoutService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/checkout")
public class CheckoutController {

    private CheckoutService checkoutService;

    public CheckoutController(CheckoutService checkoutService) {
        this.checkoutService = checkoutService;
    }

    @PostMapping("/purchase")
    public PurchaseResponse placeOrder(@RequestBody Purchase purchase) {

        PurchaseResponse purchaseResponse = checkoutService.placeOrder(purchase);

        return purchaseResponse;
    }

}
