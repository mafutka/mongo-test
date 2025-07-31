export const initMongoDb = async () => {
    try {
        console.log("connected mongodb succesfully");
        
    } catch (e ){
        console.log("connection error", e);
        throw e;
        
    }
} 