package com.dao;

import java.util.List;

import com.models.Reimbursement;

public interface ReimbursementDAO {
	
	//CREATE
	public int createReimbursement(Reimbursement r);
	
	//READ
	public Reimbursement selectReimById(int reimbId);
	public List<Reimbursement> selectAllReimbursements();

	//UPDATE
	public int updateReimbursement();
	
	//DELETE
	public int deleteReimbursement(int reimbId);

}
