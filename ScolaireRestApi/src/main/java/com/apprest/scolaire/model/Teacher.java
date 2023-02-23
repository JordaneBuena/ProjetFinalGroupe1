package com.apprest.scolaire.model;

import java.time.LocalDate;
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

@Entity
@RequiredArgsConstructor
@NoArgsConstructor
@Data
public class Teacher {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private String lastName;
	
	@NonNull
	private String firstName;
	
	@NonNull
	private LocalDate dateOfBirth;
	
	@JsonIgnoreProperties("principalTeacher")
	@OneToOne(mappedBy="principalTeacher")
	private Klass klass;
	
	@JsonIgnoreProperties("teacher, classroom, subject")
	@OneToMany(mappedBy="teacher")
	private List<Course> courses;
	
	@NonNull
	@JsonIgnoreProperties("subjects, classrooms")
	@OneToOne
	private School school;
}
