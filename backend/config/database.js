import { Sequelize } from "sequelize";

const db = new Sequelize('demo_api', 'sam', 'Sam123#@!', {
    host: "localhost",
    dialect: "mysql"
});

export default db;