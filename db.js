    import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
const URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDB =  async () => {
    try {
    await mongoose.connect(URI);
    console.log("success connection");
    } catch (e) {

        console.e("try again")
        process.exit()

    }
    
}