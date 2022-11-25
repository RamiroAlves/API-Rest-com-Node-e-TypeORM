import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  handle(request: Request, response: Response) {
    const createUserService = new CreateUserService();

    const nome = request.body.nome;

    if (nome.length === 0) {
      return response
        .status(400)
        .json({ mensagem: "Informe um nome de usuário." });
    }

    return response.status(201).json({ mensagem: `Criando usuário ${nome}` });
  }
}

export { CreateUserController };
