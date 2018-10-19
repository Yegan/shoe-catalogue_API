function ShoeCatalogues (){


    function getShoes(){
        const shoes = [
          {
              color: 'blue',
              brand: 'nike',
              size: '5',
              stock: '4'
          },
          {
              color: 'red',
              brand: 'addidas',
              size: '6',
              stock: '5'
          },
          {
              color:'black',
              brand:'puma',
              size:'7',
              stock:'3'
          }

        ]

        return shoes

    }

    
    return{
        getShoes,
    }
    
    
    };