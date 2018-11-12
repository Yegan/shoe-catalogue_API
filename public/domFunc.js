document.addEventListener('DOMContentLoaded', function () {

    //Shoe table tempelate
    const userTemplate = document.querySelector('.userTemplateFancy').innerHTML
    const compiled = Handlebars.compile(userTemplate)
    const display = document.querySelector('.displayTable')



    // buttons



    function showShoes (){

        axios.get('/api')
        .then(function(results){
            let shoeData = results.data.data
            display.innerHTML = compiled({shoeData})

        })
    }

    showShoes()

    // document.addEventListener('load', function(){

    // })

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
