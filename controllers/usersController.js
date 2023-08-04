const users = require('../Data/user.json');
console.log(users)
module.exports = {
    index: (req, res) => {
        return res.render('users',{
            users
        });
    }
}