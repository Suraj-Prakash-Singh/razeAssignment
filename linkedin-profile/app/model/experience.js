import mongoose from "mongoose"

const exp = mongoose.Schema({
    id: Number,
    position: String,
    company: String,
    positionType: String,
    startDate: String,
    endDate: String,
    duration: String,
    location: String,
    type: String,
    description: String
});
const experience = mongoose.model("EXP", exp);
export default experience;