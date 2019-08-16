package com.dao;

import java.util.List;

import com.models.User;

public interface ReimbursementDAO {
	
	//CREATE
	public int createReimbursement();
	
	//READ
	public User selectReimById();
	public List<User> selectAllReimbursements();

	//UPDATE
	public int updateReimbursement();
	
	//DELETE
	public int deleteReimbursement();

}
