package com.example.prototip.Repository;

import com.example.prototip.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ProductRepository  extends JpaRepository<Product, Long> {
}
