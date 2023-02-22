package com.apprest.scolaire.model;

import java.util.Date;
import java.util.List;
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
	private Date dateOfBirth;
	
	@OneToOne(mappedBy="principalTeacher")
	private Klass klass;
	
	@OneToMany(mappedBy="teacher")
	private List<Course> courses;
	
	@NonNull
	@OneToOne
	private School school;
}
