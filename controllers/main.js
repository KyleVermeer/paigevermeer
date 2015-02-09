module.exports.index = function(req, res) {
    res.render('index', { title: 'Paige Vermeer' } );
}

module.exports.aboutMe = function(req, res) {
    res.render('aboutMe', { title: 'About Paige' } );
}

module.exports.portfolio = function (req, res) {
    res.render('portfolio', { title: 'Portfolio' } );
}

module.exports.pricing = function (req, res) {
    res.render('pricing', { title: 'Pricing'} );
}
