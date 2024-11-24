package com.backend.ecomm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.backend.ecomm.model.Product;
import com.backend.ecomm.service.ProductService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/products")
    public String getProductList() {
        Product newproduct = new Product("test", 10.10, 1, "ELECTRONICS");
        productService.addProduct(newproduct);
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
    public String postMethodName(@RequestBody String entity) {
        System.out.println(entity);
        return "205";
    }

}
