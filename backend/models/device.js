import mongoose from "mongoose";

const deviceSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required:true,
    },
    description:
    {
        type:String,
        required:false
    },
    pricePrHr :
    {
        type:Number,
        required:true
    },
    status:
    {
        type:Boolean,
        required:true
    }
},{timestamps:true});
const device = mongoose.model("device",deviceSchema);
export default device;