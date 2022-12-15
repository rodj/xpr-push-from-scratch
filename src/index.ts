import bodyParser from "body-parser";
import express from "express";
import pg from "pg";

// Connect to the database using the DATABASE_URL environment
//   variable injected by Railway
const pool = new pg.Pool();

const app = express();
const port = process.env.PORT || 3333;

app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  // const { rows } = await pool.query("SELECT NOW()");
  // res.send(`Rodj says HELLOPUSH from the root of this app. URL=${process.env.DATABASE_URL} | The time from the DB is ${rows[0].now}`);
  res.send(`Rodj says Banana2 from the root of this app. port=${port} URL=${process.env.DATABASE_URL}`);
});

app.listen(port, () => {
  console.log(`This is the Rodj example app listening at http://loooocalhost:${port}`);
});
