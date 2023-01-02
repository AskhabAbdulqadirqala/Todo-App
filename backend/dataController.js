const User = require('./models/User')
const { validationResult } = require('express-validator')

class dataController {
    async update(req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) return res.status(400).json({message: 'Updating error (validation)', errors});
            const { username, todos } = req.body;

            User.findOneAndUpdate(
              { username: [username] },
              { todos: [...todos]},
              { new: true },
              function (err) {
                if (err) return res.json({message: 'Updating error'})
              }
            );
            return res.json({message: 'Success'})
        } catch(e){
            res.status(400).json({message: "Updating error"})
        }
    }
} 

module.exports = new dataController()