package com.apprest.scolaire.model;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="planning_id", referencedColumnName = "id")
	@JsonIgnoreProperties({"courses","klass"})
	private Planning planning;
	
	@JsonIgnore
	@OneToOne
	//@JoinColumn(name="teacher_id", referencedColumnName = "id")
	//@JsonIgnoreProperties({"school","courses","principaleKlass","dateOfBirth"})
	private Teacher principalTeacher;
	
	@NonNull
	@JsonIgnoreProperties({"subjects", "classrooms", "teachers", "klasses"})
	@ManyToOne
	private School school;

}
