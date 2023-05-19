const express = require('express');
const router = express.Router();


// GET /autores

router.get('/', (req, res) => {
    res.send('Url para recuperar todos los autores')
});

//  GET /autores/autorId

router.get('/:autorId', (req, res) => {
    res.send('Url para recuperar un único autor/a mediante su ID')
});


//  GET /autores/autorId/posts

router.get('/:autorId/posts', (req, res) => {
    res.send('Url para recuperar un único autor/a mediante su ID y sus posts')
});


// POST /autores/new

router.post('/new', (req, res) => {
    res.send('Se crea un nuevo autor/a')
});

// PUT /posts/postId

router.put('/:autorId', (req, res) => {
    res.send('Se edita un autor/a')
});



// DELETE /posts/delete

router.delete('/:autorId', (req, res) => {
    res.send('Se elimina un autor/a')
});




module.exports = router;