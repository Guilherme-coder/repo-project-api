const productSale = use('App/Models/ProductSale')

class ProductSaleRepository {
    async index(){
        return await productSale.all()
    }
    async store(request, auth){
        const data = request.all()
        const json = {
            buyer_id: auth.user.id,
            seller_id: data.seller_id,
            product_id: data.product_id
        }
        return await productSale.create(json)
    }
}

module.exports = new ProductSaleRepository