CREATE TABLE Users(
    user_id NUMBER PRIMARY KEY,
    user_name VARCHAR2(100) NOT NULL,
	password VARCHAR2(100) NOT NULL,
	first_name VARCHAR2(100) NOT NULL,
	last_name VARCHAR2(100) NOT NULL,
    email VARCHAR2(100),
    role_id NUMBER(6),
    CONSTRAINT unique_id UNIQUE (user_name, email),
    CONSTRAINT fk_user_role FOREIGN KEY (role_id) REFERENCES UserRoles (user_role_id) ON DELETE CASCADE);

CREATE TABLE UserRoles(
    user_role_id NUMBER PRIMARY KEY,
    user_role VARCHAR2(100));

CREATE TABLE Reimbursement(
    reimb_id NUMBER PRIMARY KEY,
    amount NUMBER,
    submitted TIMESTAMP,
    resolved TIMESTAMP,
    description VARCHAR2(1000),
    receipt VARCHAR2(100),
    author NUMBER,
    resolver NUMBER,
    status_id NUMBER,
    type_id NUMBER,
    CONSTRAINT fk_status_id FOREIGN KEY (status_id) REFERENCES ReimbursementStatus (reimb_status_id) ON DELETE CASCADE,
    CONSTRAINT fk_type_id FOREIGN KEY (type_id) REFERENCES ReimbursementType (reimb_type_id) ON DELETE CASCADE,
    CONSTRAINT fk_author FOREIGN KEY (author) REFERENCES Users (user_id) ON DELETE CASCADE,
    CONSTRAINT fk_resolver FOREIGN KEY (resolver) REFERENCES Users (user_id) ON DELETE CASCADE
);

CREATE TABLE ReimbursementStatus(
    reimb_status_id NUMBER PRIMARY KEY,
    reimb_status VARCHAR2(100)
);

CREATE TABLE ReimbursementType(
    reimb_type_id NUMBER PRIMARY KEY,
    reimb_type VARCHAR2(100)
);

SELECT * FROM ReimbursementStatus;

INSERT INTO users VALUES(0,'user','pass','first','last', 'email',0);
TRUNCATE TABLE Users;