---
title: 'Node Server'
date: 'July 3, 2021'
excerpt: 'Start a Node server with & without Express.js'
cover_image: '/images/posts/img17.png'
category: 'Node'
author: 'Houssem'
author_image: 'https://lh3.googleusercontent.com/jJpTf9Ce_V8FBduRi5AMdEQI9yr6RYUwSzR9cBTESYd4Nswd2DYM_lv0h_U7qVruLQWxAKwTVSbiaPU3fhtnZBVyLoqhc_VvXUVX3htm2THJaxYa4i6bhzA7MQJ7VgHvWoOs-Ne7Dau3EfYZ-EGT_vney6OyteVgspESDmw4t--6cXOAEFqCr9xPhuf70T-2etA3HXP9y3FldpgUqZL3GB8q00vgYP9eQmxBRICmOkxzD6CSouVT9Ew3z_c9KIh0QhHruw9CqRjXKaX_OXFky5QKacEJKg5bMSmFS0RAmFAfCjjaX-Tnzxt-dDYmSY9M7IN-x_aevOZXSGqfFLPBLI4371iz0ssW0DAfIY6iBgKGxSOjddABIR6IxzxrXfIxkx8cgPTIhuV8JUYAWT-Jpg72k7FrLDP8-ysvVV3l4rwo9nXxwka8BrmDJIerR8lKNlxvuHdAhAyaPeGybyvCwpjojJqS_duzVAiUhU8vwsfm6n5aiu3gEgAUUmzCeOhmD_JiKd_4vyiTTWM0z-5gIy_m84mml6MVIQNdTwrxEwoAc-i_EDx2Ewk9s3tESUtRlCSstJuC5EtL6EZCUOV4OnliKKX8r5H4ZRAIUYrJwcH7zFevlKQPi4M1kd0lo8NrYeLZhBkkB5kU1X6LvfI5GROKNESgiF2Lrs8DI7rVmwlltgf14BUxNIig_oj79TP7yLbnRQOBvRkOWO8o7rU6oL8=s746-no?authuser=0'
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