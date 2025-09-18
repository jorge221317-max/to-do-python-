import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  user: { type: String, required: true } // ID del usuario que creó la tarea
}, { timestamps: true });

export default mongoose.model('Task', taskSchema);
