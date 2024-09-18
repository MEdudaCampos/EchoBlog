import Usuario from "../models/usuariosModels.js";
import { request, response } from "express";


//criar usuario RF01
export const createUsuario = async (request, response) => {
    const { nome, email, senha } = request.body;
    const novaPostagem = {
        nome,
        email,
        senha,
    };
    try {
        await Usuario.create(novaPostagem);
        response.status(201).json({ message: "Usuário cadastrado com sucesso" })
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao cadastrar usuário" })
    }
}