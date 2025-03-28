const mongoose = require("mongoose");
const { Schema } = mongoose;

const seedSchema = new Schema({
  description: { type: String, required: true },
  creatorName: { type: Schema.Types.ObjectId, ref: "User", required: true },
  creatorEmail: { type: String },
  dateRecorded: { type: Date, default: Date.now },
  group: { type: String },
  subGroup: { type: String },
  type: { type: String },
  weeksLeadTime: { type: Number },
  priority: { type: String, enum: ["low", "medium", "high"] },
  userAssigned: { type: Schema.Types.ObjectId, ref: "User" },
  startTime: { type: Date },
  expectedEndTime: { type: Date },
  completionDate: { type: Date },
  status: { type: String },
});

const Seed = mongoose.model("Seed", seedSchema);

module.exports = Seed;
