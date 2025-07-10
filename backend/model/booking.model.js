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
      booking_date:Date.now,
      city:String,
      booking_id:Number
})
bookingschema.plugin(AutoIncrement,
    {
        inc_field:'booking_id'
    });
var bookingmodel=mongoose.model("booking",bookingschema);

module.exports=bookingmodel;