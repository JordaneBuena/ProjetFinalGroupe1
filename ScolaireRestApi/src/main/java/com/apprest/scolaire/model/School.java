package com.apprest.scolaire.model;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;


@Entity
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class School {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String adresse;
	
	@NonNull
	private SchoolType type;
	
	@NonNull
	private String tel;
	

	@OneToMany(mappedBy = "school")
	private List<Subject> subjects;
	
	

	@OneToMany(mappedBy = "school")
	private List<Classroom> classrooms;
	
//	@NonNull
//	@OneToMany
//	private List<Teacher> teachers;
	
	

	
	
	
	

}
