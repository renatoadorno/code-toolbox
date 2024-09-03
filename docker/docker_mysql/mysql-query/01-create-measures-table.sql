USE MEASURES_DB;
CREATE TABLE measures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    measure_uuid CHAR(36) NOT NULL UNIQUE,
    customer_code CHAR(36) NOT NULL,
    image MEDIUMBLOB,
    measure_datetime DATETIME NOT NULL,
    measure_type ENUM('WATER', 'GAS') NOT NULL,
    measure_value INT NOT NULL,
    has_confirmed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);