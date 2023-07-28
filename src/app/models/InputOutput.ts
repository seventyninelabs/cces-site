import mongoose from "mongoose";

const inputOutputSchema = new mongoose.Schema({
    driver: { type: mongoose.Schema.Types.ObjectId, ref: "Driver", required: true },
    vehicle: { type: mongoose.Schema.Types.ObjectId, ref: "Vehicle", required: true },
    register_at: { type: Date },
    odometer: { type: Number, required: true },
    description: { type: String, required: true },
    destiny: { type: String },
    status: { type: String, enum: ["E", "S"], required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: null }
  });
  
  const InputOutput = mongoose.models.Input_output || mongoose.model('Input_output', inputOutputSchema);
  export default InputOutput 