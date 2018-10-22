document.addEventListener('DOMContentLoaded', function () {
const userTemplate = document.querySelector('.userTemplate').innerHTML
const display = document.querySelector('.displayTable')
const shoeBrand = document.querySelector('.brand')
const compiled = Handlebars.compile(userTemplate)

// buttons
const displayShoeBtn = document.querySelector('.filter')
const filterBtn = document.querySelector('.custom-select')

// instance of factory function
const shoeFunc = ShoeCatalogues()
const displayShoeFunc = shoeFunc.getShoes()

// below object takes in a parameter


// display shoes button
displayShoeBtn.addEventListener('click',function(){
    display.innerHTML = compiled({shoes : displayShoeFunc})

})

//filter shoes button
filterBtn.addEventListener('click', function(){
    let brandOfShoe = shoeBrand.value   
    const filterShoes = shoeFunc.filterShoes(brandOfShoe)
    console.log(filterShoes)
    display.innerHTML = compiled({shoes:filterShoes})


})


















    
});
