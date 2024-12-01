// package com.backend.ecomm.model;

// import jakarta.persistence.CascadeType;
// import jakarta.persistence.Entity;
// import jakarta.persistence.FetchType;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;
// import jakarta.persistence.JoinColumn;
// import jakarta.persistence.OneToOne;

// @Entity
// public class User {

// @Id
// @GeneratedValue(strategy = GenerationType.IDENTITY)
// private long id;

// private String username;
// private String password;

// // @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
// // @JoinColumn(name = "cart_id", referencedColumnName = "id")
// // private Cart cart;

// public User() {
// }

// public User(String username, String password) {
// this.username = username;
// this.password = password;
// // this.cart = cart;
// }

// // Getters and Setters
// public long getId() {
// return id;
// }

// public void setId(long id) {
// this.id = id;
// }

// public String getUsername() {
// return username;
// }

// public void setUsername(String username) {
// this.username = username;
// }

// public String getPassword() {
// return password;
// }

// public void setPassword(String password) {
// this.password = password;
// }

// // public Cart getCart() {
// // return cart;
// // }

// // public void setCart(Cart cart) {
// // this.cart = cart;
// // }
// }
