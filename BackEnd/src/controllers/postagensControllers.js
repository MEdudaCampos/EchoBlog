import { request, response } from "express";
import Postagem from "../models/postagensModels.js";

//criar postagem RF01
export const createPostagem = async (request, response) => {
    const { titulo, conteudo, autor } = request.body;
    const novaPostagem = {
        titulo,
        conteudo,
        autor,
    };
    try {
        await Postagem.create(novaPostagem);
        response.status(201).json({ message: "Postagem publicada com sucesso" })
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao publicar a postagem" })
    }
}