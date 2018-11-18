FROM iron/node
WORKDIR /app
# Copy package.json + package-lock.json files
COPY package*.json ./
# Installing dependencies
RUN npm install
# Bundle app source 
COPY . .
EXPOSE 8060
ENTRYPOINT [ "npm", "start" ]
