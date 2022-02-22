import express, { Application, Request, Response } from "express";
import cors from "cors";

const advisorsData = require("./advisors.json");
const app: Application = express();
const port = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.get("/", (req: Request, res: Response) => {
  setTimeout(() => {
    res.json(advisorsData);
  }, 2000);
});

app.listen(port, () => console.log("Server running on port " + port));
