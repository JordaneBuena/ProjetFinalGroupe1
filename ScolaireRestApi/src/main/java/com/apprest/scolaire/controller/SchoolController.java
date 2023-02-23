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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.apprest.scolaire.dao.*;
import com.apprest.scolaire.model.*;


@RestController
@CrossOrigin
@RequestMapping("/school")
public class SchoolController {
	
	@Autowired
	SchoolDao sdao;
	
	
	@GetMapping({"","/"})
	public ResponseEntity<List<School>> findAll(){
		return new ResponseEntity<List<School>>(sdao.findAll(), HttpStatus.OK);
	}
	

	

	

	
	
	
	
	

}
