import * as mongoose from 'mongoose';
import studentModel from '../models/student';
import { CustomLogger } from '../config/Logger'


export class studentDao {
    private student = studentModel;
    constructor() { }
public GpDelete(studentId, callback){
new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpDelete')

this.student.findByIdAndRemove(studentId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(studentData, callback){
new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(studentData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.student.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(studentData, callback){
new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpUpdate')

this.student.findOneAndUpdate({ _id: studentData._id }, studentData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(studentData, callback){
new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpSearchForUpdate')

this.student.findOneAndUpdate({ _id: studentData._id }, studentData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpGetAllValues')

this.student.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(studentData, callback){
new CustomLogger().showLogger('info', 'Enter into studentDao.ts: GpCreate')
let temp = new studentModel(studentData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from studentDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}