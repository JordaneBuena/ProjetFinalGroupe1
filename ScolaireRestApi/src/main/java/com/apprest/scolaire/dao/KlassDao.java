package com.apprest.scolaire.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apprest.scolaire.model.Klass;




public interface KlassDao extends JpaRepository<Klass,Integer>{
	@Query("select k from Klass k where k.school.id = :id")
	public List<Klass> findByIdSchool(@Param("id")Integer id);

}
