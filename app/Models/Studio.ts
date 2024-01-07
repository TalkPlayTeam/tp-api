import { BaseModel, HasMany, column, hasMany } from '@ioc:Adonis/Lucid/Orm'
import { AttachmentContract, attachment } from '@ioc:Adonis/Addons/AttachmentLite'
import Game from './Game'

export default class Studio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @attachment()
  public logo: AttachmentContract

  @attachment()
  public banner: AttachmentContract


  @hasMany(() => Game)
  public games: HasMany<typeof Game>
}
