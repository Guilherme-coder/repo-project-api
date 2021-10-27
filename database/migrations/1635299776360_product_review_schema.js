'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductReviewSchema extends Schema {
  up () {
    this.create('product_reviews', (table) => {
      // id
      table.increments('id')
      // fk do usuário
      table
          .integer('user_id')
          .unsigned()
          .references('users.id')
          .onDelete('CASCADE')
      // fk do produto
      table
          .integer('product_id')
          .unsigned()
          .references('products.id')
          .onDelete('CASCADE')
      // descrição da review
      table
          .text('description')
      // estrelas da review
      table
          .integer('stars')
      // timestamps
      table.timestamps()
    })
  }

  down () {
    this.drop('product_reviews')
  }
}

module.exports = ProductReviewSchema
