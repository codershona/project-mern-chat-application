// This is node server.js where we are creating Node API and the backend express.js running port on 9000
// by creating our api we needs to do importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js"
import Pusher from "pusher";
import cors from "cors";

// const express = require("express");
// Then app configuration:

const app = express();
const port = process.env.PORT || 9000;

// const Pusher = require("pusher");

const pusher = new Pusher({
  appId: "1210090",
  key: "72ea0bfa631cd8c38fa9",
  secret: "a38de11a8027b038682b",
  cluster: "eu",
  useTLS: true
});

pusher.trigger("my-channel", "my-event", {
  message: "hello world"
});

// next working in middleware
app.use(express.json());

app.use(cors());

// As cors package has been installed so we had comment out this code below
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader("Access-Control-Allow-Headers", "*");
//     next();
// });

// DataBase(DB) configuration(This will connect with our mongodb database)
const connection_url =
  'mongodb+srv://matesappadmin:E6gWsJzQ989hwuME@cluster0.sa5xl.mongodb.net/matesappdb?retryWrites=true&w=majority'


mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection

db.once("open", () => {
    console.log("DB has been CONNECTED!!!");

    const msgCollection = db.collection("messagecontents")
    // console.log(msgCollection);
    const changeStream = msgCollection.watch();

    changeStream.on("change",(change) => {
        // console.log(change);
        console.log("A change has been occured!", change);

        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted",
            {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received,
            });
      } else {
        console.log("Errors by triggering Pusher");
       }
    });
});


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







