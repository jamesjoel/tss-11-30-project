import express from 'express'
import { PORT } from './config/config.js'
import AllRoutes from './routes/AllRoutes.js'
import cors from 'cors'
import Upload from 'express-fileupload'
import Path from 'path'
const app = express();

// for view assets folder files in "Front End"

app.use(express.static(Path.resolve()+"/assets"));

// localhost:3000/product_images/1.jpg

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(Upload());

app.use(AllRoutes);

app.listen(PORT, ()=>{
    console.log("Server Running With Port ", PORT);
})