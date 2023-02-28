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
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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
	private Date dateOfBirth;
	
	
	@OneToMany(mappedBy = "teacher", cascade=CascadeType.REMOVE)
	@JsonIgnore
	private List<Course> courses;
	
	@NonNull
	@ManyToOne
	@JsonIgnoreProperties({"subjects", "classrooms", "teachers", "klasses"})
	private School school;
	
	//@NonNull
	//@ManyToMany(cascade= {CascadeType.PERSIST, CascadeType.MERGE} , fetch = FetchType.LAZY )
	//@JoinTable(name="teacher_subjects", joinColumns = @JoinColumn( name = "teacher_id" ))
	
	@JsonIgnoreProperties({"courses","school","teachers"})
	@ManyToMany(cascade = {CascadeType.PERSIST} , fetch = FetchType.EAGER)
	@JoinTable(name = "teacher_subject", joinColumns = @JoinColumn(name = "teacher_id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "subject_id", referencedColumnName = "id"))
	private List<Subject> subjects;
	
	
	@OneToOne(mappedBy = "principalTeacher")
	@JsonIgnore
	private Klass principalKlass;
	
}
