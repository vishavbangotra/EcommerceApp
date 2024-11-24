package com.backend.ecomm.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.ecomm.model.Product;
import com.backend.ecomm.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public String getProductList(@RequestParam String param) {
        productService.getAllProducts().forEach(product -> System.out.println(product.getName()));
        return "200";
    }

}
