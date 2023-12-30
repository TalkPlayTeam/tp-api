import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'games_launchers'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('game_id').unsigned().references('games.id').notNullable()
      table.integer('launcher_id').unsigned().references('launchers.id').notNullable()
      table.unique(['game_id', 'launcher_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
