// This is node server.js where we are creating Node API and the backend express.js running port on 9000
// by creating our api we needs to do importing
import express from "express"

// const express = require("express");
// Then app configuration

const app = express()
const port = process.env.PORT || 9000;

// next working in middleware

// DB configuration

// ??????

// API routes (GET/POST/DELETE)
app.get('/',(req,res)=>res.status(200).send('hello nodejs world'))


// Listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`));







