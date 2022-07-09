const jwt = require('jsonwebtoken');

// middleware như 1 thằng ở giữa, nếu thoả hết điều kiện này nó mới cho đi tiếp, không thỏa thì trả lại ở else

const middlewareController = {
    // verifyToken
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if(token) {
            // Bearer 123abc
            const accessToken = token.split(" ")[1]
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, user) => {
                if(err) {
                    res.status(403).json('Token is not valid')
                }
                req.user = user;
                next();  // Đạt hết đủ điều kiện mới được chạy tiếp
            })
        }
        else {
            res.status(401).json("You're not authenticated")
        }
    }
}

module.exports = middlewareController;