import 'express-async-errors';
import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

// routers
import jobRouter from './routes/jobRouter.js';
import mongoose from 'mongoose';
import { validateTest } from './middleware/validationMiddleware.js';
//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';




const app = express();

if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}






app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.post('/api/v1/test', validateTest, (req, res)=>{
    const {name} = req.body;
    res.json({message: `Hello ${name}`});
});

app.use('/api/v1/jobs', jobRouter);


//Get single job
// app.get('/api/v1/jobs/:id');

//Get all jobs
// app.get('/api/v1/jobs');

//Create a job
// app.post('/api/v1/jobs');

//Edit a job
// app.patch('/api/v1/jobs/:id');

//Delete a job
// app.delete('/api/v1/jobs/:id');

app.use('*', (req, res) =>{
    res.status(404).json({msg: 'not found'});
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;


try {
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});
} catch (error) {
    console.log(error);
    process.exit(1);
}

