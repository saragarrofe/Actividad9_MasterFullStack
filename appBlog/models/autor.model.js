
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

const update = (autorId, {nombre, apellidos, email, imagen}) => {
    return db.query(
        'update mydb.autores set nombre = ?, apellidos = ?, email = ?, imagen = ? where id = ?', 
        [nombre, apellidos, email, imagen, autorId]
    )
};


const deleteById = (autorId) => {
    return db.query('delete from mydb.autores where id = ?', [autorId])

};




module.exports = { getAll, getById, create, update, deleteById };