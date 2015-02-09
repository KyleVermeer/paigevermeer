var main = require("./controllers/main.js");

module.exports = function(app) {

    app.get('/', main.index);
    app.get('/aboutMe', main.aboutMe);
    app.get('/portfolio', main.portfolio);
    app.get('/pricing', main.pricing);
}
