# node_microservice_example

# Install Nodejs
https://nodejs.org/en/download/

# Install mysql via docker

## Install Docker
Install Docker: https://docs.docker.com/install/

## Install MySql 5.7.27 (library mysql2 has problem with MySql 7.x)

### Pull MySQL via DockerHub:
docker pull mysql

### Starting a MySQL instance is simple:
docker run -p 3307:3306 --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:5.7.27


# Start Order App
npm run start:order-service

# Start Payment App
npm run start:payment-service

# create teables 'orders' and 'payments'

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

# Create order example 
POST /orders HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 339364a9-028a-0428-588d-22acd525dbbe

{
	"userId": 4,
	"price": 5
}
