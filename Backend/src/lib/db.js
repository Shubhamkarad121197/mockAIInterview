import mongoose from 'mongoose'

import {ENV} from './env.js'

export const connectDB=async ()=>{
    try{
      const connection = await mongoose.connect(ENV.DB_URL);
      console.log('connected to mongoDB',connection.connection.host)
        
    }
    catch(error){
        console.error('Error connecting to mongoDB:',error);
        process.exit(1)// 0 means success , 1 means failure

    }
}