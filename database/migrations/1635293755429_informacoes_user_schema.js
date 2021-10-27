'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InformacoesUserSchema extends Schema {
  up () {
    this.table('users', (table) => {
      table.string('name', 100)
      table.string('address', 200)
      table.string('contact', 20)
      table.integer('avatar')
            .unsigned()
            .references('attachments.id')
            .onDelete('CASCADE')
    })
  }

  down () {
    this.table('informacoes_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = InformacoesUserSchema
