module.exports = function (pool) {

async function addShoes(){
const selectIds = `drop FUNCTION getBrandId(text);

CREATE or replace FUNCTION getBrandId(brandName text) returns integer AS $$
    DECLARE shoeId integer;
    BEGIN
        select id into shoeId from brand where shoe_brand = brandName;
        return shoeId;
    END;
$$ LANGUAGE plpgsql;

drop FUNCTION getColourId(text);

CREATE or replace FUNCTION getColourId(colourName text) returns integer AS $$
    DECLARE colourId integer;
    BEGIN
        select id into colourId from colour where shoe_colour = colourName;
        return colourId;
    END;
$$ LANGUAGE plpgsql;

drop FUNCTION getSizeId(integer);

CREATE or replace FUNCTION getSizeId(sizeSize integer) returns integer AS $$
    DECLARE sizeId integer;
    BEGIN
        select id into sizeId from size where shoe_size = sizeSize;
        return sizeId;
    END;
$$ LANGUAGE  plpgsql;   `

console.log(selectIds)


}


return{
    addShoes,
}





}