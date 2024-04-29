import { Request, Response } from "express";
import axios from 'axios';

type TaskRequest = {
    id: string,
    title: string,
    description: string
}

class UpdateTaskDetailsController {

    async handle(req: Request, res: Response) {
        try {

            const { id, title, description } = req.body as TaskRequest;

            if (!title || !description || !id) {
                throw new Error("Dados da tarefa inválidos.");
            }

            const response = await axios.put(`http://localhost:3001/task`, {
                id: id,
                title: title,
                description: description
            });

            return res.status(200).json(response.data)

        } catch (error) {

            return res.status(400).json({
                message: error.response.data.message
            })

        }
    }

}

export { UpdateTaskDetailsController }
