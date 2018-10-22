function ShoeCatalogues (){


    function getShoes(){
        const shoes = [
          {
              color: 'blue',
              brand: 'Nike',
              size: 5,
              stock: 4
          },
          {
              color: 'red',
              brand: 'Addidas',
              size: 6,
              stock: 5
          },
          {
              color:'black',
              brand:'Puma',
              size:7,
              stock:3
          }

        ]

        return shoes

    }

    function filterShoes(filterCriteria){
        let shoes = getShoes();
        let list  = [];
        
        // filterCriteria.brand
        // loop through a list of objects and find all the entries where the brands match
        for (const shoe of shoes) {
            if (shoe.brand === filterCriteria) {
                list.push(shoe)
            }
        }
        // put the matching entries in a list and return that list

        return list;
    }

    
    return{
        getShoes,
        filterShoes,
    }
    
    
    };