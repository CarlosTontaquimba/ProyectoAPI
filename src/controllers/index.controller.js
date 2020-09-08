const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.DB_PORT
});
pool.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Conectado a la bdd');
    }
})
const getCars = async (req, res) => {
    const response = await pool.query('SELECT * FROM autos ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const getCarsById = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM autos WHERE id = $1', [id]);
    res.json(response.rows);
};

const createCars = async (req, res) => {
    const { marca, color, anio, modelo } = req.body;
    const response = await pool.query('INSERT INTO autos (marca, color, anio, modelo) VALUES ($1, $2, $3, $4)', [marca, color, anio, modelo]);
    res.json({
        message: 'Auto añadido corrctamente',
        body: {
            autos: { marca, color, anio, modelo }
        }
    })
};

const updateCars = async (req, res) => {
    const id = parseInt(req.params.id);
    const { marca, color, anio, modelo } = req.body;

    const response = await pool.query('UPDATE autos SET marca = $1, color = $2, anio = $3, modelo = $4 WHERE id = $5', [
        marca,
        color,
        anio,
        modelo,
        id
    ]);
    res.json('Auto actualizado correctamente');
};

const deleteCars = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM autos where id = $1', [
        id
    ]);
    res.json(`Auto ${id} eliminado correctamente`);
};

module.exports = {
    getCars,
    getCarsById,
    createCars,
    updateCars,
    deleteCars
};