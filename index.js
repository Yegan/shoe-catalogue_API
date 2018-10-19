document.addEventListener('DOMContentLoaded', function () {
const userTemplate = document.querySelector('.userTemplate').innerHTML
const display = document.querySelector('.displayTable')
const compiled = Handlebars.compile(userTemplate)
// buttons
const filterBtn = document.querySelector('.filter')
const brandBtn = document.querySelector('.brand')


// instance of factory function
const shoeFunc = ShoeCatalogues()
const displayShoeFunc = shoeFunc.getShoes()

filterBtn.addEventListener('click',function(){
    display.innerHTML = compiled({shoes : displayShoeFunc})

})




















    
});
