describe('The shoe catalogue add button should add shoes to display on the screen once a colour, size and brand are selected', function(){
    it('The shoe catalogue should take in 3 paramaters of brand,size and colour and print an object', function(){
        let ShoeCatalogue = ShoeCatalogues()

        let shoeFunc = ShoeCatalogue.addShoe()
        let shoes = {
                id: '1',
                brand: "nike",
                size:"7",
                color: "red",
                stock: '2'
            }

        assert.deepEqual(shoeFunc, shoes)

    });

});