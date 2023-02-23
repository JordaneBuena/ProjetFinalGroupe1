package com.apprest.scolaire.controller;


import java.text.ParseException;
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
import com.apprest.scolaire.dao.CourseDao;
import com.apprest.scolaire.model.Course;






@RestController
@RequestMapping("/cours")
@CrossOrigin
public class CourseController {
	
	@Autowired
	CourseDao courseDao;
	

	@GetMapping({"/", ""})
	public ResponseEntity<List<Course>> getAll(){
		//School school = new School("nom école", "2 rue des roses", SchoolType.COLLEGE, "00112221222");
		//schoolDao.save(school);
		//LocalDate dob = LocalDate.of(1980, Month.JANUARY, 1);
		//courseDao.save(new Course("toto", "FirstName", dob, school));
		
		return new ResponseEntity<List<Course>>(courseDao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Course> findOne(@PathVariable Integer id) {
		Optional<Course> optionCond = courseDao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Course>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Course>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
		this.courseDao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Course> addOne(@RequestBody Course course){
		this.courseDao.save(course);
		return new ResponseEntity<Course>(course, HttpStatus.CREATED);
	}
	
	// se pose la question des autres param en jsonignore
	
	@PostMapping("/{id}")
	public ResponseEntity<Course> editOne(@PathVariable int id, @RequestBody Course course){
		Course c = this.courseDao.findById(id).get();
		c.setDay(course.getDay());
		c.setStart(course.getStart());
		c.setEnd(course.getEnd());

		this.courseDao.save(c);
		return new ResponseEntity<Course>(c,HttpStatus.CREATED);	
	}
	


}
