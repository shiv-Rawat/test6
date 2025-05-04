const express = require('express')
const router = express.Router();
const User = require('./User')

router.post('/register', async (req, res) => {
    try { 
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).json({message: 'user register successfully', user : newUser})
    } catch (error) {
        console.error(err.message)
        res.status(500).send('Server error');
    }
})

router.get('/', async (req, res) => {
    try { 
        const user = await User.find().sort({registrationDate: -1});
        res.json(user);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;