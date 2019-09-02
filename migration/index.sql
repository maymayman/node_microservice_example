CREATE TABLE IF NOT EXISTS Orders (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id BIGINT,
    status ENUM('created', 'confirmed', 'delivered', 'cancelled')
)

CREATE TABLE IF NOT EXISTS Payments (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    price DECIMAL(19 , 4 ) NOT NULL,
    orderId BIGINT NOT NULL,
    FOREIGN KEY (orderId) REFERENCES Orders(id)
)
