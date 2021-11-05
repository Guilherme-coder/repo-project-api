'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSaleSchema extends Schema {
  up () {
    this.create('product_sales', (table) => {
      table.increments()
      //fk do comprador
      table
        .integer('buyer_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
      //fk do vendedor
      table
        .integer('seller_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE')
      //fk do produto
      table
        .integer('product_id')
        .unsigned()
        .references('products.id')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_sales')
  }
}

module.exports = ProductSaleSchema
