package com.dao;

import java.util.List;

import com.models.User;

public class UserDAOImpl implements UserDAO {
	
	private static String url = "jdbc:oracle:thin:@db0715javausf.chts6t7vjaia.us-east-2.rds.amazonaws.com:1521:orcl";
	private static String username = "user0715java";
	private static String password = "p4ssw0rd";

	@Override
	public int createUser() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public User selectUserById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> selectAllUsers() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean logIn() {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public int updateUser() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteUser() {
		// TODO Auto-generated method stub
		return 0;
	}

}
