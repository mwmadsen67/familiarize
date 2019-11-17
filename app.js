const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users')
const passport = require("passport")

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log(res)
    res.send("yo")
});
    
app.use("/api/users",users)
app.use(passport.initialize());
require('./config/passport')(passport);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));