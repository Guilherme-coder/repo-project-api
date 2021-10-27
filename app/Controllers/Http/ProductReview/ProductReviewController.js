'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const ProductReviewRepository = use('App/Repository/ProductReview/ProductReviewRepository')

/**
 * Resourceful controller for interacting with productreviews
 */
class ProductReviewController {
  /**
   * Show a list of all productreviews.
   * GET productreviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    return await ProductReviewRepository.index()
  }

  /**
   * Render a form to be used for creating a new productreview.
   * GET productreviews/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new productreview.
   * POST productreviews
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    return await ProductReviewRepository.store(request.all(), auth)
  }

  /**
   * Display a single productreview.
   * GET productreviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    return await ProductReviewRepository.show(params)
  }

  /**
   * Render a form to update an existing productreview.
   * GET productreviews/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update productreview details.
   * PUT or PATCH productreviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response, auth }) {
    return await ProductReviewRepository.update(params, request.all(), auth)
  }

  /**
   * Delete a productreview with id.
   * DELETE productreviews/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    return await ProductReviewRepository.destroy(params)
  }
}

module.exports = ProductReviewController
