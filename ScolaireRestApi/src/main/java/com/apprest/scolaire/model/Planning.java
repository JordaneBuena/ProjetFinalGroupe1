package com.apprest.scolaire.model;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

	
	@Entity
	@AllArgsConstructor
	@NoArgsConstructor
	@Data
	public class Planning {
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		
		@OneToMany(mappedBy = "planning")
		private List<Course> courses;
		
		@OneToOne(cascade = CascadeType.ALL)
		@JoinColumn(name="klass_id")
		private Klass klass;
		

	}


