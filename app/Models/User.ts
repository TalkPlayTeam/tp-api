import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Game from './Game'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public idUser: number

  @column()
  public username: string

  @column()
  public displayName: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column.dateTime()
  public dateSignUp: DateTime

  @column()
  public about: string

  @column()
  public private: boolean

  @column()
  public logo: string

  @column()
  public banner: string

  @hasMany(() => Game)
  public todos: HasMany<typeof Game>;

  // @column()
  // public rememberMeToken: string | null

  // @column.dateTime({ autoCreate: true })
  // public createdAt: DateTime

  // @column.dateTime({ autoCreate: true, autoUpdate: true })
  // public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
