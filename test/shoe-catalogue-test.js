describe('The shoe catalogue brand filter should filter the shoes according to the brand selected', function(){
    it('The shoe catalogue brand filter should check if a certain brand is selected and return shoes of only that brand', function(){
        let ShoeCatalogue = ShoeCatalogues()

        let shoeFunc = ShoeCatalogue.filterShoes( 'Nike');

        let shoes = [{
                brand: "Nike",
                size:5,
                color: "blue",
                stock: 4
            }];

        assert.deepEqual(shoeFunc, shoes)

    });

});