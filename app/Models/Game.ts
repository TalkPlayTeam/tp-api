import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public idGame: number

  @column()
  public name: string

  @column()
  public single: string

  @column()
  public description: string

  @column()
  public logo: string

  @column()
  public banner: string

  @column()
  public dateRelease: DateTime
}
