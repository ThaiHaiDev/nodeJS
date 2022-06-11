module.exports = {
    mutipleMongooseToObject: function (mongose) {
        return mongose.map(mong => mong.toObject())
    },
    mongooseToObject: function (mong) {
        return mong ? mong.toObject() : mong
    }
}