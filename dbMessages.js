// we need to import mongoose
import mongoose from "mongoose";

const matesappSchema=mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
});

// this is database collection
export default mongoose.model("messagecontents", matesappSchema);

