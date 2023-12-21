const sql = require("./db.js");

// constructor
const User = function (user) {

};


User.getAll = (result) => {
    let query = "SELECT * FROM user";

    sql.query(query, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("users: ", res);
        result(null, res);
    });
};