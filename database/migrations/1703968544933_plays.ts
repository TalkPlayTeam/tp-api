import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'plays'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('game_id').unsigned().references('games.id').notNullable()
      table.integer('user_id').unsigned().references('users.id').notNullable()
      table.unique(['game_id', 'user_id'])
      table.string('pseudo').notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
