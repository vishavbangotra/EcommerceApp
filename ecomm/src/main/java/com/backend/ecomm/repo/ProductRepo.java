package com.backend.ecomm.repo;

import com.backend.ecomm.model.Product;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepo extends JpaRepository<Product, Long> {
    Product findById(long id);

    List<Product> findAll(Sort sort);

    Page<Product> findAll(Pageable pageable);

    Iterable<Product> findByName(String name);

    Iterable<Product> findByCategory(Category category);

    Iterable<Product> findByCategoryAndName(Category category, String name);

    void deleteById(long id);

    <S extends Product> S saveAndFlush(S entity);

}
