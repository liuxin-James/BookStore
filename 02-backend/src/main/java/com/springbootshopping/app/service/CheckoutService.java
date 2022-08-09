package com.springbootshopping.app.service;

import com.springbootshopping.app.dto.PaymentInfo;
import com.springbootshopping.app.dto.Purchase;
import com.springbootshopping.app.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);

    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
