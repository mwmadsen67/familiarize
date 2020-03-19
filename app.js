const express = require("express")
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users')
const tweets = require('./routes/api/tweets.js')
const trees = require('./routes/api/trees')
const nodes = require('./routes/api/nodes')
const passport = require("passport")
const seed = require("./seeder")

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true,
    useFindAndModify: false })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get('/', (req, res) => {
    console.log(res);
    res.send("Familiarize");
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);
app.use("/api/users",users)
app.use("/api/tweets",tweets)
app.use("/api/trees", trees)
app.use('/api/nodes', nodes)

const port = process.env.PORT || 5000;
//seed mongo database
seed();
app.listen(port, () => console.log(`Server running on port ${port}`));