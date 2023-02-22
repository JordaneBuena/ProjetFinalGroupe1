package com.apprest.scolaire.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class Subject {
	
	@Id
	private long id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String color;
	

	@ManyToOne
	@JsonIgnoreProperties("subjects")
	private School school;
	
	
	

}
