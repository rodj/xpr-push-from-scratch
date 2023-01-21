import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;
const aaa = process.env.DATABASE_URL;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  const { rows } = await pool.query("SELECT NOW()");
  res.send(`Rodj 20230121_0948 Apple says HELLOPUSH from the root of this app. URL=${process.env.DATABASE_URL} | The time from the DB is ${rows[0].now}`);
  //res.send(`Rodj says Crepe why do I still not see envvars? from the root of this app. port=${port} bogus=${aaa} URL=${process.env.DATABASE_URL}`);
});

app.listen(port, () => {
  console.log(`This is the Rodj 0924 example app listening at http://localhost:${port}`);
});
