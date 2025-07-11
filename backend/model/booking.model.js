var mongoose=require('mongoose')

var bookingschema=new mongoose.Schema({
      firstname:String,
      lastname:String,
      email:String,
      phone:String,
      guests:Number,
      checkin:Date,
      checkout:Date,
      no_of_days:Number,
      booking_date:
      {type:Date,default:Date.now}, // Changed to use Date.now as default
      city:String,
      booking_id:Number
})

var bookingmodel=mongoose.model("booking",bookingschema);

module.exports=bookingmodel;