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
@RequestMapping("/matiere")
public class SubjectController {
	
	@Autowired
	SubjectDao sdao;
	
	@Autowired
	SchoolDao schdao;
	
	
	@GetMapping({"","/"})
	public ResponseEntity<List<Subject>> findAll(){
		return new ResponseEntity<List<Subject>>(sdao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Subject> findOne(@PathVariable Integer id) {
		Optional<Subject> optionCond = sdao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Subject>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Subject>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping({"/{id}/teachers"})
	public ResponseEntity<List<Subject>> findTeachersBySubjectId(@PathVariable Integer id){
		
		
		
		return new ResponseEntity<List<Subject>>(sdao.findAll(), HttpStatus.OK);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
		this.sdao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Subject> addOne(@RequestBody Subject subject){
		this.sdao.save(subject);
		return new ResponseEntity<Subject>(subject, HttpStatus.CREATED);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Subject> editOne(@PathVariable int id, @RequestBody Subject subject){
		Subject s = this.sdao.findById(id).get();
		s.setName(subject.getName());
		s.setColor(subject.getColor());
				
		int number = subject.getSchool().getId();		
		School school = this.schdao.findById(number).get();		
		s.setSchool(school);

		this.sdao.save(s);
		return new ResponseEntity<Subject>(s,HttpStatus.CREATED);	
	}
	

	

	

	
	
	
	
	

}
