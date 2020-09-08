CREATE TABLE autos (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50),
	color VARCHAR(25),
	anio INTEGER,
    modelo VARCHAR(50)
);

INSERT INTO autos (marca, color, anio, modelo )
    VALUES ('MAZDA', 'ROJO', 2018,'VT50'),
    ('TUCSON', 'NEGRO',2017,'VMM');

select * from autos;
