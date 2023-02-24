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
import com.apprest.scolaire.dao.KlassDao;
import com.apprest.scolaire.dao.PlanningDao;
import com.apprest.scolaire.model.Klass;
import com.apprest.scolaire.model.Planning;
import com.apprest.scolaire.model.Teacher;





@RestController
@RequestMapping("/classe")
@CrossOrigin
public class KlassController {
	
	@Autowired
	KlassDao klassDao;
	
	@Autowired
	PlanningDao pdao;
	

	
	
	@GetMapping({"/", ""})
	public ResponseEntity<List<Klass>> getAll() throws ParseException {
		//Klass klass = new Klass("nom école", "2 rue des roses", SchoolType.COLLEGE, "00112221222");
		//schoolDao.save(school);
		//LocalDate dob = LocalDate.of(1980, Month.JANUARY, 1);
		//klassDao.save(new Klass("toto", "FirstName", dob, school));
		
		return new ResponseEntity<List<Klass>>(klassDao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Klass> findOne(@PathVariable Integer id) {
		Optional<Klass> optionCond = klassDao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Klass>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Klass>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
//		Klass k = this.klassDao.findById(id).get();
//		
//		System.out.println(id);
//		this.klassDao.forceDelete(id);
		this.klassDao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Klass> addOne(@RequestBody Klass klass){
		this.klassDao.save(klass);
		return new ResponseEntity<Klass>(klass, HttpStatus.CREATED);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Klass> editOne(@PathVariable int id, @RequestBody Klass klass){
		Klass k = this.klassDao.findById(id).get();
		k.setName(klass.getName());
		
		int number = klass.getPlanning().getId();
		Planning p = this.pdao.findById(number).get();
	
		k.setPlanning(p);
			
		this.klassDao.save(k);
		return new ResponseEntity<Klass>(k,HttpStatus.CREATED);	
	}

}
