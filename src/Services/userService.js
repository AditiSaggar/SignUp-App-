const UserModel = require('../Model/index.js');

// Create user
async function createUser(req, res) {  
    try {
        const newUser = await UserModel.create(req.body);
        
        return res.status(200).json({
            success: true,
            user: newUser,
        });
    } catch (error) {
        console.error('Error creating user:', error);

        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                message: 'Validation error',
                errors: error.errors,
            });
        }

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

module.exports = {
    createUser
};
