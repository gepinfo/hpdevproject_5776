
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const studentSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   Name: String,
   Email: String,
   Department: { type: Schema.Types.String, ref: 'department' },
   College: { type: Schema.Types.String, ref: 'college' },
   Place: { type: Schema.Types.String, ref: 'place' }
})

const studentModel = mongoose.model('student', studentSchema, 'student');
export default studentModel;
