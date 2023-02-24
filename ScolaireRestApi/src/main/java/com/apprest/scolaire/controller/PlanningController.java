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
import com.apprest.scolaire.dao.PlanningDao;
import com.apprest.scolaire.model.Klass;
import com.apprest.scolaire.model.Planning;
import com.apprest.scolaire.model.Teacher;





@RestController
@RequestMapping("/planning")
@CrossOrigin
public class PlanningController {
	
	@Autowired
	PlanningDao planningDao;
	

	
	
	@GetMapping({"/", ""})
	public ResponseEntity<List<Planning>> getAll(){		
		return new ResponseEntity<List<Planning>>(planningDao.findAll(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Planning> findOne(@PathVariable Integer id) {
		Optional<Planning> optionCond = planningDao.findById(id);
		return optionCond.isPresent() ? new ResponseEntity<Planning>(optionCond.get(), HttpStatus.OK)
				: new ResponseEntity<Planning>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteOne(@PathVariable Integer id) { 
		this.planningDao.deleteById(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	@PostMapping({"", "/"})
	public ResponseEntity<Planning> addOne(@RequestBody Planning planning){
		this.planningDao.save(planning);
		return new ResponseEntity<Planning>(planning, HttpStatus.CREATED);
	}
	
	@PostMapping("/{id}")
	public ResponseEntity<Planning> editOne(@PathVariable int id, @RequestBody Planning planning){
		Planning p = this.planningDao.findById(id).get();
		p.setKlass(planning.getKlass());		
		this.planningDao.save(p);
		return new ResponseEntity<Planning>(p,HttpStatus.CREATED);	
	}
	


}
