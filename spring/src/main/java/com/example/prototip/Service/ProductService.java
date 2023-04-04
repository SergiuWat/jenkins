package com.example.prototip.Service;

import com.example.prototip.Entity.Product;
import com.example.prototip.Repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;
    public List<Product> getAll(){
        return  productRepository.findAll();
    }

    public Product addProduct(Product product){
        return productRepository.save(product);
    }

    public void deleteProduct(Product product){
        productRepository.delete(product);
    }

}
