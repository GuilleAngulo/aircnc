const Booking = require('../models/Booking');

module.exports = {
    async store(req, res) {
        const { booking_id } = req.params;
        const { user_id } = req.body;

        const booking = await Booking.findById(booking_id).populate('spot');

        if (booking.spot.user == user_id) {

            booking.approved = true;

            await booking.save();

            const bookingUserSocket = req.connectedUsers[booking.user]
    
            if(bookingUserSocket) {
                req.io.to(bookingUserSocket).emit('booking_response', booking);
            }
    
        } else {
            console.log(`Approval denied: The user (id: ${user_id}) is not the owner of the spot.`);
        }

        return res.json(booking);
    }
};