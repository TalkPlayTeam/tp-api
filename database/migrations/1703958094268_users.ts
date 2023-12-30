import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('username', 42).unique().notNullable()
      table.string('displayName', 42).notNullable()
      table.string('email', 42).unique().notNullable()
      table.string('password', 110).notNullable()
      table.string('about', 255).notNullable()
      table.boolean('private').notNullable()
      table.json('logo').notNullable()
      table.json('banner').notNullable()
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
