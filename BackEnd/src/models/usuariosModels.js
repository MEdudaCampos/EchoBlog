import conn from '../config/conn.js';
import { DataTypes } from 'sequelize';

const Usuario = conn.define("usuarios", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    senha: {
        type: DataTypes.INTEGER,
        allowNull: false,
        required: true
    },
    papel: {
        type: DataTypes.ENUM,
        values: ["leitor", "autor", "administrador"]
    }
})

export default Usuario;