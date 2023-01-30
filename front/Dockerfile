# Specify Node Version and Image
# Name Image development (can be anything)
FROM node:18 AS development

# Specify Working directory inside container
WORKDIR /front/src/app

# Copy package-lock.json and package.json from host to inside container working directory
COPY package*.json ./

# Install deps inside container
RUN npm install
RUN npm install -g @angular/cli@15.1.2

# Bundle App Sources
COPY . .

RUN npm run build

EXPOSE 4200

################
## PRODUCTION ##
################
# Build another image named production
FROM node:18 AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set working directory
WORKDIR /back/src/app

COPY --from=development /back/src/app .

EXPOSE 8080

# run app
CMD ["node", "dist/main"]