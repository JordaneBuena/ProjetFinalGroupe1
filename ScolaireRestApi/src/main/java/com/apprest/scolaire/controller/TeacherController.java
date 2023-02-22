package com.apprest.scolaire.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.apprest.scolaire.dao.TeacherDao;
import com.apprest.scolaire.model.School;
import com.apprest.scolaire.model.SchoolType;
import com.apprest.scolaire.model.Teacher;




@RestController
@RequestMapping("/teacher")
@CrossOrigin
public class TeacherController {
	
	@Autowired
	TeacherDao teacherDao;
	
	@GetMapping({"/", ""})
	public ResponseEntity<List<Teacher>> getAll() {
		Teacher teacher = new Teacher("lastName", "FirstName", new Date(13/05/1949), new School("nom école", "2 rue des roses", SchoolType.COLLEGE, "00112221222"));
		return new ResponseEntity<List<Teacher>>(teacherDao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Teacher> findOne(@PathVariable Integer id) {
		Optional<Teacher> optionCond = teacherDao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Teacher>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Teacher>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
		this.teacherDao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Teacher> addOne(@RequestBody Teacher teacher){
		this.teacherDao.save(teacher);
		return new ResponseEntity<Teacher>(teacher, HttpStatus.CREATED);
	}
	
	@PutMapping({"/{id}"})
	public ResponseEntity<Teacher> addOne(@PathVariable Integer id, @RequestBody Teacher teacher){
		Teacher teacher1 = this.teacherDao.findById(id).get();
		this.teacherDao.save(teacher);
		return new ResponseEntity<Teacher>(teacher1, HttpStatus.CREATED);
	}

}
