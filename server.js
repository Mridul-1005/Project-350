import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { nanoid } from 'nanoid';


let jobs = [
    {id: nanoid(), comapny: 'apple', position: 'front-end'},
    {id: nanoid(), comapny: 'google', position: 'back-end'},

]

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

//Get single job
app.get('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});

//Get all jobs
app.get('/api/v1/jobs', (req, res)=>{
    res.status(200).json({jobs})
});

//Create a job
app.post('/api/v1/jobs', (req, res)=>{
    const {company, position } = req.body;
    if(!company || !position){
        return res.status(400).json({msg: 'Please provide company and position'});
    }
    const id = nanoid(10);
    const job = {id, company, position};
    jobs.push(job);
    res.status(201).json({job})  //modified code to 201 status code
});

//Edit a job
app.patch('/api/v1/jobs/:id', (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: 'please provide company and position' });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: 'job modified', job });
});

//Delete a job
app.delete('/api/v1/jobs/:id', (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: 'job deleted' });
});


const port = process.env.PORT || 5100;


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})