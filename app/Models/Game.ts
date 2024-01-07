import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, ManyToMany, belongsTo, column, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Studio from './Studio'
import User from './User'

export default class Game extends BaseModel {
  @column({ isPrimary: true })
  public idGame: number

  @column()
  public name: string

  @column()
  public single: string

  @column()
  public platform: string

  @column()
  public download: string

  @column()
  public dateRelease: DateTime

  @belongsTo(() => Studio)
  public creator: BelongsTo<typeof Studio>

  @manyToMany(() => User)
  public players: ManyToMany<typeof User>
}
