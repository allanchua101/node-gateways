docker run -d -p 8059:8059 --name vue-demo-users-api vuejs/users-api
docker run -d -p 8060:8060 --name vue-demo-products-api vuejs/products-api
docker run -d -p 8061:8061 --name vue-demo-transactions-api vuejs/transactions-api
#docker run -d -p 52793:80 --name demo-api-gateway demo/gateway-api