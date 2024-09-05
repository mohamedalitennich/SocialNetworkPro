const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to authenticate the user
const authMiddleware = async (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');
        if (!req.user) {
            return res.status(401).json({ message: 'User not found, authorization denied.' });
        }
        next();  // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token, authorization denied.' });
    }
};

module.exports = authMiddleware;
