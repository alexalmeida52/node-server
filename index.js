const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json({ limit: '20mb' }));



let arr = [
    { id: 1, tituloDoLivro: "O alquimista", autorDoLivro: "Paulo Coelho", anoDePublicacao: 1988 },
    { id: 10000, tituloDoLivro: "O profeta", autorDoLivro: "Kahlil Gibran", anoDePublicacao: 1923 }
]

// post, get, delete, put
app.get('/livros', function(req, res) { 
    res.json(arr);
});

app.post('/livros', function(req, res) {
    console.log(req.body)
    arr.push(req.body);
    res.json(arr);
});

app.put('/livros/:id', function(req, res) {
    console.log(req.params)
    console.log(req.body)
    
    res.json('atualizado');
});

app.delete('/livros/:id', function(req, res) {
    console.log(req.params)
    
    res.json('atualizado');
});



app.listen('3333', () => {
    console.log('Listening on port 3333');
});
