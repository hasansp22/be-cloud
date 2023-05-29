import express from "express";
import cors from "cors";
import session from "express-session";
import KategoriRoute from "./routes/KategoriRoute.js";
import dotenv from "dotenv";
import AdminRoute from "./routes/AdminRoute.js";
// import db from "./config/Database.js";

dotenv.config();

// (async () => {
//   await db.sync();
// })();

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost/3000",
  })
);

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
    },
  })
);

app.use(express.json());
app.use(KategoriRoute);
app.use(AdminRoute);

app.listen(5000, () => console.log("server is up and running..."));
