const express = require('express');
const router = express.Router();

// GET /posts

router.get('/', async (req, res) => {
    try{
        const [result] = await db.query('SELECT * FROM mydb.posts');
        console.log(result.length);
        res.json(result);

    }catch(error){
        res.json({ ERROR: error.message })
    }
});

//  GET /posts/postId

router.get('/:postId', (req, res) => {

    const { postId } = req.params;
    res.json('Url para recuperar un único post mediante su ID')
});


// POST /posts/new

router.post('/new', (req, res) => {
    console.log(req.body);
    res.json('Se crea un nuevo post')
});


// PUT /posts/postId

router.put('/:postId', (req, res) => {

    const { postId } = req.params;
    res.json('Se edita un post')
});



// DELETE /posts/delete

router.delete('/:postId', (req, res) => {
    const { postId } = req.params;
    res.json('Se elimina un post');
});



module.exports = router;
