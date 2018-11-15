cd ./0001-users

echo 'Installing Users API Service....'
npm install

cd ..

cd ./0002-products

echo 'Installing Products API Service....'
npm install

cd ..

echo 'Installing Transactions API Service....'
cd ./0003-transactions

npm install

echo 'Installation Completed! Press any key to continue....'
read