![alt text](https://hapijs.com/public/img/logo.svg)

![alt text](https://www.rabbitmq.com/img/RabbitMQ-logo.svg)

![npm](https://img.shields.io/npm/v/npm.svg)

# Hapi server with RabbitMQ (dockerized)
ARQ example with hapi server and RabbitMQ

## Deploy environment
sudo docker-compose up

In error case: gpg: keyserver receive failed: Cannot assign requested address

retry

sudo docker-compose up

## Send message

**POST** http://localhost:8000/message

```json
    "body": {
        "message": "hello kike"
    }
 ```

