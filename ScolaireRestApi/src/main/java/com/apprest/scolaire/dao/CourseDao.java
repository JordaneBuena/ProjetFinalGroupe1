package com.apprest.scolaire.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.apprest.scolaire.model.Course;


public interface CourseDao extends JpaRepository<Course,Integer>{

}
