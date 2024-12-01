package com.backend.ecomm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.backend.ecomm.model.Product;
import com.backend.ecomm.service.ProductService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public String getProductList() {
        productService.getAllProducts().forEach(product -> System.out.println(
                product.getId() + " " + product.getName() + " " + product.getPrice() + " " + product.getStock() + " "
                        + product.getCategory()));
        return "200";
    }

    @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable long id) {
        return productService.getProductById(id);
    }

    @PostMapping("/products/add")
    public ResponseEntity<Product> addProducts(@RequestBody Product product) {
        productService.addProduct(product);
        return ResponseEntity.ok(product);
    }

}
