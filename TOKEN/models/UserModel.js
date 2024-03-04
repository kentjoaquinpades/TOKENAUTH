import { db } from "../config/Database.js"; // Changed import statement

const { DataTypes } = db.Sequelize; // Access DataTypes from db.Sequelize

const Users = db.define('hydra.login', {
    username: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.TEXT
    }
}, {
    freezeTableName: true
});

(async () => {
    await db.sync();
})();

export default Users;