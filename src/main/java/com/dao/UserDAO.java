package com.dao;

import java.util.List;

import com.models.User;

public interface UserDAO {
	
	//CREATE
	public int createUser();
	
	//READ
	public User selectUserById();
	public List<User> selectAllUsers();
	public boolean logIn();

	
	//UPDATE
	public int updateUser();
	
	//DELETE
	public int deleteUser();

}
