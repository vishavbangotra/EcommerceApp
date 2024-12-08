package com.backend.ecomm.repo;

import com.backend.ecomm.model.Product;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepo extends JpaRepository<Product, Long> {

    Product findById(long id);

    List<Product> findAll(Sort sort);

    Page<Product> findAll(Pageable pageable);

    Iterable<Product> findByName(String name);

    Iterable<Product> findByCategory(String category);

    Iterable<Product> findByCategoryAndName(String category, String name);

    void deleteById(long id);

    @Query("SELECT DISTINCT p.brand FROM Product p")
    List<String> findDistinctBrand();

    <S extends Product> S saveAndFlush(S entity);

}
