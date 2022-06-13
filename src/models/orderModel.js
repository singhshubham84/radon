const mongoose = require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId


const authorSchema = new mongoose.Schema( {
   userId:{
    type:objectId,
    ref:"user"

   },
   productId:{
    type:objectId,
    ref:"product"

   },
   amount:0,
   isFreeAppUser:Boolean,
   date:"string"

}, { timestamps: true });

module.exports = mongoose.model('order', authorSchema)
