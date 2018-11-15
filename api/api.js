module.exports = function (shoeService){

    async function all(req,res){
        try{
            let results = await shoeService.getBrand()
            res.json({
                status:'success',
                data: results
            });
        }
        catch(err){
            next(err)
        }

    }

    async function addShoeToStock(req,res, next){
        try {
            let shoe = req.body

            let brandId = await shoeService.addBrand(shoe.brand)
            let colorId = await shoeService.addColour(shoe.colour)
            let sizeId = await shoeService.addSize(shoe.size)

            let shoeData =  {
                size_id:sizeId[0].id,
                brand_id:brandId[0].id,
                colour_id:colorId[0].id,
                qty:shoe.qty,
                price:shoe.price
            }

            await shoeService.checkShoe(shoeData)
            
            res.json({
                status: 'success'
            })
            
        } catch (error) {
            next(error)
        }

    }

    async function cart(req,res, next){
        try{
            const {shoeId} =req.body;
            let cart = await shoeService.addToCart(shoeId)
            // let showCart = await shoeService.checkoutCart()
            res.json({
                status:'success'
            })

        }
        catch(err){
            next(err)
        }
    }

    async function getCart(req,res, next){
        try{

            let showCart = await shoeService.checkoutCart() 
            let totalPrice = await shoeService.totalPrice()
            res.json({
                status:'success',
                data:showCart,
                price: totalPrice
            })

        }
        catch(err){
            next(err)
        }
    }




return{
    all, 
    addShoeToStock,
    cart,
    getCart
}


}