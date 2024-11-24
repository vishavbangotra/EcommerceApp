package com.backend.ecomm.repo;

import com.backend.ecomm.model.User;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {

    User findById(long id);

    List<User> findByUsername(String username);

    Optional<User> findByUsernameAndPassword(String username, String password);

}
