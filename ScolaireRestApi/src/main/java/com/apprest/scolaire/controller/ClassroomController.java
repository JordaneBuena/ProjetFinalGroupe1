package com.apprest.scolaire.controller;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery.FetchableFluentQuery;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.apprest.scolaire.dao.*;
import com.apprest.scolaire.model.*;


@RestController
@CrossOrigin
@RequestMapping("/salle")
public class ClassroomController {
	
	@Autowired
	ClassroomDao cdao;
	
	@Autowired
	SchoolDao sdao;
	
	
	@GetMapping({"","/"})
	public ResponseEntity<List<Classroom>> findAll(){
		return new ResponseEntity<List<Classroom>>(cdao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Classroom> findOne(@PathVariable Integer id) {
		Optional<Classroom> optionCond = cdao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Classroom>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Classroom>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
		this.cdao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Classroom> addOne(@RequestBody Classroom classroom){
		this.cdao.save(classroom);
		return new ResponseEntity<Classroom>(classroom, HttpStatus.CREATED);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Classroom> editOne(@PathVariable int id, @RequestBody Classroom classroom){
		Classroom c = this.cdao.findById(id).get();
		c.setName(classroom.getName());
		c.setCapacite(classroom.getCapacite());
		System.out.println(classroom.getSchool().getId());
		int number = classroom.getSchool().getId();
		
		School school = this.sdao.findById(number).get();
		
		c.setSchool(school);

	
		this.cdao.save(c);
		return new ResponseEntity<Classroom>(c,HttpStatus.CREATED);	
	}
	

	

	

	
	
	
	
	

}
