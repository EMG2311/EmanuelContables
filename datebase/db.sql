-- usign the database
use emanuelcontables;

--creating a table
create table productos(
    id int primary key,
    nombre_producto varchar2(255),
    calculado varchar(255),
    producto_producido int,
    precioUnitario float,
    puntoEquilibrio float
)

create table costos{
    producto_Asociado int,
    nombre_costo varchar(255),
    costo float,
    tipoCosto varchar2(255)

}

-- tp show all tables
show tables;

--to describe the table
describe costos, productos;