import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Game from "App/Models/Game";

export default class GamesController {

    public async index({ request }: HttpContextContract) {
        const todos = await Game.query();
        return todos
    }

    public async show({ request, params }: HttpContextContract) {
        try {
            const todo = await Game.find(params.id);
            if (todo) {
                return todo
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async update({ auth, request, params }: HttpContextContract) {
        const game = await Game.find(params.id);
        if (game) {
            game.name = request.input('name');
            game.single = request.input('single');

            if (await game.save()) {
                return game
            }
            return; // 422
        }
        return; // 401
    }

    public async store({ auth, request, response }: HttpContextContract) {
        const user = await auth.authenticate();
        const game = new Game();
        game.name = request.input('name');
        await game.save()
        return game
    }

    public async destroy({ response, auth, request, params }: HttpContextContract) {
        const user = await auth.authenticate();
        const game = await Game.query().where('id', params.id).delete();
        return response.json({ message: "Deleted successfully" })
    }
}