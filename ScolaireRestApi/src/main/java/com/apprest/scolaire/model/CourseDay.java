package com.apprest.scolaire.model;

public enum CourseDay {
	LUNDI(1),
	MARDI(2),
	MERCREDI(3),
	JEUDI(4),
	VENDREDI(5),
	SAMEDI(6),
	DIMANCHE(7);

	public final int num;
	
	private CourseDay(int num) {
		this.num = num;
	
	}
	
	

}
