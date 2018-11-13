document.addEventListener('DOMContentLoaded', function () {

    let adminButton =document.querySelector('.Admin')
    let homeButton = document.querySelector('.Home')
    //Shoe table tempelate
    const userTemplate = document.querySelector('.userTemplateFancy').innerHTML
    const compiled = Handlebars.compile(userTemplate)
    const display = document.querySelector('.displayTable')

   
    //Add a Shoe / Admin

    const addBrand = document.querySelector('.Brand')
    const addSize = document.querySelector('.Size')
    const addColour = document.querySelector('.Colour')
    const addPrice = document.querySelector('.Price')
    const addQTY = document.querySelector('.QTY')

    const addStockBtn = document.querySelector('.addStockButton') 

    // cart selectors
    const cartDisplay = document.querySelector('.cart')

    const cartBtn = document.querySelector('.cartButton')
    

    function showShoes (){

        axios.get('/api')
        .then(function(results){
            let shoeData = results.data.data
            display.innerHTML = compiled({shoeData})

        })
    }

    showShoes()

    //Render Admin Page

    adminButton.addEventListener('click', function(){

        //showAdmin = true

        //if(showAdmin) {
            admin.style.display = "block"
            cartDisplay.style.display = "none"
            display.style.display = "none"

        //}


    })

    //Render Home Page

    homeButton.addEventListener('click', function(){
        admin.style.display = "none";
        showShoes();
        display.style.display = "";
        cartDisplay.style.display="none"
    

    })
    

    //Add a shoe to stock

    addStockBtn.addEventListener('click', function() {

        let shoeData = {
            brand: addBrand.value,
            colour: addColour.value,
            size: Number(addSize.value),
            price: Number(addPrice.value),
            qty: Number(addQTY.value)

        }

        console.log(shoeData)

        axios.post('/api/addshoe', shoeData)
        .then(function(result){
            alert(result.data.status)
           

        })
        cartDisplay.style.display="none";
        admin.style.display = "none";
        display.style.display = ""

        showShoes()


    })
    
    // Render cart page
    
    cartBtn.addEventListener('click', function(){
        cartDisplay.style.display = "block";
        admin.style.display = "none";
        display.style.display= "none";

    })

    addToCartButton.addEventListener('click', function(){

        //api call to add 1 shoe to cart
       // let addToCart = 
    })


});
