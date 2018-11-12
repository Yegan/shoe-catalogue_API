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
            //console.log(shoe.brand)

            let brandId = await shoeService.addBrand(shoe.brand)
            console.log(brandId[0].id)
            let colorId = await shoeService.addColour(shoe.colour)
            let sizeId = await shoeService.addSize(shoe.size)

            let shoeData =  {
                size_id:sizeId[0].id,
                brand_id:brandId[0].id,
                colour_id:colorId[0].id,
                qty:shoe.qty,
                price:shoe.price
            }

            console.log(shoeData)
            await shoeService.addShoe(shoeData)
            
            res.json({
                status: 'success'
            })
            
        } catch (error) {
            next(error)
        }

    }




return{
    all, 
    addShoeToStock
}


}