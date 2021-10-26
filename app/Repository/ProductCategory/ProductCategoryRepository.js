const ProductCategory = use('App/Models/ProductCategory')

class ProductCategoryRepository {
    async index() {
        return await ProductCategory.all()
    }

    async show(params) {
        return await ProductCategory.findOrFail(params.id)
    }

    async store(params) {
        
    }

    async update(params) {

    }

    async delete(params) {

    }
}

module.exports = new ProductCategoryRepository