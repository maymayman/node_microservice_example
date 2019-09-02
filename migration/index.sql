CREATE TABLE IF NOT EXISTS Orders (
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_id BIGINT,
    status ENUM('created', 'confirmed', 'delivered', 'cancelled')
)