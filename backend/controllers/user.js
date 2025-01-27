const userModel = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const secret = process.env.APP_SECRET

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body

        if (!username || !email || !password) return res.send({ msg: 'Any of the username, email, or password are required to register.' })

        let foundUserName = await userModel.findOne({ username })
        let foundEmail = await userModel.findOne({ email })

        if (foundUserName) return res.send({ msg: 'User with this username already exists.' })
        if (foundEmail) return res.send({ msg: 'User with this email address already exists.' })

        let hashedPassword = await bcrypt.hash(password, 10)
        let newUser = await userModel.create({ username, email, password: hashedPassword })

        return res.send({ msg: 'User registered successfully.', newUser })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}

const logUserIn = async (req, res) => {
    try {
        const { username, password } = req.body

        if (!username || !password) return res.send({ msg: 'Both username and password are required to log in.' })

        let foundUser = await userModel.findOne({ username })

        if (!foundUser) return res.send({ msg: 'User not found.' })

        const isPasswordValid = await bcrypt.compare(password, foundUser.password)

        if (!isPasswordValid) return res.send({ msg: 'Wrong password.' })
        else {
            const payload = { id: foundUser._id, username: foundUser.username }
            const token = await jwt.sign(payload, secret)
            return res.send({ msg: 'Login successful.', token })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Internal server error' })
    }
}

module.exports = { registerUser, logUserIn }