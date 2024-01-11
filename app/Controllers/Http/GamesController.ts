import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Game from "App/Models/Game";

export default class GamesController {

    public async index({ }: HttpContextContract) {
        const games = await Game.query();
        return games
    }

    public async show({ params }: HttpContextContract) {
        try {
            const game = await Game.find(params.id)
            if (game) {
                return game
            }
        } catch (error) {
            console.log(error)
        }
    }

    public async update({ request, params }: HttpContextContract) {
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

    public async store({ request }: HttpContextContract) {
        const data = request.only(['name', 'single', 'platform', 'download', 'date_release', 'studio_id'])

        const game = new Game();
        game.merge(data)
        await game.save()
        return game
    }

    public async destroy({ response, auth, request, params }: HttpContextContract) {
        const user = await auth.authenticate();
        const game = await Game.query().where('id', params.id).delete();
        return response.json({ message: "Deleted successfully" })
    }
}