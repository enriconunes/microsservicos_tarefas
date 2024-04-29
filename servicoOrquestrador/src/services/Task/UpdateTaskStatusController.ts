import { Request, Response } from "express";
import axios from 'axios';

type TaskRequest = {
    id: string,
    status: boolean,
}

class UpdateTaskStatusController {

    async handle(req: Request, res: Response) {
        try {

            const { id, status } = req.body as TaskRequest;

            if (id === undefined || status === undefined) {
                throw new Error("Erro na leitura dos dados.");
            }

            const response = await axios.put(`http://localhost:3001/status`, {
                id: id,
                status: status,
            });

            return res.status(200).json(response.data)

        } catch (error) {

            return res.status(400).json({
                message: error
            })

        }
    }

}

export { UpdateTaskStatusController }
