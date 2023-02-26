package com.apprest.scolaire.controller;

import java.text.ParseException;
import java.time.LocalDate;
import java.time.Month;
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
import org.springframework.web.bind.annotation.RestController;

import com.apprest.scolaire.dao.KlassDao;
import com.apprest.scolaire.dao.SchoolDao;
import com.apprest.scolaire.dao.SubjectDao;
import com.apprest.scolaire.dao.TeacherDao;
import com.apprest.scolaire.model.Classroom;
import com.apprest.scolaire.model.Klass;
import com.apprest.scolaire.model.Planning;
import com.apprest.scolaire.model.School;
import com.apprest.scolaire.model.SchoolType;
import com.apprest.scolaire.model.Subject;
import com.apprest.scolaire.model.Teacher;

import jakarta.transaction.Transactional;




@RestController
@RequestMapping("/professeur")
@CrossOrigin
public class TeacherController {
	
	@Autowired
	TeacherDao teacherDao;
	
	@Autowired
	SchoolDao schoolDao;
	
	
	@Autowired
	SubjectDao subjectDao;
	
	@Autowired
	KlassDao klassDao;
	

	
	
	
	@GetMapping({"/", ""})
	public ResponseEntity<List<Teacher>> getAll(){
		
		return new ResponseEntity<List<Teacher>>(teacherDao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Teacher> findOne(@PathVariable Integer id) {
		Optional<Teacher> optionCond = teacherDao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Teacher>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Teacher>(HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/{id}/professeurs/matieres")
	public ResponseEntity<List<Subject>> findByIdTeacher(@PathVariable Integer id) {
		return new ResponseEntity<List<Subject>>(subjectDao.findByIdTeacher(id), HttpStatus.OK);}

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
	
	@PostMapping("/{id}")
	public ResponseEntity<Teacher> editOne(@PathVariable int id, @RequestBody Teacher teacher){
		Teacher t = this.teacherDao.findById(id).get();
		t.setDateOfBirth(teacher.getDateOfBirth());
		t.setLastName(teacher.getLastName());
		t.setFirstName(teacher.getFirstName());
		List<Subject> ss = null;
		t.setSubjects(ss);
		
		List<Subject> s = teacher.getSubjects();
		
		t.setSubjects(s);
		
		//int number = teacher.getPrincipaleKlass().getId();
		
		//Klass principalKlass = this.klassDao.findById(number).get();
		//t.setPrincipaleKlass(principalKlass);
		
		
		//School school = this.schoolDao.findById(number).get();
		
		//t.setSchool(school);
		
	
		teacherDao.save(t);
		return new ResponseEntity<Teacher>(t,HttpStatus.CREATED);	
	}
}
