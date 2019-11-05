//INDEX, SHOW, STORE, UPDATE, DESTROY
const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        /*
        const email = req.body.email;
        const filter = { email };
        const dataToUpsert = { email };
        const user = await User.findOneAndUpdate(filter, dataToUpsert, {
            new: true,
            upsert: true
            //upsert = update and insert
        })
        */

        return res.json(user);
    }
};