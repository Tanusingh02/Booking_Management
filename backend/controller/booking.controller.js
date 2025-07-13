const bookingmodel = require('../model/booking.model')
var Bookingmodel=require('../model/booking.model')


exports.createBooking=async(req,res)=>{
    try{
        const checkinDate=new Date(req.body.checkin);
        const checkoutDate=new Date(req.body.checkout);
        const no_of_days=Math.ceil((checkoutDate-checkinDate)/1000*60*60*24);
        var booking=new Bookingmodel({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        phone:req.body.phone,
        guests:req.body.guests,
        checkin:req.body.Date,
        checkout:req.body.checkout,
        no_of_days:no_of_days,
        booking_date:new Date().getDate(),
        city:req.body.city
    });
    await booking.save();
    res.send({message:'Inserted',booking:booking});
    }catch(err){
        res.send({error:'Error Occured',details:err.message});
    }
}
exports.getBookings=(req,res)=>
{
   Bookingmodel.find().then(
    (result)=>res.send(result),
    (err)=>res.send(err)
   )
}
exports.getBooking=(req,res)=>
{
    let id=req.params.id;
    Bookingmodel.find({booking_id:id}).then(
        (result)=>res.send(result),
        (err)=>res.send(err)
    )
}
exports.deleteBookings=(req,res)=>
{
    let id=req.params.id;
    Bookingmodel.findOneandDelete({
        booking_id:id,
    }).then(
        (response)=>res.send({'message':'Delete',data:response}),
        (err)=>res.send(err)
    )
}
exports.getInvoice=(req,res)=>
{
    // let id=req.params.id;
    // Bookingmodel.find({booking_id:id}).then(
    //     (result)=>res.send(result),
    //     (err)=>res.send(err)
    // )
    console.log("Invoice generation is not implemented yet");
    res.send({'message':'Invoice generation is not implemented yet'});
}               