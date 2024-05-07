import { Request, Response } from "express";
import axios from 'axios';

class ListTasksController {

    async handle(req: Request, res: Response) {
        try {

            // recuperar o token definido na requisicao pelo middleware de autenticacao
            // essa é uma rota privada, por isso tem acesso ao req.idUser definido no middleware
            const idUser = req.idUser as string

            if (!idUser) {
                throw new Error("Erro ao identificar ID do usuário.");
            }

            const response = await axios.get(`http://back3:3000/task?idUser=${idUser}`);

            return res.status(200).json(response.data)

        } catch (error) {

            return res.status(400).json({
                message: error.response.data.message
            })

        }
    }

}

export { ListTasksController }
