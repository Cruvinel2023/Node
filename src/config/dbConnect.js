import mongoose, { mongo } from "mongoose";

async function ConectaDatabase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING);

return mongoose.connection;
    
};

export default ConectaDatabase;

// mongodb+srv://ranierycruvinel:<db_password>@cluster0.x9e7ile.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0