---
title: 'Node Server'
date: 'July 3, 2021'
excerpt: 'Start a Node server with & without Express.js'
cover_image: '/images/posts/img17.png'
category: 'Node'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/pw/AM-JKLUCN1GfqI-Mm0ZQlj7dIcahFuwqubo8G1JTEKY1Kg-Z9oXT2V8att69FAuLMkUON5Zvej_hs18GLAMGXAzGbAqxu3CVpZoqSaWDlDQUKGFUrQIsA_YucaIG_6TcvJtDQ3_n1ZhdJL0AwEpSPI0JWdzK=s746-no?authuser=0'
---

<!-- Markdow generator - https://jaspervdj.be/lorem-markdownum/ -->
# Starting a Node Server with 'http' module

We actually can start a node server without using any third party modules like **express.js**. Below, we will show how simple it is to set up one using one of node's built in modules: the **http** module. 

## Getting started

Before we start the Node Server, we need to set up our work environment for Windows OS (pretty similar for other OS). For this simple project, we are choosing Visual Studio Code editor and git's bash scripting <span style='color: blue'>[Download here](https://git-scm.com/download/win).</span> 

Now, open your terminal (git bash) and follow these steps:

    1. Create a folder name nodeServerTutorail - mkdir nodeServerTutorail
    2. Go to the root of the cerated file - cd nodeServerTutorail
    3. Create a package.json file - npm init -y (we will use the default settings) (Package.json is the project's ID card)
    4. Create a file called server.js - touch server.js

Now, we are all set to begin setting up our node server:

```javascript:
const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.write('Server is running!); // 
  res.end();
}
// Choose a port to connect to the localhost server
const PORT = 5000;
server.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}');
})

```

Now, with <span style='color: red'>Express.js</span>, we need to first install the express module - <span style='color: green'>npm install express --save</span> - Then:

```javascript:
const express = require('express');
const app = express();

// Choose a port to connect to the localhost server
const PORT = 5000;
app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}');
})

```