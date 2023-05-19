## obtención y creación de los posts y de los autores

### POSTS

- GET /posts/all 
- GET /posts/postId (Cada post recuperar deberia ir acompañadao de todos los datos del autor de este )
- POST /posts/new
- DELETE /posts/postId
- PUT /posts/edit

### AUTORES

- GET /autores/all 
- GET /autores/autorId 
- GET /autores/autorId/posts (se debe definir una url que nos permita recuperar los diferentes posts escritos por un autor en concreto )
- POST /autores/new
- DELETE /autores/autorId
- PUT /autores/edit

