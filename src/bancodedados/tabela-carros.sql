drop table if exists carros ;

create table carros (
    id serial primary key,
    marca text,
    modelo text,
    ano integer,
    cor text,
    valor integer
);
