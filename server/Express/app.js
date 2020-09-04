const express = require("express");
const morgan = require("morgan");
const { environment } = require('./config');
const cors = require('cors');
const bodyParser = require("body-parser")
const usersRouter = require("./routes/users")
const areasRouter = require("./routes/areas")
const routesRouter = require('./routes/route')
const followersRouter = require('./routes/followers')
const searchRouter = require('./routes/search')
const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
// app.use(cors({ origin: "http://localhost:19002" }));

app.use(usersRouter)
app.use('/area',areasRouter)
app.use('/route',routesRouter)
app.use('/follow/',followersRouter)
app.use('/search/', searchRouter)



app.get("/", (req,res)=>{
    res.send({"message" : "You're Connected"})
})
// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
    const err = new Error("The requested resource couldn't be found.");
    err.status = 404;
    err.errors = ["Could not find string of resource"]
    next(err);
});



// Generic error handler.
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    const isProduction = environment === "production";
    res.json({
        title: err.title || "Server Error",
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});

module.exports = app;
