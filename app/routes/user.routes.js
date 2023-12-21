module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.get("/", user.findAll);

    app.use('/api/user', router);
};
