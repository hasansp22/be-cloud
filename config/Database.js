import { Sequelize } from "sequelize";

const db = new Sequelize("cloud_prakt_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
