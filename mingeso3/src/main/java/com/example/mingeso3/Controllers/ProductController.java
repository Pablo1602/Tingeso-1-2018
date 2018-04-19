package com.example.mingeso3.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Product> getAllProducto(){
		return productoRepository.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.CREATED)
	@ResponseBody
	public Product create(@RequestBody Product product) {
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
