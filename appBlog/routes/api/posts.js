const express = require('express');
const { getAll, getById, create, update, deleteById } = require('../../models/post.model');
const router = express.Router();

// GET /api/posts

router.get('/', async (req, res) => {
    try{
        const [result] = await getAll();
        res.json(result);
    }catch(error){
        res.json({ ERROR: error.message })
    }
});

//  GET /api/posts/postId

router.get('/:postId', async (req, res) => {
    const { postId } = req.params;
    try{
        const [result] = await getById(postId);
        if(result.length === 0){
            return res.json({ Mensaje: 'No existe un post con este identificador'});
        }
        res.json(result[0]);
    }catch(error){
        res.json({ ERROR: error.message });
    }  
});


// POST /api/posts/new

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

router.put('/:postId', async (req, res) => {

    const { postId } = req.params;
    try{
        const [result] = await update(postId, req.body);
        const [post] = await getById(postId)
        res.json(post[0]);

    } catch(error){
        res.json({ ERROR: error.message });
    }

});



// DELETE /api/posts/delete

router.delete('/:postId', async (req, res) => {
    const { postId } = req.params;
    try{
        const [post] = await getById(postId);
        const [result] = await deleteById(postId);
        res.json(post[0])
    }catch(error){
        res.json({ ERROR: error.message });
    }

});



module.exports = router;
