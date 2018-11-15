module.exports = function (pool) {

    // Adding a shoe brand into the shoe brand table, the shoe brand eg('Nike') will be referenced in the shoe table as a foreign key

    async function addBrand(brand) {
        try{
            let brandOfshoe = await pool.query(`select * from brand where shoe_brand =$1`, [brand])

        let result = brandOfshoe.rowCount

        if (result === 0) {
            await pool.query(`insert into brand(shoe_brand) values($1)`, [brand]);

        }

        let shoe = await pool.query(`select * from brand where shoe_brand =$1`, [brand])
        return shoe.rows
        }
        catch(error){
            // console.log(error)
        }
        
    }


    // Adding a shoe colour into the shoe colour table, the shoe brand eg('Blue') will be referenced in the shoe table as a foreign key

    async function addColour(colour) {
        try{
            let colourOfShoe = await pool.query(`select * from colour where shoe_colour = $1`, [colour])

            let result = colourOfShoe.rowCount
    
            if (result === 0) {
                await pool.query(`insert into colour(shoe_colour) values($1)`, [colour])
            }
    
            let shoeColour = await pool.query(`select * from colour where shoe_colour = $1`, [colour])
            return shoeColour.rows
        }
        catch(error){
            // console.log(error)
        }
    }

    // Adding a shoe size into the shoe size table, the shoe brand eg(5) will be referenced in the shoe table as a foreign key

    async function addSize(size) {
        try{
            let shoeSize = await pool.query(`select * from size where shoe_size = $1`, [size])

        let result = shoeSize.rowCount

        if (result === 0) {
            await pool.query(`insert into size(shoe_size) values($1)`, [size])
        }

        let sizeOfShoe = await pool.query(`select * from size where shoe_size = $1`, [size])
        return sizeOfShoe.rows
        }

        catch(error){
            // console.log(error)
        }
        
        
    }

    async function addShoe(shoeData) {
       try{
        let data =  {
            size:shoeData.size_id,
            brand:shoeData.brand_id,
            colour:shoeData.colour_id,
            qty:shoeData.qty,
            price:shoeData.price
        }    

        // just do an insert

        await pool.query(`insert into shoe(brand_id,colour_id,size_id,qty,price) values($1, $2, $3, $4, $5)`,[data.brand, data.colour,data.size,data.qty,data.price])

        let result = await pool.query('select * from shoe ')
        return result.rows
       }

       catch(error){
       }
 
    }

    async function checkShoe(shoe){
        console.log(shoe)
        let wholeShoe = await pool.query('select * from shoe where brand_id =$1 and colour_id =$2 and size_id=$3', [shoe.brand, shoe.colour, shoe.size])
        
        let check = wholeShoe.rows
        console.log(check)
        if(check.length === 1){
            let totalStock = shoe.qty + check[0].qty
            console.log("---------------------")
            await pool.query('update shoe set qty = $1, price = $2 ', [totalStock, shoe.price])
        }

        else{
         addShoe(shoe)
         console.log('here-----------------------')
        }

        

    }

    async function getBrand() {
        let result = await pool.query(`select shoe.id, shoe_brand, shoe_colour, shoe_size, price, qty
        from shoe
        join brand
        on brand.id = shoe.brand_id
        join colour
        on colour.id = shoe.colour_id
        join size
        on size.id = shoe.size_id`);
        return result.rows;
    }


    async function getShoes(){
        let result = await pool.query(`select * from shoe ORDER BY id ASC`)
        return result.rows

    }

    async function checkoutCart(){
        try{
            let result = await pool.query(`select shoe.id, shoe_brand, shoe_colour, shoe_size, price,cart.qty
            from shoe
            join brand
            on brand.id = shoe.brand_id
            join colour
            on colour.id = shoe.colour_id
            join size
            on size.id = shoe.size_id 
            join cart 
            on cart.shoe_id = shoe.id 
            `)
            return result.rows
        }
        catch(err){
            console.log(err)
        }

   
    }

    async function totalPrice(){
    
        let total = 0;        
        let price = await checkoutCart()

        for (let i = 0; i < price.length; i++) {
           let totalPrice = price[i].price * price[i].qty
            total = totalPrice + total;    
        }

        return total;
    }



    async function addToCart(shoeId){
        
        try{
            let shoe = await pool.query('select * from cart where shoe_id = $1 ', [shoeId])
         
            if(shoe.rowCount === 0){
                await pool.query('insert into cart (shoe_id, qty) values($1, $2)', [shoeId,1])
                await pool.query('update shoe  set qty =(qty-1) where id= $1 AND qty>0',[shoeId])
            
            }
            else if(shoe.rowCount > 0){ 
              
           let updateShoes =  await pool.query('update shoe set qty =(qty-1) where id = $1 AND qty >0',[shoeId])
         
           
           if (updateShoes.rowCount> 0) { 
            await pool.query('update cart  set qty =(qty+1) where shoe_id = $1',[shoeId])               
           }

            }
         
        
         
             }
             catch(err){
                 console.log(err)
             }
        }
   

    async function getCart(){
    let result = await pool.query('select * from cart ORDER BY id ASC')
    return result.rows

    }



    return {
        addBrand,
        addColour,
        addSize,
        addShoe,
        getShoes,
        getBrand,
        addToCart,
        getCart,
        checkoutCart,
        totalPrice,
        checkShoe

    }





}