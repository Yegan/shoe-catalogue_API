'use strict'
const assert = require('assert')
const servicesFunc = require('../Services/services')
const postgres = require('pg')
const Pool = postgres.Pool

const connectionString = process.env.DATABASE_URL || 'postgres://coder:pg123@localhost:5432/shoe_db'

const pool = new Pool({
    connectionString
})


describe('Waiter Web-App', function () {
    beforeEach(async function () {
        await pool.query('delete from cart')
        await pool.query('delete from shoe')
        await pool.query('delete from brand')
        await pool.query('delete from colour')
        await pool.query('delete from size')

    })


    it('The brand of shoe that was added should be in the brand shoe table', async function () {

        let shoeDBFunc = servicesFunc(pool);

         let shoeBrand = 'Nike';

         let shoeDisplay =  await shoeDBFunc.addBrand(shoeBrand);
        

        let testShoe = "Nike";

        assert.equal(shoeDisplay[0].shoe_brand, testShoe)

    });

    it('The colour of the shoe should be added into the colour table', async function () {

        let shoeDBFunc = servicesFunc(pool);

         let shoeColour = 'Blue';

         let shoeDisplay =  await shoeDBFunc.addColour(shoeColour);
        

        let testShoe = "Blue"

        assert.equal(shoeDisplay[0].shoe_colour, testShoe)

    });

    it('The size of the shoe should be added into the size table', async function () {

        let shoeDBFunc = servicesFunc(pool);

         let sizeOfShoe = 5;

         let shoeDisplay =  await shoeDBFunc.addSize(sizeOfShoe);
        

        let testShoe = 5;

        assert.equal(shoeDisplay[0].shoe_size, testShoe)

    });

    it('The shoe should be added into the shoe table with all the corresponding ids for colour, size and brand', async function () {

        let shoeDBFunc = servicesFunc(pool);

        let colorBlue = await shoeDBFunc.addColour('Blue');
        let nike = await shoeDBFunc.addBrand('Nike');

        let size7 = await shoeDBFunc.addSize(7);


         let shoeDisplay =  await shoeDBFunc.addShoe({
             colour_id: colorBlue[0].id,
             brand_id: nike[0].id,
             size_id: size7[0].id,
             price: 750,
             qty: 7
         });
         
         let shoe = [{
             id:shoeDisplay[0].id,
            colour_id: colorBlue[0].id,
            brand_id: nike[0].id,
            size_id: size7[0].id,
            price: 750,
            qty: 7
        }]

        assert.deepEqual(shoeDisplay, shoe)

    });

    it('Should update the quantity of the cart in the cart table', async function () {

        let shoeDBFunc = servicesFunc(pool);

        
        let colorBlue = await shoeDBFunc.addColour('Blue');
        let nike = await shoeDBFunc.addBrand('Nike');

        let size7 = await shoeDBFunc.addSize(7);


      await shoeDBFunc.addShoe({
             colour_id: colorBlue[0].id,
             brand_id: nike[0].id,
             size_id: size7[0].id,
             price: 750,
             qty: 7
         });
      
        let shoe = await shoeDBFunc.checkoutCart() 
        let getShoe = await shoeDBFunc.getShoes()

        await shoeDBFunc.addToCart(getShoe[0].id)

        let cartDisplay = await shoeDBFunc.getCart()

       assert.deepEqual(cartDisplay, shoe)

    });

    it('Should update the quantity of the shoe in the shoe table and the quantity of the cart', async function () {

        let shoeDBFunc = servicesFunc(pool);

        
        let colorBlue = await shoeDBFunc.addColour('Blue');
        let nike = await shoeDBFunc.addBrand('Nike');

        let size7 = await shoeDBFunc.addSize(7);


        let shoe =  await shoeDBFunc.addShoe({
             colour_id: colorBlue[0].id,
             brand_id: nike[0].id,
             size_id: size7[0].id,
             price: 750,
             qty: 6
         });
      
         
        let getShoe = await shoeDBFunc.getShoes()

         await shoeDBFunc.addToCart(getShoe[0].id)


      assert.deepEqual(shoe, getShoe)

    });

    
   

    after(async function () {
        await pool.end()
    })

})
