import * as mongoose from 'mongoose';
import collegeModel from '../models/college';
import { CustomLogger } from '../config/Logger'


export class collegeDao {
    private college = collegeModel;
    constructor() { }
public GpDelete(collegeId, callback){
new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpDelete')

this.college.findByIdAndRemove(collegeId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(collegeData, callback){
new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(collegeData).forEach(
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
this.college.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(collegeData, callback){
new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpUpdate')

this.college.findOneAndUpdate({ _id: collegeData._id }, collegeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(collegeData, callback){
new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpSearchForUpdate')

this.college.findOneAndUpdate({ _id: collegeData._id }, collegeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpGetAllValues')

this.college.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(collegeData, callback){
new CustomLogger().showLogger('info', 'Enter into collegeDao.ts: GpCreate')
let temp = new collegeModel(collegeData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from collegeDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}