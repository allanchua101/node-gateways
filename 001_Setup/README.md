# Steps to setup an API Gateway

- Install Express Gateway Globally

```sh
npm install -g express-gateway
```

- Create a folder where you want to host your project using gateway scaffolder from step 1.

```sh
eg gateway create
```

- Answer the following questions from the scaffolder.

```sh
$ eg gateway create
? What's the name of your Express Gateway? gateway-demo
? Where would you like to install your Express Gateway? gateway-demo
? What type of Express Gateway do you want to create? Basic (default pipeline with proxy)
```

- Navigate to your API gateway demo and run npm start

```sh
cd my-gateway && npm start
```