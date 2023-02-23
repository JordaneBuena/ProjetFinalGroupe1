package com.apprest.scolaire.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
public class Subject {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String color;
	
	@NonNull
	@ManyToMany
	@JoinColumn(name="classroom_id")
	private List<Classroom> classroomsExcluded;
	
	@NonNull
	@OneToMany(mappedBy = "subject", cascade = CascadeType.ALL)
	private List<Course> courses;
	
	@NonNull
	@ManyToOne
	@JsonIgnoreProperties("subjects")
	private School school;
	
	
	

}
