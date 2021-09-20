import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.js';


dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/contacts', contactRoutes);
//app.use(bodyParser.json({limit:"25mb", extended:true}));
//app.use(bodyParser.urlencoded({limit:"25mb", extended:false}));
const DB_URL = process.env.CONNECTION_URL || "mongodb://127.0.0.1:27017";
const PORT = process.env.PORT || 5000;
mongoose.connect(DB_URL, {
  useNewUrlParser : true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
console.log(`connectection established and running on port:${PORT}`)
)).catch((err)=> console.log(err.message));

//mongoose.set('useFindAndModify', false);
