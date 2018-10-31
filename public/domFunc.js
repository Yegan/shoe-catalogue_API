('DOMContentLoaded', function () {
    const userTemplate = document.querySelector('.userTemplateFancy').innerHTML
    const display = document.querySelector('.displayTable')
    const shoeBrand = document.querySelector('.brand')
    const compiled = Handlebars.compile(userTemplate)

    // buttons
    const filterBtn = document.querySelector('.custom-select')

    // instance of factory function
    const shoeFunc = ShoeCatalogues()


    function showShoes (shoes){
        display.innerHTML = compiled({ shoes })
    }

    function showAllShoes() {
        shoeFunc
            .getShoes()
            .then(showShoes)
            .catch(function(err) {
                alert(err);
            });
        
        
    }

    filterBtn.addEventListener('click', showAllShoes);

    showAllShoes();

    //filter shoes button
    filterBtn.addEventListener('click', function () {
        let brandOfShoe = shoeBrand.value

        if (brandOfShoe === '') {
            return showAllShoes()
        }


        shoeFunc
            .filterShoes(brandOfShoe)
            .then(showShoes)
            .catch(function(err){
                alert(err)
            })

    })


});