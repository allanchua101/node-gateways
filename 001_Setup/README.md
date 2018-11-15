# Steps to setup an API Gateway

This repository showcases how to build a simple API gateway using NodeJS and Express Gateway

## Pre-requisites

- Installed NodeJS

## Bootstrapping Downstream Services.

Clone the following folders that contains the downstream services that the gateway would aggregate.

- 0001_Users
- 0002_Transactions
- 0003_Products

#### Install Express Gateway Globally

```sh
npm install -g express-gateway
```

#### Create a folder where you want to host your project using gateway scaffolder from step 1.

```sh
eg gateway create
```

#### Answer the following questions from the scaffolder.

```sh
$ eg gateway create
? What's the name of your Express Gateway? gateway-demo
? Where would you like to install your Express Gateway? gateway-demo
? What type of Express Gateway do you want to create? Basic (default pipeline with proxy)
```

#### Navigate to your API gateway demo and run npm start

```sh
cd my-gateway && npm start
```