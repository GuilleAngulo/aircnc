const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { booking_id } = req.params;

        const booking = await Booking.findById(booking_id).populate('spot');


        if (booking.approved !== true) {

            booking.approved = false;

            await booking.save();
    
            const bookingUserSocket = req.connectedUsers[booking.user]
    
            if(bookingUserSocket) {
                req.io.to(bookingUserSocket).emit('booking_response', booking);
            }
        } else {
            console.log(`Rejection denied. The booking (id: ${booking_id}) was already approved.`);
        }

        

        return res.json(booking);
    }
};