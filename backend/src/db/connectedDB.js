import mongoose from "mongoose";

const connectedDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("DB connected successfully!");
        })
        .catch((error) => {
            console.log(error.message);
        })
}

export default connectedDB