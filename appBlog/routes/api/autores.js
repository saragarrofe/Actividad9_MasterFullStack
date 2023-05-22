const express = require('express');
const { getAll, getById, create, update, deleteById } = require('../../models/autor.model');
const { getByAutorId } = require('../../models/post.model');
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


//  GET /api/autores/posts

router.get('/posts/:autorId', async (req, res) => {
    const { autorId } = req.params;
    try{
        const [result] = await getByAutorId(autorId);
        if(result.length === 0){
            return res.json({ Mensaje: 'No existe un autor/a con este identificador'})
        }
        res.json(result);
        /*
        const [autores] = await getAll();

        for (let autor of autores){
            const [posts] = await getByAutorId(autor.id);
            console.log(posts.length);
            autor.posts = posts;
        }
        res.json(autores);

        */

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

// PUT /api/autores/postId

router.put('/:autorId', async (req, res) => {

    const { autorId } = req.params;
    try{
        const [result] = await update(autorId, req.body);
        const [autor] = await getById(autorId)
        res.json(autor[0]);

    } catch(error){
        res.json({ ERROR: error.message });
    }

});



// DELETE /api/autores/delete

router.delete('/:autorId', async (req, res) => {
    const { autorId } = req.params;
    try{
        const [autor] = await getById(autorId);
        const [result] = await deleteById(autorId);
        res.json(autor[0]);
    }catch(error){
        res.json({ ERROR: error.message });
    }

});




module.exports = router;