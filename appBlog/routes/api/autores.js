const express = require('express');
const { getAll, getById, create } = require('../../models/autor.model');
const router = express.Router();


// GET /api/autores

router.get('/', async (req, res) => {
    try{
        const [result] = await getAll();
        res.json(result);
    }catch(error){
        res.json({ ERROR: error.message })
    }
});

//  GET /api/autores/autorId

router.get('/:autorId', async (req, res) => {
    const { autorId } = req.params;
    try{
        const [result] = await getById(autorId);
        if(result.length === 0){
            return res.json({ Mensaje: 'No existe un autor/a con este identificador'})
        }
        res.json(result[0]);
    }catch(error){
        res.json({ ERROR: error.message })
    }  
});


//  GET /api/autores/autorId/posts

router.get('/:autorId/posts', (req, res) => {
    res.send('Url para recuperar un único autor/a mediante su ID y sus posts')
});


// POST /api/autores/new

router.post('/new', async (req, res) => {
    try{
        const [result] = await create(req.body);
        const [post] = await getById(result.insertId)
        res.json(post[0]);
    }catch(error){
        res.json({ ERROR: error.message });
    }  
});

// PUT /api/posts/postId

router.put('/:autorId', (req, res) => {
    res.send('Se edita un autor/a')
});



// DELETE /api/posts/delete

router.delete('/:autorId', (req, res) => {
    res.send('Se elimina un autor/a')
});




module.exports = router;