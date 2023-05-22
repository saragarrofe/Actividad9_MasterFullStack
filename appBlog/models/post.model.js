
// GET -> devolver todos los posts 

const getAll = () => {
    return db.query('select * from posts');
};

// GET -> devolver un post mediante su ID

const getById = (postId) => {
    return db.query('select * from posts  as p, autores as a where p.id = ?', [postId]);
};

//QUERY DE PRUEBA PARA SACAR TODOS LOS POSTS DE UN AUTOR 
const getByAutorId = (autorId) => {
    return db.query('select p.id, p.titulo, p.descripcion, p.fecha_creacion, p.categoria, a.id, a.nombre, a.apellidos from mydb.posts as p join mydb.autores as a on p.autores_id = ? and p.autores_id = a.id', [autorId])
};

const create = ({ titulo, descripcion, fecha_creacion, categoria, autores_id }) => {
    return db.query(
        'insert into posts (titulo, descripcion, fecha_creacion, categoria, autores_id) values (?, ?, ?, ?, ?)', 
        [titulo, descripcion, fecha_creacion, categoria, autores_id]
    )
};

const update = (postId, {titulo, descripcion, fecha_creacion, categoria, autores_id}) => {
    return db.query(
        'update posts set titulo = ?, descripcion = ?, fecha_creacion = ?, categoria = ?, autores_id = ? where id = ?', 
        [titulo, descripcion, fecha_creacion, categoria, autores_id, postId]
    )
};


const deleteById = (postId) => {
    return db.query('delete from posts where id = ?', [postId])

};

module.exports = { getAll, getById, create, update, deleteById, getByAutorId }