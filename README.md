# Social Network API
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
  - [Description](#description)
  - [Screenshot](#screenshot)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Videos](#videos)
  - [Contact](#contact)

## Description
This is an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This API uses Express.js for routing, a MongoDB database, and the Mongoose ODM. 


## Screenshot
This appliation can run form Visual Studio Code by using npm start. <br/> <br/>
![localhost](./assets/app-screenshot.png) <br/> <br/> 

## Installation 
1 - npm i (to initialize) <br/>
2 - npm start (for the app to start running on the server) <br/>

## Usage
1 - npm start in the terminal <br/>
2 - Go to Insomnia to test all routes below: <br/>
  - `/api/users`
  - `/api/users/:userId`
  - `/api/users/:userId/friends/:friendId`
  - `/api/thoughts`
  - `/api/thoughts/:toughtId`
  - `/api/thoughts/:toughtId/reactions`
  - `/api/thoughts/:toughtId/reactions/:reactionId`

![localhost](./assets/insomnia-screenshot.png) <br/> <br/> 

## Videos
First video showing how to initialzie the applicantion and the user routes: <br/>
https://drive.google.com/file/d/1xr4vb0hgaREAf_R-vAYWRJeHD6ESLWVR/view
 
Second video showing the thought routes: <br/>
https://drive.google.com/file/d/1h1WLzzL2NXFn66qbwEGCli3ySqG9pINB/view

## Contact
You can contact me via email: marialda@bellsouth.net
