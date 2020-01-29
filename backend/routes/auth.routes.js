const { Router } = require('express');
const router = Router();

// /api/auth
router.post('/registration', async (req, res) => {
    try {
        const { email, password } = req.body;
    } catch (e) {
        res.status(500).json({ message: 'Произошла ошибка' })
    }
});

router.post('/login', async (req, res) => {
    try {
        throw new Error('Errorrr')
    } catch (e) {
        
    }
});

module.exports = router;
