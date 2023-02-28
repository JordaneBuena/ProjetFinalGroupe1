package com.apprest.scolaire.model;

import java.time.LocalTime;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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
	private LocalTime start;
	
	@NonNull
	private LocalTime end;
	
	@NonNull
	@Enumerated(EnumType.STRING)
	private CourseDay day;
	
	@NonNull
	@ManyToOne
	@JoinColumn(name="teacher_id")
	@JsonIgnoreProperties({"courses","school"})
//	@JsonIgnore
	private Teacher teacher;
	
	@NonNull
	@ManyToOne
	@JoinColumn(name="classroom_id")
//	@JsonIgnoreProperties("courses")
	@JsonIgnoreProperties({"courses","school"})
//	@JsonIgnore
	private Classroom classroom;
	
	@NonNull
	@ManyToOne
	@JoinColumn(name="subject_id")
//	@JsonIgnoreProperties("courses")
	@JsonIgnoreProperties({"courses","school","teachers"})
	//@JsonIgnore
	private Subject subject;
	
	
	
	@ManyToOne
	@JsonIgnoreProperties({"courses","school","principalTeacher"})
	@JoinColumn(name="klass_id")
	private Klass klass;
	
	
		
	

}
