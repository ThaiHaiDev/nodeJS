class SiteController {
    // [GET] /
    index(req, res) {
        res.render('home')
    }

    // [GET] /search
    search(req, res) {
        res.send("Site Detail")
    }
}

module.exports = new SiteController