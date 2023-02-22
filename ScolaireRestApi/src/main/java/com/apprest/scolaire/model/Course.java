package com.apprest.scolaire.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.ToString;


@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Course {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private Date start;
	
	@NonNull
	private Date end;
	
	@NonNull
	private String day;
	
	@NonNull
	@OneToOne
	private Teacher teacher;
	
	@NonNull
	@OneToOne
	private Classroom classroom;
	
	@NonNull
	@OneToOne
	private Subject subject;
	
	
		
	

}
