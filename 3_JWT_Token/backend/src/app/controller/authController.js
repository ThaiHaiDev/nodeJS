const User = require('../models/User');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let refreshTokens = [];  // Khi login nó sẽ thêm refreshToken vào 
const authController = {
    // REGISTER
    async registerUser (req, res) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)
    
            // Create new user
            const newUser = await new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed
            });

            // // Save to DB
            const user = await newUser.save()
            res.status(200).json(newUser)

        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.isAdmin
            },
            process.env.JWT_ACCESS_KEY,
            { expiresIn: "30s" }
        )
    },

    // GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.isAdmin
            },
            process.env.JWT_REFRESH_KEY,
            { expiresIn: "100d" }
        )
    },

    // LOGIN
    async loginUser (req, res) {
        try {
            const user = await User.findOne({ username: req.body.username })
            if(!user) {
                res.status(404).json('Wrong Username...');
            }
            const validPassword = await bcrypt.compare(
                req.body.password, user.password
            )
            if(!validPassword) {
                res.status(404).json('Wrong Password...')
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user);
                const refreshToken = authController.generateRefreshToken(user);
                refreshTokens.push(refreshToken);

                // save refreshToken trong Cookies
                res.cookie('refreshToken', refreshToken, {
                    httpOnly: true,
                    secure: false,  // Khi làm để false, nào deploy thì để true cho bảo vệ
                    path: '/',
                    sameSite: 'strict'
                })

                const { password, ...others } = user._doc;
                res.status(200).json({others, accessToken})
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // REFRESH TOKEN
    requestRefreshToken: async(req, res) => {
        // Lấy refreshToken từ user
        const refreshToken = req.cookies.refreshToken;

        if (!refreshToken) return res.status(401).json("You're not authenticated")
        if (!refreshTokens.includes(refreshToken)) { // Check refreshToken đó phải là của chính user login vào
            return res.status(403).json("Refresh token is not valid");
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if(err) {
                console.log(err);
            }
            refreshTokens = refreshTokens.filter(token => token !== refreshToken)  // Lọc cái refreshToken đó ra

            // Create new accessToken, refreshToken
            const newAccessToken = authController.generateAccessToken(user);
            const newRefreshToken = authController.generateRefreshToken(user);
            refreshTokens.push(newRefreshToken);

            // save refreshToken trong Cookies
            res.cookie('refreshToken', newRefreshToken, {
                httpOnly: true,
                secure: false,  // Khi làm để false, nào deploy thì để true cho bảo vệ
                path: '/',
                sameSite: 'strict'
            })

            res.status(200).json({ accessToken: newAccessToken })
        })
    },

    // LOG OUT
    userLogout: async(req, res) => {
        refreshTokens = refreshTokens.filter(token => token !== req.cookies.refreshToken);
        res.clearCookie('refreshToken');
        res.status(200).json("Logged out...");
    }
}

module.exports = authController