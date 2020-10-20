import express from 'express';
//import './database/';

const app = express();

app.use(express.json());    

app.get('/users/:id', (request, response)=> {
    console.log(request.query);
    console.log(request.params);
    console.log(request.body);


    return response.json({ message: 'teste json' });
});

app.listen(3333);