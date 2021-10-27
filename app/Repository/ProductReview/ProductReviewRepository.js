const ProductReview = use('App/Models/ProductReview')

class ProductReviewRepository {
    async index() {
        return await ProductReview.all()
    }

    async show(params) {
        return await ProductReview.findOrFail(params.id)
    }

    async store(request, auth) {
        const json = {
            user_id : auth.user.id,
            product_id : request.product_id,
            description : request.description,
            stars : request.stars
        }
        return await ProductReview.create(json)
    }

    async update(params, request) {
        return await ProductReview.query()
            .where('id', params.id)
            .update(request)
    }

    async destroy(params) {
        const product_review = await ProductReview.findOrFail(params.id)
        return await product_review.delete()
    }
}

module.exports = new ProductReviewRepository