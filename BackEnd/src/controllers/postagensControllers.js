import { request, response } from "express";
import Postagem from "../models/postagensModels.js";

//criar postagem RF01
export const createPostagem = async (request, response) => {
    const { titulo, conteudo, autor } = request.body;
    let imagem
    if (request.file) {
        imagem = request.file.filename
    } else {
        imagem = "postagemDefaut.png"
    }
    const novaPostagem = {
        titulo,
        conteudo,
        autor,
        imagem
    };

    try {
        await Postagem.create(novaPostagem);
        response.status(201).json({ message: "Postagem publicada com sucesso" })
    } catch (error) {
        console.error(error);
        response.status(500).json({ message: "Erro ao publicar a postagem" })
    }
}

//listar postagens RF02
export const getPostagems = async (request, response) => {
    const page = parseInt(request.query.page) || 1;
    const limit = parseInt(request.query.limit) || 10;
    const offset = (page - 1) * limit;
    try {
        const postagens = await Postagem.findAndCountAll({
            limit,
            offset,
        });

        const totalPaginas = Math.ceil(postagens.count / limit);
        response.status(200).json({
            totalPostagens: postagens.count,
            totalPaginas,
            paginaAtual: page,
            itensPorPagina: limit,
            proximaPagina:
                totalPaginas === 0
                    ? null
                    : `http://localhost:3333/postagens?page=${page + 1}`,
            postagens: postagens.rows
        })
    } catch (error) {
        response.status(500).json({ message: "Erro ao buscar postagens" });
    }
}