//IMPORTING
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher"; //const Pusher = require('pusher')
import cors from "cors";

//APP CONFIG
const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
  appId: "1067827",
  key: "0bce6d465114fbf3fe0a",
  secret: "497e729c74e806d1fa47",
  cluster: "ap2",
  encrypted: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("DB IS CONNECTED");

  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();

  changeStream.on("change", (change) => {
    console.log("A change occured", change);

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument;
      pusher.trigger("messages", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      });
    } else {
      console.log("error triggering  pusher");
    }
  });
});

//MIDDLEWARE
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//PASSWORD 8Gu8AIv2ji7Rmqn2
//DB CONFIG
const connection_url =
  "mongodb+srv://mukul:8Gu8AIv2ji7Rmqn2@cluster0.tztpn.mongodb.net/whatsappdb?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//??????

//API ROUTES
app.get("/", (req, res) => res.status(200).send("hello world"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;

  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

//LISTEN
app.listen(port, () => console.log(`Listening on Localhost ${port}`));
