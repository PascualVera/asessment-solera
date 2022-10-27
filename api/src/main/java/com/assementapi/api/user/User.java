package com.assementapi.api.user;

import java.util.List;

import com.assementapi.api.bank.Bank;



public class User {

	private Integer Id;

	private String first_name;

	private String last_name;

	private String user_name;

	private String email;

	private String password;

	private List<Bank> accounts;

	public Integer getId() {
		return Id;
	}

	public User(Integer id, String first_name, String last_name, String user_name, String email, String password, List<Bank> accounts) {
		super();
		Id = id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.user_name = user_name;
		this.email = email;
		this.password = password;
		this.accounts = accounts;

	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<Bank> getAccounts() {
		return accounts;
	}

	public void setAccounts(List<Bank> accounts) {
		this.accounts = accounts;
	}

}
