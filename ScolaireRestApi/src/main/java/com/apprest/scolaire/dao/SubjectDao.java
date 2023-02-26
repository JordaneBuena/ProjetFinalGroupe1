package com.apprest.scolaire.dao;

import com.apprest.scolaire.model.*;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface SubjectDao extends JpaRepository<Subject, Integer>{
	
	//@Query("select s.id from Subject s inner join Teacher_Subject ts on s.id = ts.subject_id inner join Teacher t on ts.teacher_id = t.id where t.id = :id")
	
	//@Query("select subject.id from Subject inner join Teacher_Subjects on teacher_subject.subject_id=subject.id where teacher_subject.teacher_id=$teacher_id")
	@Query("select s from Subject s join s.teachers st where st.id = :id")
	public List<Subject> findByIdTeacher(@Param("id")Integer id);
	
	//select m.name
	//from movies m
//	inner join actors_movies am on m.id = am.movie_id
//	inner join actors a on am.actor_id = a.id
//	where a.name = 'Christopher Walken'
	//"select ph from Phone ph " +
	//"join ph.person pr " +
	//"where pr.address = :address "
	//"select s from Subject s join s.teacher st where st.id = :id"
	

}
