package com.apprest.scolaire.model;

import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Klass {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private String name;
	
	
	@JsonIgnoreProperties({"courses", "school", "subjects","principalKlass"})
	@OneToOne(cascade = {CascadeType.MERGE})
	//@JoinColumn(name="teacher_id", referencedColumnName = "id")
	//@JsonIgnoreProperties({"school","courses","principaleKlass","dateOfBirth"})
	private Teacher principalTeacher;
	
	@NonNull
	@JsonIgnoreProperties({"subjects", "classrooms", "teachers", "klasses"})
	@ManyToOne
	private School school;
	
	@JsonIgnore
	@OneToMany(mappedBy = "klass", cascade = CascadeType.ALL)
	private List<Course> courses;
	
	

}
