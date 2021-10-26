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

Route.post('/register', 'Auth/AuthController.register')
Route.post('/login', 'Auth/AuthController.login')

Route.group(() => {
  Route.get('/load_session', 'Auth/AuthController.loadSession')
}).middleware('auth')

// Rotas dos Produtos

Route.get('/product_categories', 'ProductCategory/ProductCategoryController.index')