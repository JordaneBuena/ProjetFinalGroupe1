package com.apprest.scolaire.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apprest.scolaire.model.Teacher;



public interface TeacherDao extends JpaRepository<Teacher,Integer>{

}
