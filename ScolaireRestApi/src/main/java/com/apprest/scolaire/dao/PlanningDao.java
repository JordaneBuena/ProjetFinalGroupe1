package com.apprest.scolaire.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apprest.scolaire.model.Planning;



public interface PlanningDao extends JpaRepository<Planning,Integer>{

}
