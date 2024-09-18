import conn from '../config/conn.js';
import { DataTypes } from 'sequelize';

import Usuario from './usuariosModels.js';

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

Usuario.hasMany(Postagem)
Postagem.belongsTo(Usuario)

export default Postagem