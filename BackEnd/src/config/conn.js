import { Sequelize } from "sequelize"

const conn = new Sequelize("Echo_Blog", "root", "Sen@iDev77!.", {
    host: "localhost",
    dialect: "mysql"
})

export default conn;