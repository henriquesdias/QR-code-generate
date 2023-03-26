import express from "express";
import dotenv from "dotenv";
dotenv.config();

const server = express();

server.get("/", (req, res) => {
  res.send("hello world");
});

server.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`)
);
