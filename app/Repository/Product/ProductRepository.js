const Product = use('App/Models/Product')

class ProductRepository {
    async index() {
        return await Product.all()
    }

    async store(request, auth) {
        const json = {
            seller : auth.user.id,
            category : request.category,
            name: request.name,
            description: request.description,
            price: request.price,
            image1: request.image1,
            image2: request.image2,
            image3: request.image3,
            image4: request.image4,
            image5: request.image5,
            image6: request.image6
        }
        return await Product.create(json)
    }

    async show(params) {
        return await Product.findOrFail(params.id)
    }

    async update(params, request) {
        return await Product.query()
            .where('id', params.id)
            .update(request)
    }

    async destroy(params) {
        const product = await Product.findOrFail(params.id)
        return await product.delete()
    }
}

module.exports = new ProductRepository