package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import com.models.User;

public class ReimbursementDAOImpl implements ReimbursementDAO {
	private static String url = "jdbc:oracle:thin:@db0715javausf.chts6t7vjaia.us-east-2.rds.amazonaws.com:1521:orcl";
	private static String username = "user0715java";
	private static String password = "p4ssw0rd";

	@Override
	public int createReimbursement() {
		try (Connection conn = DriverManager.getConnection(url, username, password)) {

		PreparedStatement ps = conn.prepareStatement("INSERT INTO Users VALUES(?,?,?,?,?,?)");
		ps.setString(1, u.getUserName());
		ps.setString(2, u.getPassWord());
		ps.setString(3, u.getFirstName());
		ps.setString(4, u.getLastName());
		ps.setString(5, u.getStatus());
		ps.setDouble(6, u.getBalance());
		ps.executeUpdate();
		
	} catch (SQLException ex) {
		ex.printStackTrace();
	}
	return 0;
	}

	@Override
	public User selectReimById() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> selectAllReimbursements() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public int updateReimbursement() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public int deleteReimbursement() {
		// TODO Auto-generated method stub
		return 0;
	}

}
