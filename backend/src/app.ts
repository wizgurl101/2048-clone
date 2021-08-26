import express from "express";

const PORT = 5000;
const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (req, res) => {
  res.send("2048 server is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
