// This is node server.js where we are creating Node API and the backend express.js running port on 9000
// by creating our api we needs to do importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js"

// const express = require("express");
// Then app configuration

const app = express();
const port = process.env.PORT || 9000;

// next working in middleware
app.use(express.json());

// DB configuration(This will connect with our mongodb database)
const connection_url =
  'mongodb+srv://matesappadmin:E6gWsJzQ989hwuME@cluster0.sa5xl.mongodb.net/matesappdb?retryWrites=true&w=majority'


mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// ??????

// API routes (GET/POST/DELETE)
app.get("/",(req,res)=>res.status(200).send('hello nodejs world'))

app.get("/messages/sync", (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

// app.post("/api/v1/messages/new", (req, res) => {
app.post("/messages/new", (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            // res.status(201).send(`new messages created: \n ${data}`)
            res.status(201).send(data);
        }
    });
});

// Listen
app.listen(port,()=>console.log(`Listening on localhost:${port}`));







