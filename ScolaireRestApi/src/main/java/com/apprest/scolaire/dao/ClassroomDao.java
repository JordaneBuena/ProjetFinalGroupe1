package com.apprest.scolaire.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apprest.scolaire.model.*;

public interface ClassroomDao extends JpaRepository<Classroom, Integer>{
	
//	@Query("select c from Classroom c where c.school.id = :id")
//	public Classroom findByIdd(@Param("id") Integer id);

}
