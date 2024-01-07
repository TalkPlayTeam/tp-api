import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Studio from 'App/Models/Studio'

export default class StudiosController {
    public async store({ request }: HttpContextContract) {
        const data = request.only(['name', 'logo', 'banner'])
        const studio = new Studio
        studio.merge(data)

        await studio.save()
        return studio
    }
}
