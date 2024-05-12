# Project Overview
<hr>

This is the repository for my porject portfolio 3 "spotify api" the name is pending. The backend is an express service connected to a mysql db and mapped using sequlizer. The frontend so far uses react and is built by vite.

# Prerequisites
- Docker 
- Node =< version 18
- NPM
- MySQL
- Safari

## Getting Started
<hr>

This is a guide to getting a  dev enviroment setup

## Backend
The backend of the project runs on port 3001 and is in a docker container so you just need to run
    `$ docker compose up`

## Frontend 
The frontend of the project runs on localhost:3000 and can be started by 
    `$ cd pp3-ui-react`
    `$ npm i || npm install`
    `$ npm run dev`

### UI Page
[Home Page](http://localhost:3000)
### API end points
[Login](http://localhost:3001/api/v1/login)
[Sign Up](http://localhost:3001/api/v1/signup)
[Home](http://localhost:3001/api/v1/user)
[Search](http://localhost:3001/api/v1/search)
