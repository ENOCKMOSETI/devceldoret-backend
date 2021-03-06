require("dotenv").config({ path: `${__dirname}/.env` });
const pg = require("pg");
const { APP_ENV, DB_HOST, DB_USER, DB_PASS } = process.env;
if (process.env.NODE_ENV === "development")
    module.exports = new pg.Pool();
//# sourceMappingURL=helper.js.map