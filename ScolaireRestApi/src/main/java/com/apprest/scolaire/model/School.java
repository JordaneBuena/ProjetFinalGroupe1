package com.apprest.scolaire.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
@NoArgsConstructor
@RequiredArgsConstructor
public class School {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@NonNull
	private String name;
	
	@NonNull
	private String address;
	
	@NonNull
	@Enumerated(EnumType.STRING)
	private SchoolType type;
	
	@NonNull
	private String phone;
	
	@NonNull
	@OneToMany(mappedBy = "school", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Subject> subjects;
	
	
	@NonNull
	@OneToMany(mappedBy = "school", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Classroom> classrooms;
	
	@NonNull
	@OneToMany(mappedBy = "school", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Teacher> teachers;
	
	@NonNull
	@OneToMany(mappedBy = "school", cascade = CascadeType.ALL)
	@JsonIgnore
	private List<Klass> klasses;
	

}
