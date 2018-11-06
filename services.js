module.exports = function (pool) {

    // Adding a shoe brand into the shoe brand table, the shoe brand eg('Nike') will be referenced in the shoe table as a foreign key

    async function addBrand(brand) {

        let brandOfshoe = await pool.query(`select * from brand where shoe_brand =$1`, [brand])

        let result = brandOfshoe.rowCount

        if (result === 0) {
            await pool.query(`insert into brand(shoe_brand) values($1)`, [brand]);

        }

        let shoe = await pool.query(`select shoe_brand from brand where shoe_brand =$1`, [brand])
        return shoe.rows
    }


    // Adding a shoe colour into the shoe colour table, the shoe brand eg('Blue') will be referenced in the shoe table as a foreign key

    async function addColour(colour) {

        let colourOfShoe = await pool.query(`select * from colour where shoe_colour = $1`, [colour])

        let result = colourOfShoe.rowCount

        if (result === 0) {
            await pool.query(`insert into colour(shoe_colour) values($1)`, [colour])
        }

        let shoeColour = await pool.query(`select shoe_colour from colour where shoe_colour = $1`, [colour])
        return shoeColour.rows
    }

    // Adding a shoe size into the shoe size table, the shoe brand eg(5) will be referenced in the shoe table as a foreign key

    async function addSize(size) {
        
        let shoeSize = await pool.query(`select * from size where shoe_size = $1`, [size])

        let result = shoeSize.rowCount

        if (result === 0) {
            await pool.query(`insert into size(shoe_size) values($1)`, [size])
        }

        let sizeOfShoe = await pool.query(`select * from size where shoe_size = $1`, [size])
        return sizeOfShoe.rows
    }

    async function addShoe(shoeData) {

       let data =  {
            size:shoeData.size_id,
            brand:shoeData.brand_id,
            colour:shoeData.colour_id,
            qty:shoeData.qty,
            price:shoeData.price
        }    
        
        // just do an insert
        await pool.query(`insert into shoe(brand_id,colour_id,size_id,price,qty `,[data])

        let result = await pool.query(`select * from shoe where id = $1`, [data])
        
        return result.rows

    }



    return {
        addBrand,
        addColour,
        addSize,
        addShoe

    }





}