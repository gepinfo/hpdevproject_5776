import * as mongoose from 'mongoose';
import placeModel from '../models/place';
import { CustomLogger } from '../config/Logger'


export class placeDao {
    private place = placeModel;
    constructor() { }
public GpDelete(placeId, callback){
new CustomLogger().showLogger('info', 'Enter into placeDao.ts: GpDelete')

this.place.findByIdAndRemove(placeId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from placeDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(placeData, callback){
new CustomLogger().showLogger('info', 'Enter into placeDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(placeData).forEach(
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
this.place.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from placeDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(placeData, callback){
new CustomLogger().showLogger('info', 'Enter into placeDao.ts: GpUpdate')

this.place.findOneAndUpdate({ _id: placeData._id }, placeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from placeDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(placeData, callback){
new CustomLogger().showLogger('info', 'Enter into placeDao.ts: GpSearchForUpdate')

this.place.findOneAndUpdate({ _id: placeData._id }, placeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from placeDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into placeDao.ts: GpGetAllValues')

this.place.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from placeDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(placeData, callback){
new CustomLogger().showLogger('info', 'Enter into placeDao.ts: GpCreate')
let temp = new placeModel(placeData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from placeDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}