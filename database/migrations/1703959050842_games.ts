import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'games'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('single').notNullable()
      table.string('platform').notNullable()
      table.string('download').notNullable()
      table.integer('studio_id').unsigned().references('studios.id')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
