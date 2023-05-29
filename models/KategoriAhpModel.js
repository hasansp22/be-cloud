import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const KategoriAhp = db.define(
  "kategori_ahp",
  {
    name: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default KategoriAhp;

(async () => {
  await db.sync();
})();
