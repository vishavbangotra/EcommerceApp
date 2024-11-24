package com.backend.ecomm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.backend.ecomm.model.Product;
import com.backend.ecomm.repo.ProductRepo;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public Product getProductById(long id) {
        return productRepo.findById(id);
    }

    public Product addProduct(Product product) {
        return productRepo.saveAndFlush(product);
    }

    public Iterable<Product> getAllProducts() {
        return productRepo.findAll(Pageable.unpaged());

    }

}
