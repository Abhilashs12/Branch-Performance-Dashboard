CREATE DATABASE branch_dashboard;

USE branch_dashboard;

CREATE TABLE branches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE performance (
    id INT AUTO_INCREMENT PRIMARY KEY,
    branch_id INT,
    deposits INT,
    withdrawals INT,
    loans INT,
    FOREIGN KEY (branch_id) REFERENCES branches(id)
);

INSERT INTO branches (name) VALUES
('Bangalore Central'),
('Mumbai Downtown'),
('Delhi Metro'),
('Hyderabad Tech Hub');

INSERT INTO performance (branch_id, deposits, withdrawals, loans) VALUES
(1, 1200000, 800000, 450000),
(2, 950000, 600000, 300000),
(3, 780000, 500000, 250000),
(4, 1500000, 900000, 700000);
