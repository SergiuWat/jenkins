package com.example.prototip.Controller;

import com.example.prototip.Entity.Product;
import com.example.prototip.Repository.ProductRepository;
import com.example.prototip.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping("/add")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        Product newProduct = productService.addProduct(product);
        return new ResponseEntity<>(newProduct, HttpStatus.CREATED);
    }

    @PutMapping("/updateProduct")
    public ResponseEntity<Product> updateProduct(@RequestBody Product product){
        Product updatedProduct = productService.addProduct(product);
        return new ResponseEntity<>(updatedProduct, HttpStatus.OK);
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<Product>> getAll(){
        List<Product> allProducts= productService.getAll();
        return new ResponseEntity<>(allProducts, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable("id") Long id){
        Product product = productRepository.findById(id).orElseThrow();
        productService.deleteProduct(product);
        return ResponseEntity.ok(HttpStatus.GONE);
    }

    @GetMapping("/getProduct/{id}")
    public ResponseEntity<Product> getProduct(@PathVariable("id") Long id){
        Product product = productRepository.findById(id).orElseThrow();
        return new ResponseEntity<>(product, HttpStatus.OK);
    }

}
