
import serveIndex from "serve-index";
import logger from "morgan";
import path from "path";
import favicon from "serve-favicon"
import bodyParser from "body-parser";


module.exports = app => {
    app.use(favicon(path.join(__dirname, '../favicon.ico')));
    app.set("json spaces", 4);
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use((req, res, next) => { next() });
}