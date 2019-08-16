CREATE TABLE reimbursements (
    reimb_id NUMBER(10) PRIMARY KEY,
    reimb_amount NUMBER(10) NOT NULL,
    reimb_submitted TIMESTAMP,
    reimb_resolved TIMESTAMP,
    reimb_receipt BLOB,
    reimb_author NUMBER(10),
    reimb_resolver NUMBER(10),
    reimb_status_id NUMBER(10),
    reimb_type_id NUMBER(10),
    CONSTRAINT reimb_status_fk FOREIGN KEY (reimb_status_id) REFERENCES reimbursement_status(reimb_status_id)
    ON DELETE CASCADE,
    CONSTRAINT reimb_type_fk FOREIGN KEY (reimb_type_id) REFERENCES reimbursement_type(reimb_type_id) 
    ON DELETE CASCADE,
    CONSTRAINT users_reslvr_fk FOREIGN KEY (reimb_resolver) REFERENCES users_table (user_id),
    CONSTRAINT users_auth_fk FOREIGN KEY (reimb_author) REFERENCES users_table(user_id) 
    );
    
CREATE TABLE users_table (
    user_id NUMBER(10) PRIMARY KEY,
    username VARCHAR2(50) NOT NULL,
    password VARCHAR2(50) NOT NULL,
    firstname VARCHAR2(50),
    lastname VARCHAR2(50),
    email VARCHAR(100) NOT NULL,
    user_role_id NUMBER(4) NOT NULL,
    CONSTRAINT role_id_fk FOREIGN KEY (user_role_id) REFERENCES user_roles(user_role_id)
    ON DELETE CASCADE
    );
    
CREATE TABLE reimbursement_status (
    reimb_status_id NUMBER(10) PRIMARY KEY,
    reimb_status    VARCHAR2(30) NOT NULL
    );
CREATE TABLE reimbursement_type (
    reimb_type_id NUMBER(10) PRIMARY KEY,
    reimb_type      VARCHAR2(10) NOT NULL
    );
CREATE TABLE user_roles (
    user_role_id NUMBER(4) PRIMARY KEY,
    user_role   VARCHAR2(10) NOT NULL
    );
    