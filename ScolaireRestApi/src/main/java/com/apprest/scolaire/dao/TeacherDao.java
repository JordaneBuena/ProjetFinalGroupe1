package com.apprest.scolaire.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apprest.scolaire.model.Teacher;

import jakarta.transaction.Transactional;


public interface TeacherDao extends JpaRepository<Teacher,Integer>{
	
	@Query("select t from Teacher t where t.school.id = :id")
	public List<Teacher> findByIdSchool(@Param("id")Integer id);

}
