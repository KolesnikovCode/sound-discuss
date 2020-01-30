const { Router } = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();

// /api/auth
router.post('/registration',
    [
        check('email', 'invalid email').isEmail(),
        check('password', 'Min password length is 6 characters.').isLength({ min: 6 })
    ],
    async (req, res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data for registration'
            })
        }

        const { email, password } = req.body;
        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'User with this email is already registered' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message: 'User has been successfully registered' });

    } catch (e) {
        res.status(500).json({ message: 'This f*cking backend is doesnt not working' });
    }
});

router.post('/login', async (req, res) => {
    try {
        throw new Error('Errorrr')
    } catch (e) {
        
    }
});

module.exports = router;
