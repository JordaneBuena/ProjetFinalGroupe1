package com.apprest.scolaire.model;

import java.util.ArrayList;
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
import jakarta.persistence.JoinTable;
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
	
//	@NonNull
//	@ManyToMany(fetch = FetchType.LAZY,
//	cascade = {CascadeType.PERSIST,CascadeType.MERGE})
//	@JoinTable(name="subject_classroomsExcluded", joinColumns = @JoinColumn(name="classroom_id"),
//	inverseJoinColumns = @JoinColumn(name="subject_id"))
	
//	@ManyToMany
//	@JoinColumn(name="classroom_id")
	//private List<Classroom> classroomsExcluded;
	
	@NonNull
	@OneToMany(mappedBy = "subject", cascade = CascadeType.ALL)
	private List<Course> courses;
	
	@NonNull
	@ManyToOne
	@JsonIgnoreProperties({"address","type","phone","subjects","classrooms", "klasses"})
	private School school;
	
	//@NonNull
	
	//@JoinTable( name = "subject_teacher",
    //joinColumns = @JoinColumn( name = "teacher_id" ),
    //inverseJoinColumns = @JoinColumn( name = "subject_id" ) )
	@JsonIgnoreProperties({"courses","school","subjects"})
	@ManyToMany(mappedBy= "subjects")
	private List<Teacher> teachers ;
	
	

}
