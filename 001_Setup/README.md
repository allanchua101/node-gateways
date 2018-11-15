# Steps to setup an API Gateway

This repository showcases how to build a simple API gateway using NodeJS and Express Gateway

## Pre-requisites

- NodeJS Installed ([Download Here](https://nodejs.org/en/download/))
- Express Generator ([Installation Guide Here](https://expressjs.com/en/starter/generator.html))
- Docker ([Download Here](https://www.docker.com/get-started))

#### Cloning Downstream Services.

Clone the following folders that contains the downstream services that the gateway would aggregate.

- 0001-users
- 0002-products
- 0003-transactions

#### Installing Downstream Service Dependencies

Before you can run the downstream services locally, you have to install dependencies by running *Install Downstream Service Dependencies.sh*

```sh
# Linux or Mac
sh Install Downstream Service Dependencies.sh

# Windows via cmd
Install Downstream Service Dependencies.sh
```

#### Install Express Gateway Globally

```sh
npm install -g express-gateway
```

#### Run express gateway scaffolder on the directory where you cloned the downstream services.

```sh
eg gateway create
```

#### Answer the following questions from the scaffolder.

```sh
? What's the name of your Express Gateway? gateway-demo
? Where would you like to install your Express Gateway? gateway-demo
? What type of Express Gateway do you want to create? Basic (default pipeline with proxy)
```

#### Navigate to your API gateway demo and run npm start

```sh
cd my-gateway && npm start
```