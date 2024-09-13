import { Sequelize } from "sequelize";
import dontenv from "dotenv";
import db from "./database.js";

dontenv.config();

const conn = new Sequelize(db.bd, db.user, db.password, {
    host: "localhost",
    dialect: "mysql",
});

export default conn;
