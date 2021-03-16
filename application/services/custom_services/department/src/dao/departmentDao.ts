import * as mongoose from 'mongoose';
import departmentModel from '../models/department';
import { CustomLogger } from '../config/Logger'


export class departmentDao {
    private department = departmentModel;
    constructor() { }
public GpDelete(departmentId, callback){
new CustomLogger().showLogger('info', 'Enter into departmentDao.ts: GpDelete')

this.department.findByIdAndRemove(departmentId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from departmentDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(departmentData, callback){
new CustomLogger().showLogger('info', 'Enter into departmentDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(departmentData).forEach(
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
this.department.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from departmentDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(departmentData, callback){
new CustomLogger().showLogger('info', 'Enter into departmentDao.ts: GpUpdate')

this.department.findOneAndUpdate({ _id: departmentData._id }, departmentData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from departmentDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(departmentData, callback){
new CustomLogger().showLogger('info', 'Enter into departmentDao.ts: GpSearchForUpdate')

this.department.findOneAndUpdate({ _id: departmentData._id }, departmentData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from departmentDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into departmentDao.ts: GpGetAllValues')

this.department.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from departmentDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(departmentData, callback){
new CustomLogger().showLogger('info', 'Enter into departmentDao.ts: GpCreate')
let temp = new departmentModel(departmentData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from departmentDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}