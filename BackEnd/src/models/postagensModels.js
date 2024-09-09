import conn from '../config/conn.js';
import { DataTypes } from 'sequelize';

const Postagem = conn.define("postagens", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    conteudo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    },
    dataPublicacao: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true
    }
},
    {
        tableName: "postagens"
    }
);

export default Postagem