import mongoose from "mongoose";
//Data SCHEMA is basically defining how the data is going to be built

const whatsappSchema = mongoose.Schema({
  message: String,
  name: String,
  timestamp: String,
  received: Boolean,
});

export default mongoose.model("messagecontents", whatsappSchema);
