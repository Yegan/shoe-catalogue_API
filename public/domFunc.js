document.addEventListener('DOMContentLoaded', function () {

    let adminButton =document.querySelector('.Admin')
    let homeButton = document.querySelector('.Home')
    //Shoe table tempelate
    const userTemplate = document.querySelector('.userTemplateFancy').innerHTML
    const compiled = Handlebars.compile(userTemplate)
    const display = document.querySelector('.displayTable')



    // buttons

    let showRegistration = false

    let showBasket = false

   // let showShoes = false


    function showShoes (){

        axios.get('/api')
        .then(function(results){
            let shoeData = results.data.data
            display.innerHTML = compiled({shoeData})

        })
    }

    showShoes()

    adminButton.addEventListener('click', function(){

        //showAdmin = true

        //if(showAdmin) {
            admin.style.display = "block"
            display.style.display = "none"

        //}


    })

    homeButton.addEventListener('click', function(){
        admin.style.display = "none";
        display.style.display = ""
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
