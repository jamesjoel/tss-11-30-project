import mongoose from 'mongoose'
import { DB_URL } from '../config/config.js'

mongoose
.connect(DB_URL)
.then(()=>{
    console.log("Database Connected")
})
.catch(err=>{
    console.log("Database NOT Connected ", err)
})

export default mongoose;