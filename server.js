import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';

// routers
import jobRouter from './routes/jobRouter.js';
import mongoose from 'mongoose';


const app = express();

if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}






app.use(express.json());


app.get('/', (req, res)=>{
    res.send('Hello World!');
})

app.post('/', (req, res)=>{
    console.log(req);
    res.json({message: 'Data received successfully', data: req.body});
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

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(500).json({msg: 'something went wrong'});
});

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

