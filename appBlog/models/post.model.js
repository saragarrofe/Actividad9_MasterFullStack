
// GET -> devolver todos los posts 

const getAll = () => {
    return db.query('select * from mydb.posts');
};

// GET -> devolver un post mediante su ID

const getById = (postId) => {
    return db.query('select * from mydb.posts where id = ?', [postId]);
};

const create = ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    return db.query(
        'insert into mydb.posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)', 
        [titulo, descripcion, fecha_creacion, categoria, autores_id]
    )
};

const update = (postId, {titulo, descripcion, fecha_creacion, categoria, autores_id}) => {
    return db.query(
        'update mydb.posts set titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autores_id = ? where id = ?', 
        [titulo, descripcion, fecha_creacion, categoria, autores_id, postId]
    )
};


const deleteById = (postId) => {
    return db.query('delete from mydb.posts where id = ?', [postId])

};

module.exports = { getAll, getById, create, update, deleteById }