import * as mongoose from 'mongoose'

export const JobSchema = new mongoose.Schema({
  title: String,
  salary: Number,
  _id: String
})
