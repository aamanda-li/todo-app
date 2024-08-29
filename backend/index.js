import express from "express";
import { mongoDbURL, PORT } from "./config.js";
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.get('/', (request, response) => {
  console.log(request);
  return response.status(234).send("Hello world")
});

mongoose.connect(mongoDbURL)
    .then(()=> {
        console.log('App connected to database')
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });

    })
    .catch((error) =>{
        console.log(error);
    });

    import todosRoute from "./routes/toDoRoutes.js";

    app.use(express.json());
    
    app.get('/', (request, response) => {
        console.log(request)
        return response.status(234).send('Welcome')
    });
    app.use('/api/todos', todosRoute);

app.use(cors());