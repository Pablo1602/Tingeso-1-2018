package com.example.mingeso3.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

import com.example.mingeso3.Models.Product;
import com.example.mingeso3.Repository.ProductRepository;


@Controller
@RequestMapping(path="/producto")
public class ProductController {
	@Autowired
	private ProductRepository productoRepository;
	
	
	//Listado por pantalla
	@CrossOrigin
	@GetMapping(path="/all")
	//@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Iterable<Product> getAllProducto(){
		return productoRepository.findAll();
	}
	
	@CrossOrigin
	@DeleteMapping("/remove/{id}")
    public String removeProduct(@PathVariable Integer id){
		
        this.productoRepository.deleteById(id);
        return "redirect:/producto";    
	}
	/*
	@CrossOrigin
	@PutMapping(value = "value" , param("id","nombre","valor"))
	public Product update (@RequestBody Integer id, @RequestBody String nombre, @RequestBody Integer valor) {
		
		
		

	}
	
	
	/*Agregar Productos*/
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public Product update(@RequestBody Product product) {
		
		return this.productoRepository.save(product);
	}
	
	
	/*
	@GetMapping(path="asd")
	@ResponseBody
	public JSONArray getAsd() throws JSONException {
		JSONArray json = new JSONArray();
		Iterable<Product> products = productoRepository.findAll();
		for(Product product : products) {
			if(product.getPrecio() > 1000) {
				JSONObject obj = new JSONObject();
				obj.put("nombre", product.getNombre());
				json.put(obj);
			}
		}
		return json;
	}
	*/
	
	
	

}
