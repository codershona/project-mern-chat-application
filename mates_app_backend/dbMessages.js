// we need to import mongoose
import mongoose from "mongoose";

const matesappSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});


export default mongoose.model("messageContent", matesappSchema);

