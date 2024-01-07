import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('username', 42).unique().notNullable()
      table.string('display_name', 42).notNullable()
      table.string('email', 42).unique().notNullable()
      table.string('password').notNullable()
      table.string('about', 255).notNullable()
      table.boolean('private').notNullable()
      table.json('logo')
      table.json('banner')
      table.string('remember_me_token').nullable()

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
