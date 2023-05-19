
// GET -> devolver todos los autores 

const getAll = () => {
    return db.query('SELECT * FROM mydb.autores');
}

// GET -> devolver un autor/a mediante su ID

const getById = (autorId) => {
    return db.query('SELECT * FROM mydb.autores WHERE id = ?', [autorId]);
}

const create = ({ nombre, apellidos, email, imagen }) => {
    return db.query(
        'insert into mydb.autores (nombre, apellidos, email, imagen) values (?, ?, ?, ?)', 
        [nombre, apellidos, email, imagen]
    )
};




module.exports = { getAll, getById, create };