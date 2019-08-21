package com.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.models.Reimbursement;

public class ReimbursementDAOImpl implements ReimbursementDAO {
	private static String url = "jdbc:oracle:thin:@db0715javausf.chts6t7vjaia.us-east-2.rds.amazonaws.com:1521:orcl";
	private static String username = "user0715java";
	private static String password = "p4ssw0rd";
	
	static {
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}

	@Override
	public boolean createReimbursement(Reimbursement r) {
		try (Connection conn = DriverManager.getConnection(url, username, password)) {

		PreparedStatement ps = conn.prepareStatement("INSERT INTO Reimbursement VALUES(?,?,?,?,?,?,?,?,?,?)");
		ps.setInt(1, r.getReimbId());
		ps.setDouble(2, r.getAmount());
		ps.setDate(3,r.getSubmitted());
		ps.setDate(4, r.getResolved());
		ps.setString(5, r.getDescription());
		ps.setString(6,r.getReceipt());
		ps.setInt(7,r.getAuthor());
		ps.setInt(8,r.getResolver());
		ps.setInt(9,r.getStatusId());
		ps.setInt(10,r.getTypeId());
		ps.executeUpdate();
		return true;
		
	} catch (SQLException ex) {
		ex.printStackTrace();
	}
	return false;
	}
	

	@Override
	public Reimbursement selectReimById(int reimbId) {
		Reimbursement r = null;
	try (Connection conn = DriverManager.getConnection(url, username, password)) {

		PreparedStatement ps = conn.prepareStatement("SELECT * FROM Reimbursement WHERE reimb_id =?");
		ps.setInt(1, reimbId);

		ResultSet rs = ps.executeQuery();
		while (rs.next()) {
			r = new Reimbursement(rs.getInt(1), rs.getDouble(2), rs.getDate(3), rs.getDate(4), rs.getString(5),
					rs.getString(6), rs.getInt(7), rs.getInt(8), rs.getInt(9), rs.getInt(10));
		}

	} catch (SQLException e) {
		e.printStackTrace();
	}
	return r;
	}

	@Override
	public List<Reimbursement> selectAllReimbursements() {
		List<Reimbursement> r = new ArrayList<Reimbursement>();
		try (Connection conn = DriverManager.getConnection(url, username, password)) {
			PreparedStatement ps = conn.prepareStatement("SELECT * FROM Reimbursement");
			ResultSet rs = ps.executeQuery();
			while (rs.next()) {
				r.add(new Reimbursement(rs.getInt(1), rs.getDouble(2), rs.getDate(3), rs.getDate(4), rs.getString(5),
						rs.getString(6), rs.getInt(7), rs.getInt(8), rs.getInt(9), rs.getInt(10)));
			}
		} catch (SQLException e) {
			e.printStackTrace();

		}
		return r;
	}

	@Override
	public int updateReimbursement() {
		// TODO Auto-generated method stub
		return 0;
	}

	@Override
	public boolean deleteReimbursement(int reimbId) {
		try (Connection conn = DriverManager.getConnection(url, username, password)) {

			PreparedStatement ps = conn.prepareStatement("DELETE FROM Reimbursement WHERE reimb_id=?");
			ps.setInt(1, reimbId);
			ps.executeUpdate();
			return true;
		} catch (SQLException ex) {
			ex.printStackTrace();
		}
		return false;
	}

}
