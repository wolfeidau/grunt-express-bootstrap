module.exports = function(app) {

    // Home/main
    app.get('/', function(req, res) {
        res.render('index', { title: '{%= name %}' })
    })

}