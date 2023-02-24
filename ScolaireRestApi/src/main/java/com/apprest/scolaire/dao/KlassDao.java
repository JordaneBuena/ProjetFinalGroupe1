package com.apprest.scolaire.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.apprest.scolaire.model.Klass;



public interface KlassDao extends JpaRepository<Klass,Integer>{
//	@Modifying
//	@Query("delete from Klass k where k.id = :id")
//	public Klass forceDelete(@Param("id")Integer id);

}
