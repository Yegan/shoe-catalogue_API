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
            display.style.display = "none"

        //}


    })

    //Render Home Page

    homeButton.addEventListener('click', function(){
        admin.style.display = "none";
        showShoes();
        display.style.display = "";

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

        admin.style.display = "none";
        display.style.display = ""
        showShoes()


    })



    // function showAllShoes() {
    //     shoeFunc
    //         .getShoes()
    //         .then(showShoes)
    //         .catch(function(err) {
    //             alert(err);
    //         });
        
        
    // }

//     filterBtn.addEventListener('click', showAllShoes);

//    // showAllShoes();

//     //filter shoes button
//     filterBtn.addEventListener('click', function () {
//         let brandOfShoe = shoeBrand.value

//         if (brandOfShoe === '') {
//             return showAllShoes()
//         }


//         shoeFunc
//             .filterShoes(brandOfShoe)
//             .then(showShoes)
//             .catch(function(err){
//                 alert(err)
//             })

//     })


});
