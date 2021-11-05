'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

// Rotas do Cadastro/Login do Usuário
Route.post('/register', 'Auth/AuthController.register')
Route.post('/login', 'Auth/AuthController.login')

// Rotas com Autenticação
Route.group(() => {
  Route.get('/load_session', 'Auth/AuthController.loadSession')
  // Produtos
  Route.post('/products', 'Product/ProductController.store')
  Route.put('/products/:id', 'Product/ProductController.update')
  Route.delete('/products/:id', 'Product/ProductController.destroy')
  // Product Sales
  Route.get('/productsales', 'ProductSale/ProductSaleController.index')
  Route.post('/productsales', 'ProductSale/ProductSaleController.store')
  // Reviews
  Route.post('/reviews', 'ProductReview/ProductReviewController.store')
  Route.put('/reviews/:id', 'ProductReview/ProductReviewController.update')
  Route.delete('/reviews/:id', 'ProductReview/ProductReviewController.destroy')
}).middleware('auth')

// Rotas dos Anexos
Route.resource('/attachment', 'Attachment/AttachmentController')

// Rotas das Categorias
Route.get('/product_categories', 'ProductCategory/ProductCategoryController.index')
Route.get('/product_categories/:id', 'ProductCategory/ProductCategoryController.show')

// Rotas dos Produtos
Route.get('/products', 'Product/ProductController.index')
Route.get('/products/:id', 'Product/ProductController.show')

// Rotas das Reviews
Route.get('/reviews', 'ProductReview/ProductReviewController.index')
Route.get('/reviews/:id', 'ProductReview/ProductReviewController.show')
