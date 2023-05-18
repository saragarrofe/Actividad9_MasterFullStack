const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET /posts/all

router.get('/all', (req, res) => {
    res.send('Url para recuperar todos los posts')
});

//  GET /posts/postId

router.get('/:postId', (req, res) => {
    res.send('Url para recuperar un único post mediante su ID')
});


// POST /posts/new

router.post('/new', (req, res) => {
    res.send('Se crea un nuevo post')
});

// PUT /posts/postId

router.put('/:postId', (req, res) => {
    res.send('Se crea un nuevo post')
});



// DELETE /posts/delete

router.delete('/new', (req, res) => {
    res.send('Se crea un nuevo post')
});



module.exports = router;
