drop table if exists brand, colour, size, shoe, cart cascade;

create table brand(
id serial not null primary key,
shoe_brand text not null
);

create table colour(
id serial not null primary key,
shoe_colour text not null
);

create table size(
id serial not null primary key,
shoe_size int not null  
);

create table shoe(
id serial not null primary key,
brand_id int not null,
colour_id int not null,
size_id int not null,
price decimal(10,2) not null,
qty int not null,

foreign key (brand_id) references brand(id),
foreign key (colour_id) references colour(id),
foreign key (size_id) references size(id)
);


create table cart(
id serial not null primary key,
shoe_id int not null,
qty int not null,
foreign key (shoe_id) references shoe(id)
);



-- insert into brand (shoe_brand) values('Nike');
-- insert into brand (shoe_brand) values('Addidas');
-- insert into colour(shoe_colour) values('Blue');
-- insert into colour(shoe_colour) values('Red');
-- insert into size(shoe_size) values(7);
-- insert into size(shoe_size) values(8);




-- drop FUNCTION getBrandId(text);

-- CREATE or replace FUNCTION getBrandId(brandName text) returns integer AS $$
--     DECLARE shoeId integer;
--     BEGIN
--         select id into shoeId from brand where shoe_brand = brandName;
--         return shoeId;
--     END;
-- $$ LANGUAGE plpgsql;

-- drop FUNCTION getColourId(text);

-- CREATE or replace FUNCTION getColourId(colourName text) returns integer AS $$
--     DECLARE colourId integer;
--     BEGIN
--         select id into colourId from colour where shoe_colour = colourName;
--         return colourId;
--     END;
-- $$ LANGUAGE plpgsql;

-- drop FUNCTION getSizeId(integer);

-- CREATE or replace FUNCTION getSizeId(sizeSize integer) returns integer AS $$
--     DECLARE sizeId integer;
--     BEGIN
--         select id into sizeId from size where shoe_size = sizeSize;
--         return sizeId;
--     END;
-- $$ LANGUAGE  plpgsql;     

-- insert into shoe (brand_id, colour_id, size_id, price, qty) values( getBrandId('Addidas'), getColourId('Blue'), getSizeId(7), 450, 2);
-- insert into shoe (brand_id, colour_id, size_id, price, qty) values( getBrandId('Nike'), getColourId('Blue'), getSizeId(8), 750, 6);
-- insert into shoe (brand_id, colour_id, size_id, price, qty) values( getBrandId('Addidas'), getColourId('Red'), getSizeId(7), 950, 9);
-- insert into shoe (brand_id, colour_id, size_id, price, qty) values( getBrandId('Nike'), getColourId('Red'), getSizeId(7), 1050, 9);


-- Database name shoe_db



