package com.assementapi.api.userController;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.assementapi.api.user.User;

@RestController
public class UserController {

	
	
	private UserService service;
	public UserController( UserService service) {
		super();
		
		this.service = service;
	}
	
	@GetMapping("/users")
	
	public List<User> getAll(){
		return service.getAll();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping( "/login")
	public User auth(@RequestBody User user ) {
		return service.logIn(user);
		
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/add")
	public User signUp(@RequestBody User user) {
		return service.save(user);
	}
}
