module.exports = function (shoeService){

    async function all(req,res){
        try{
            let results = await shoeService.getShoes()
            res.json({
                status:'success',
                data: results
            });
        }
        catch(err){
            next(err)
        }

    }




return{
    all, 
}


}