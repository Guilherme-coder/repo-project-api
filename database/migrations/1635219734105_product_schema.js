'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      // id
      table.increments('id')
      // fk do vendedor
      table
          .integer('seller')
          .unsigned()
          .references('users.id')
          .onDelete('CASCADE')
      // fk da categoria
      table
          .integer('category')
          .unsigned()
          .references('product_categories.id')
      // nome do produto
      table.string('name')
      // descrição
      table.string('description')
      // preço
      table.decimal('price', 10, 2)
      // imagens
      table
          .integer('image1')
          .nullable()
      table
          .integer('image2')
          .nullable()
      table
          .integer('image3')
          .nullable()
      table
          .integer('image4')
          .nullable()
      table
          .integer('image5')
          .nullable()
      table
          .integer('image6')
          .nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
