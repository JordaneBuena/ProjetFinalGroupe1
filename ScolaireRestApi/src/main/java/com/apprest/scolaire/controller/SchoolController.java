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
@RequestMapping("/ecole")
public class SchoolController {
	
	@Autowired
	SchoolDao sdao;
	
	@Autowired
	TeacherDao teacherDao;
	
	
	@GetMapping({"","/"})
	public ResponseEntity<List<School>> findAll(){
		return new ResponseEntity<List<School>>(sdao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<School> findOne(@PathVariable Integer id) {
		Optional<School> optionCond = sdao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<School>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<School>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/{id}/professeurs")
	public ResponseEntity<List<Teacher>> findTeachersBySchoolId(@PathVariable Integer id) {
		return new ResponseEntity<List<Teacher>>(teacherDao.findByIdSchool(id), HttpStatus.OK);}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
		this.sdao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<School> addOne(@RequestBody School school){
		this.sdao.save(school);
		return new ResponseEntity<School>(school, HttpStatus.CREATED);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<School> editOne(@PathVariable int id, @RequestBody School school){
		School s = this.sdao.findById(id).get();
		s.setName(school.getName());
		s.setAddress(school.getAddress());
		s.setType(school.getType());
		s.setPhone(school.getPhone());
	
		this.sdao.save(s);
		return new ResponseEntity<School>(s,HttpStatus.CREATED);	
	}
	

	

	

	
	
	
	
	

}
