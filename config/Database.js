import { Sequelize } from "sequelize";

const db = new Sequelize("cloud_prakt_db", "root", "G!m5*hb8Hj4$", {
  host: "dbmysql-be-cloud-1.cni74cuasoyo.ap-southeast-1.rds.amazonaws.com",
  dialect: "mysql",
});

// const db = new Sequelize("cloud_prakt_db", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });
export default db;
