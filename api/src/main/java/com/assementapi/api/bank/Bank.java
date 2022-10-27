package com.assementapi.api.bank;

public class Bank {

	private String name;
	private Double budget;
	
	
	public Bank(String name, Double budget) {
		super();
		this.name = name;
		this.budget = budget;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getBudget() {
		return budget;
	}
	public void setBudget(Double budget) {
		this.budget = budget;
	}
	
	

}
